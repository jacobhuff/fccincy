import React from 'react'
import CompletedMatch from './CompletedMatch'

const June = () => {
    return (
        <div>
          <CompletedMatch 
          isHome="true"
          teamTwo="Colorado"
          teamOneScore="0"
          teamTwoScore="2"
          matchResult="Loss"
          matchDate="Saturday, June 19th"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Chicago"
          teamOneScore="1"
          teamTwoScore="0"
          matchResult="Win"
          matchDate="Wednesday, June 23rd"
         />
         <CompletedMatch 
          isHome="false"
          teamTwo="Toronto"
          teamOneScore="2"
          teamTwoScore="0"
          matchResult="Win"
          matchDate="Saturday, June 26th"
         />
        </div>
    )
}

export default June