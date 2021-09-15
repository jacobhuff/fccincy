import React from 'react'
import CompletedMatch from './CompletedMatch'

const April = () => {
    return (
        <div>
            <CompletedMatch 
            isHome="false"
            teamTwo="Nashville"
            teamOneScore="2"
            teamTwoScore="2"
            matchResult="Draw"
            matchDate="Saturday, April 17th"
            />
            <CompletedMatch 
            isHome="false"
            teamTwo="New York City"
            teamOneScore="0"
            teamTwoScore="5"
            matchResult="Loss"
            matchDate="Saturday, April 24th"
            />
        </div>
    )
}

export default April