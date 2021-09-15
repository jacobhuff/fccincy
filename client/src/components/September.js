import React from 'react'
import CompletedMatch from './CompletedMatch'
import UpcomingMatch from './UpcomingMatch'

const September = () => {
    return (
        <div>
        <CompletedMatch 
          isHome="true"
          teamTwo="Miami"
          teamOneScore="0"
          teamTwoScore="1"
          matchResult="Loss"
          matchDate="Saturday, September 4th"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Toronto"
          teamOneScore="2"
          teamTwoScore="0"
          matchResult="Win"
          matchDate="Saturday, September 11th"
         />
         <UpcomingMatch 
          isHome="false"
          teamTwo="Atlanta"
          matchDate="Wednesday, September 15th"
          matchTime="7:00pm EST"
         />
         <UpcomingMatch 
          isHome="true"
          teamTwo="New York City"
          matchDate="Saturday, September 18th"
          matchTime="7:30pm EST"
         />
         <UpcomingMatch 
          isHome="false"
          teamTwo="D.C. United"
          matchDate="Saturday, September 25th"
          matchTime="7:00pm EST"
         />
         <UpcomingMatch 
          isHome="false"
          teamTwo="Toronto"
          matchDate="Wednesday, September 29th"
          matchTime="7:00pm EST"
         />
        </div>
    )
}
export default September