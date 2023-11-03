export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        filterAll: true,
        filterWithout: true,
        filterTransferOne: true,
        filterTransfersTwo: true,
        filterTransfersThree: true,
        activeTab: null,
      }
    case 'ALL_REMOVE':
      return {
        ...state,
        filterAll: false,
        filterWithout: false,
        filterTransferOne: false,
        filterTransfersTwo: false,
        filterTransfersThree: false,
        activeTab: null,
      }
    case 'WITHOUT':
      return {
        ...state,
        filterWithout: true,
        filterAll: false,
        activeTab: null,
      }
    case 'WITHOUT_REMOVE':
      return { ...state, filterAll: false, filterWithout: false, activeTab: null }
    case '1_TRANSFER':
      return { ...state, filterTransferOne: true, activeTab: null }
    case '1_TRANSFER_REMOVE':
      return { ...state, filterAll: false, filterTransferOne: false, activeTab: null }
    case '2_TRANSFERS':
      return { ...state, filterTransfersTwo: true, activeTab: null }
    case '2_TRANSFERS_REMOVE':
      return { ...state, filterAll: false, filterTransfersTwo: false, activeTab: null }
    case '3_TRANSFERS':
      return { ...state, filterTransfersThree: true }
    case '3_TRANSFERS_REMOVE':
      return { ...state, filterAll: false, filterTransfersThree: false, activeTab: null }
    case 'TICKETS_DEFAULT':
      return { ...state, tickets: action.payload }
    case 'TICKETS_FILTERED':
      return { ...state, ticketsFiltered: action.payload.name }
    case 'ADD_TICKETS':
      return { ...state, ticketsCount: action.maxCount + 5 }
    case 'TAB_ACTIVE':
      return { ...state, activeTab: action.payload }
    case 'TICKETS_ALL':
      return { ...state, ticketsAll: action.payload }
    case 'TICKETS_WITHOUT':
      return { ...state, ticketsWithout: action.payload }
    case 'TICKETS_1_TRANSFER':
      return { ...state, ticketsTransfersOne: action.payload }
    case 'TICKETS_2_TRANSFERS':
      return { ...state, ticketsTransfersTwo: action.payload }
    case 'TICKETS_3_TRANSFERS':
      return { ...state, ticketsTransfersThree: action.payload }
    default:
      return state
  }
}
