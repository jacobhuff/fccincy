import React from 'react'
import CompletedMatch from './CompletedMatch'

const July = () => {
    return (
        <div>
            <CompletedMatch 
          isHome="false"
          teamTwo="Houston"
          teamOneScore="1"
          teamTwoScore="1"
          matchResult="Draw"
          matchDate="Saturday, July 3rd"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Columbus"
          teamOneScore="2"
          teamTwoScore="2"
          matchResult="Draw"
          matchDate="Friday, July 9th"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Montreal"
          teamOneScore="4"
          teamTwoScore="5"
          matchResult="Loss"
          matchDate="Saturday, July 17th"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Atlanta"
          teamOneScore="1"
          teamTwoScore="1"
          matchResult="Draw"
          matchDate="Wednesday, July 21st"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Nashville"
          teamOneScore="0"
          teamTwoScore="3"
          matchResult="Loss"
          matchDate="Saturday, July 24th"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="D.C. United"
          teamOneScore="0"
          teamTwoScore="0"
          matchResult="Draw"
          matchDate="Saturday, July 31st"
         />
        </div>
    )
}

export default July