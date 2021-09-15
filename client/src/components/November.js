import React from 'react'
// import CompletedMatch from './CompletedMatch'
import UpcomingMatch from './UpcomingMatch'

const November = () => {
    return (
        <div>
        <UpcomingMatch 
          isHome="true"
          teamTwo="Atlanta"
          matchDate="Sunday, November 7th"
          matchTime="3:30pm EST"
         />
        </div>
    )
}
export default November