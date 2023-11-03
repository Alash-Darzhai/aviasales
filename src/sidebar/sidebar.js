import { connect } from 'react-redux'

import './sidebar.scss'

import {
  setFilterAllOn,
  setFilterAllOff,
  setFilterWithoutOn,
  setFilterWithoutOff,
  setFilterTransferOneOn,
  setFilterTransferOneOff,
  setFilterTransfersTwoOn,
  setFilterTransfersTwoOff,
  setFilterTransfersThreeOn,
  setFilterTransfersThreeOff,
} from '../redux/actionCreators'
import { store } from '..'

const Sidebar = ({ filterAll, filterWithout, filterTransferOne, filterTransfersTwo, filterTransfersThree }) => {
  const changeFilter = (e) => {
    switch (e.target.textContent) {
      case 'Все':
        if (!filterAll) return setFilterAllOn()
        else return setFilterAllOff()
      case 'Без пересадок':
        if (!filterWithout) return setFilterWithoutOn()
        else return setFilterWithoutOff()
      case '1 пересадка':
        if (!filterTransferOne) return setFilterTransferOneOn()
        else return setFilterTransferOneOff()
      case '2 пересадки':
        if (!filterTransfersTwo) return setFilterTransfersTwoOn()
        else return setFilterTransfersTwoOff()
      case '3 пересадки':
        if (!filterTransfersThree) return setFilterTransfersThreeOn()
        else return setFilterTransfersThreeOff()
      default:
        return store
    }
  }

  const addingAllCheckbox = (e) => {
    switch (e.target.textContent) {
      case 'Без пересадок':
        if (!filterWithout && filterTransferOne && filterTransfersTwo && filterTransfersThree && !filterAll)
          return setFilterAllOn()
        else return
      case '1 пересадка':
        if (filterWithout && !filterTransferOne && filterTransfersTwo && filterTransfersThree && !filterAll)
          return setFilterAllOn()
        else return
      case '2 пересадки':
        if (filterWithout && filterTransferOne && !filterTransfersTwo && filterTransfersThree && !filterAll)
          return setFilterAllOn()
        else return
      case '3 пересадки':
        if (filterWithout && filterTransferOne && filterTransfersTwo && !filterTransfersThree && !filterAll)
          return setFilterAllOn()
        else return
      default:
        return store
    }
  }

  return (
    <div className="sidebar">
      <div>Количество пересадок</div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterAll} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
          }}
        >
          Все
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterWithout} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          Без пересадок
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterTransferOne} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          1 пересадка
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterTransfersTwo} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          2 пересадки
        </label>
      </div>
      <div className="filter">
        <input type="checkbox" className="toggle" checked={filterTransfersThree} onChange={() => {}} />
        <label
          onClick={(e) => {
            changeFilter(e)
            addingAllCheckbox(e)
          }}
        >
          3 пересадки
        </label>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filterAll: state.filterAll,
    filterWithout: state.filterWithout,
    filterTransferOne: state.filterTransferOne,
    filterTransfersTwo: state.filterTransfersTwo,
    filterTransfersThree: state.filterTransfersThree,
  }
}
export default connect(mapStateToProps)(Sidebar)
