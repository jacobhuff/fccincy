import React, { useState } from 'react'
import April from './April'
import May from './May'
import June from './June'
import July from './July'
import August from './August'
import September from './September'
import October from './October'
import November from './November'

function Schedule() {

    const [currMonth, setMonth] = useState("September");

    const allMonths = ["April", "May", "June", "July", "August", "September", "October", "November"]
    const changeMonth = (arrow) => {
        let newIndex;
        for (let i = 0; i < allMonths.length; i++) {
            if (allMonths[i] === currMonth) {
                newIndex = i;
                if (arrow === "left" && currMonth !== "April") newIndex = i - 1;
                else if (arrow === "right" && currMonth !== "November") newIndex = i + 1;
                break;
            }
        }

        setMonth(allMonths[newIndex]);
    }

    if (currMonth === "April") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <April />
                </div>
            </div>
        )
    } else if (currMonth === "May") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <May />
                </div>
            </div>
        )
    } else if (currMonth === "June") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <June />
                </div>
            </div>
        )
    } else if (currMonth === "July") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <July />
                </div>
            </div>
        )
    } else if (currMonth === "August") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <August />
                </div>
            </div>
        )
    } else if (currMonth === "September") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <September />
                </div>
            </div>
        )
    } else if (currMonth === "October") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <October />
                </div>
            </div>
        )
    } else if (currMonth === "November") {
        return (
            <div>
                <div class="month-scroller">
                    <div onClick={() => changeMonth("left")} className="left-arrow">&lt;</div>
                    <div className="current-month">{currMonth}</div>
                    <div onClick={() => changeMonth("right")} className="right-arrow">&gt;</div>
                </div>
                <div className="container">
                    <November />
                </div>
            </div>
        )
    }
}

export default Schedule
