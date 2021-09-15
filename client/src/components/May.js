import React from 'react'
import CompletedMatch from './CompletedMatch'

const May = () => {
    return (
        <div>
            <CompletedMatch 
          isHome="false"
          teamTwo="Orlando"
          teamOneScore="0"
          teamTwoScore="3"
          matchResult="Loss"
          matchDate="Saturday, May 1st"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="Miami"
          teamOneScore="2"
          teamTwoScore="3"
          matchResult="Loss"
          matchDate="Sunday, May 16th"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Montreal"
          teamOneScore="2"
          teamTwoScore="1"
          matchResult="Win"
          matchDate="Saturday, May 22nd"
         />
         <CompletedMatch 
          isHome="true"
          teamTwo="New England"
          teamOneScore="0"
          teamTwoScore="1"
          matchResult="Loss"
          matchDate="Saturday, May 29th"
         />
        </div>
    )
}

export default May