import React from 'react'
import CompletedMatch from './CompletedMatch'

const August = () => {
    return (
        <div>
           <CompletedMatch 
          isHome="false"
          teamTwo="New York"
          teamOneScore="0"
          teamTwoScore="0"
          matchResult="Draw"
          matchDate="Wednesday, August 4th"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Orlando"
          teamOneScore="1"
          teamTwoScore="1"
          matchResult="Draw"
          matchDate="Saturday, August 7th"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Montreal"
          teamOneScore="0"
          teamTwoScore="0"
          matchResult="Draw"
          matchDate="Wednesday, August 18th"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="New England"
          teamOneScore="1"
          teamTwoScore="4"
          matchResult="Loss"
          matchDate="Saturday, August 21st"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Columbus"
          teamOneScore="2"
          teamTwoScore="3"
          matchResult="Loss"
          matchDate="Friday, August 27th"
         /> 
        </div>
    )
}

export default August