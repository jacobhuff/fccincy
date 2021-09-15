import React from 'react'

const UpcomingMatch = ({isHome, teamTwo, matchDate, matchTime}) => {

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
                    <div className="team-logo"><img className={teamTwoPhoto === "Miami" ? 'miami' : ''} src={"images/" + teamTwoPhoto.toString().toLowerCase() + ".svg"} alt="" /></div>
                    <div className="team-name">{teamTwo}</div>
                </div>
            </div>
            <div class="game-time-container">
                <div class="game-date">{matchDate}</div>
                <div class="game-time">{matchTime}</div>
                <div class="game-link">Preview</div>
            </div>
        </div>
    )
}

export default UpcomingMatch
