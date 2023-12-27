import { store } from '..'

import {
  setTicketsAll,
  setTicketsWithout,
  setTicketsTransferOne,
  setTicketsTransferTwo,
  setTicketsTransferThree,
} from './actionCreators'

const fetchTickets = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      return { stop: data.stop, tickets: data.tickets, error: false }
    } else {
      return { stop: false, tickets: [], error: true }
    }
  } catch (error) {
    return { stop: false, tickets: [], error: true }
  }
}

export const getSearchID = async () => {
  try {
    const result = await fetch('https://aviasales-test-api.kata.academy/search').then((res) => res.json())
    if (result && result.searchId) {
      localStorage.setItem('searchId', result.searchId)
    } else {
      console.error('Failed to retrieve search ID')
    }
  } catch (error) {
    console.error('Error occurred while fetching search ID:', error)
  }
}

export const getTicketsListDefault = async () => {
  let minID = 100
  const searchId = localStorage.getItem('searchId')
  if (!searchId) {
    console.error('Search ID is missing in local storage')
    return // or handle the error as needed
  }

  const fetchTicketsRecursive = async () => {
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    let tickets = []
    const result = await fetchTickets(url)

    if (result.error) {
      if (result.stop) {
        sessionStorage.removeItem('searchId')
        store.dispatch({ type: 'TICKETS_DEFAULT', payload: result })
      }
    } else {
      tickets = result.tickets.map((el) => {
        el.id = minID
        minID += 1
        return el
      })

      if (tickets.length > 0) {
        getTicketsAll(tickets)
        getTicketsWithout(tickets)
        getTickets1Transfer(tickets)
        getTickets2Transfers(tickets)
        getTickets3Transfers(tickets)
      }
    }

    if (result.stop) {
      store.dispatch({ type: 'TICKETS_DEFAULT', payload: result })
      return { allTickets: tickets, stop: true }
    } else {
      return fetchTicketsRecursive()
    }
  }

  return await fetchTicketsRecursive()
}

export const getTicketsAll = (list) => {
  setTicketsAll(list)
}

export const getTicketsWithout = (list) => {
  const result = list.filter((el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0)
  setTicketsWithout(result)
}

export const getTickets1Transfer = (list) => {
  const result = list.filter((el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
  setTicketsTransferOne(result)
}

export const getTickets2Transfers = (list) => {
  const result = list.filter((el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
  setTicketsTransferTwo(result)
}

export const getTickets3Transfers = (list) => {
  const result = list.filter((el) => el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
  setTicketsTransferThree(result)
}
