import { store } from '..'

export const setFilter = (name, payload) => {
  return {
    type: name,
    payload,
  }
}

export const setFilterAllOn = () => {
  return store.dispatch(setFilter('ALL'))
}

export const setFilterAllOff = () => {
  return store.dispatch(setFilter('ALL_REMOVE'))
}

export const setFilterWithoutOn = () => {
  return store.dispatch(setFilter('WITHOUT'))
}

export const setFilterWithoutOff = () => {
  return store.dispatch(setFilter('WITHOUT_REMOVE'))
}

export const setFilterTransferOneOn = () => {
  return store.dispatch(setFilter('1_TRANSFER'))
}

export const setFilterTransferOneOff = () => {
  return store.dispatch(setFilter('1_TRANSFER_REMOVE'))
}

export const setFilterTransfersTwoOn = () => {
  return store.dispatch(setFilter('2_TRANSFERS'))
}

export const setFilterTransfersTwoOff = () => {
  return store.dispatch(setFilter('2_TRANSFERS_REMOVE'))
}

export const setFilterTransfersThreeOn = () => {
  return store.dispatch(setFilter('3_TRANSFERS'))
}

export const setFilterTransfersThreeOff = () => {
  return store.dispatch(setFilter('3_TRANSFERS_REMOVE'))
}

export const setActiveTab = (name) => {
  return store.dispatch(setFilter('TAB_ACTIVE', name))
}

export const setTicketsAll = (list) => {
  return store.dispatch(setFilter('TICKETS_ALL', list))
}

export const setTicketsWithout = (list) => {
  return store.dispatch(setFilter('TICKETS_WITHOUT', list))
}

export const setTicketsTransferOne = (list) => {
  return store.dispatch(setFilter('TICKETS_1_TRANSFER', list))
}

export const setTicketsTransferTwo = (list) => {
  return store.dispatch(setFilter('TICKETS_2_TRANSFERS', list))
}

export const setTicketsTransferThree = (list) => {
  return store.dispatch(setFilter('TICKETS_3_TRANSFERS', list))
}
