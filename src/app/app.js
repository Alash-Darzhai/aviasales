import { useEffect } from 'react'

import Header from '../header'
import Sidebar from '../sidebar'
import Tabs from '../tabs'
import TicketsList from '../ticketsList'
import { getTicketsListDefault, getSearchID } from '../redux/requests'

import classes from './app.module.scss'

getSearchID()

const App = () => {
  useEffect(() => {
    getTicketsListDefault()
  }, [])
  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes['app-wrap']}>
          <Sidebar />
          <div>
            <Tabs />
            <TicketsList />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
