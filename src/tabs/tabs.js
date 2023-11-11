import { connect } from 'react-redux'

import { setActiveTab } from '../redux/actionCreators'

import classes from './tabs.module.scss'

const Tabs = ({ activeTab }) => {
  const classesCheaper = activeTab === 'Самый дешевый' ? 'tab-cheaper-active' : 'tab-cheaper'
  const classesFaster = activeTab === 'Самый быстрый' ? 'tab-faster-active' : 'tab-faster'

  return (
    <div className={classes['tabs-container']}>
      <div className={`${classes.tab} ${classes[classesCheaper]}`} onClick={(e) => setActiveTab(e.target.textContent)}>
        Самый дешевый
      </div>
      <div className={`${classes.tab} ${classes[classesFaster]}`} onClick={(e) => setActiveTab(e.target.textContent)}>
        Самый быстрый
      </div>
      <div className={`${classes.tab} ${classes['tab-optimal']}`} onClick={() => {}}>
        Оптимальный
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { activeTab: state.activeTab }
}

export default connect(mapStateToProps)(Tabs)
