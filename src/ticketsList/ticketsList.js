import React from 'react'
import { connect } from 'react-redux'
import { Spin, Alert } from 'antd'

import Ticket from '../ticket'
import { store } from '..'

import classes from './ticketsList.module.scss'

const TicketsList = ({ tickets, maxCount, sort, isError }) => {
  const sortCheaper = (list) => {
    let newArr = [...list]
    newArr.sort((a, b) => a.price - b.price)
    return newArr
  }

  const sortFaster = (list) => {
    let newArr = [...list]
    newArr.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
    return newArr
  }
  let list = [...tickets]
  let minID = 0
  let elements
  if (!isError) {
    if (list.length > 0) {
      if (sort == 'Самый дешевый') {
        list = [...sortCheaper(list)]
      } else if (sort == 'Самый быстрый') {
        list = [...sortFaster(list)]
      }
      elements = list.slice(0, maxCount).map((el) => {
        minID += 1
        return <Ticket info={el} key={minID}></Ticket>
      })
    } else {
      elements = null
    }
  } else {
    elements = (
      <Alert
        message="Рейсов, подходящих под заданные фильтры, не найдено"
        type="info"
        showIcon
        className={classes.message}
      />
    )
  }

  const loadedPage = elements ? (
    <React.Fragment>
      {elements}
      <button className={classes['btn-more']} onClick={() => store.dispatch({ type: 'ADD_TICKETS', maxCount })}>
        Показать еще 5 билетов
      </button>
    </React.Fragment>
  ) : (
    <Spin className={classes.loader} />
  )
  return <div className={classes['tickets-list']}>{loadedPage}</div>
}

const mapStateToProps = (state) => {
  const removeTwinTickets = (list) => {
    const result = list.filter((object, index, array) => {
      return index === array.findIndex((o) => o.id === object.id)
    })
    return result
  }
  let ticketsArr = []
  if (state.filterAll) {
    ticketsArr.push(...state.ticketsAll)
    return { tickets: ticketsArr, maxCount: state.ticketsCount, sort: state.activeTab }
  } else if (state.filterWithout) {
    ticketsArr.push(...state.ticketsWithout)
  } else if (state.filterTransferOne) {
    ticketsArr.push(...state.ticketsTransfersOne)
  } else if (state.filterTransfersTwo) {
    ticketsArr.push(...state.ticketsTransfersTwo)
  } else if (state.filterTransfersThree) {
    ticketsArr.push(...state.ticketsTransfersThree)
  }
  ticketsArr = [...removeTwinTickets(ticketsArr)]
  ticketsArr = [...ticketsArr.sort(() => Math.random() - 0.5)]
  ticketsArr = ticketsArr || state.ticketsAll
  let isError
  if (
    !state.filterAll &&
    !state.filterWithout &&
    !state.filterTransferOne &&
    !state.filterTransfersTwo &&
    !state.filterTransfersThree
  ) {
    isError = true
  } else {
    isError = false
  }
  return { tickets: ticketsArr, maxCount: state.ticketsCount, sort: state.activeTab, isError: isError }
}

export default connect(mapStateToProps)(TicketsList)
