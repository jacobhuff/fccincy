import React from 'react'
// import CompletedMatch from './CompletedMatch'
import UpcomingMatch from './UpcomingMatch'

const October = () => {
    return (
        <div>
        <UpcomingMatch 
          isHome="true"
          teamTwo="New York"
          matchDate="Saturday, October 2nd"
          matchTime="7:30pm EST"
         />
         <UpcomingMatch 
          isHome="true"
          teamTwo="Philadelphia"
          matchDate="Saturday, October 9th"
          matchTime="8:00pm EST"
         />
         <UpcomingMatch 
          isHome="true"
          teamTwo="Orlando"
          matchDate="Saturday, October 16th"
          matchTime="7:30pm EST"
         />
         <UpcomingMatch 
          isHome="true"
          teamTwo="Chicago"
          matchDate="Wednesday, October 20th"
          matchTime="7:30pm EST"
         />
         <UpcomingMatch 
          isHome="false"
          teamTwo="Miami"
          matchDate="Saturday, October 23rd"
          matchTime="8:00pm EST"
         />
         <UpcomingMatch 
          isHome="true"
          teamTwo="Nashville"
          matchDate="Wednesday, October 27th"
          matchTime="7:30pm EST"
         />
         <UpcomingMatch 
          isHome="false"
          teamTwo="Philadelphia"
          matchDate="Sunday, October 31st"
          matchTime="7:30pm EST"
         />
        </div>
    )
}
export default October