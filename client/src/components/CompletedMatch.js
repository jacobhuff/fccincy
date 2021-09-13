import React from 'react'

const CompletedMatch = ({isHome, teamTwo, teamOneScore, teamTwoScore, matchResult, matchDate}) => {
    
    // Special Cases
    let teamTwoPhoto = teamTwo;
    if (teamTwo === "D.C. United") teamTwoPhoto = "dcunited"
    else if (teamTwo === "New York City") teamTwoPhoto = "nycfc"
    else if (teamTwo === "New York") teamTwoPhoto = "nyredbulls"
    else if (teamTwo === "New England") teamTwoPhoto = "revolution"

    return (
        <div className="matchup">
            <div className="teams">
                <div className="team">
                    <div className="team-logo"><img src="images/cincinnati.svg" alt="" /></div>
                    <div className="team-name">Cincinnati</div>
                </div>
                <div className="versus">{isHome === "true" ? 'vs' : 'at'}</div>
                <div className="team">
                    <div className="team-logo"><img className={teamTwoPhoto === "miami" ? 'miami' : ''} src={"images/" + teamTwoPhoto.toString().toLowerCase() + ".svg"} alt="" /></div>
                    <div className="team-name">{teamTwo}</div>
                </div>
            </div>
            <div className="game-time-container">
                <div className="game-scores">
                    <div className="game-score">{teamOneScore}</div>
                    <div className="game-versus" id={matchResult}>{matchResult}</div>
                    <div className="game-score">{teamTwoScore}</div>
                </div>
                <div className="game-date">{matchDate}</div>
                <div className="game-link">Details</div>
            </div>
        </div>
    )
}

export default CompletedMatch
