import React, { useState } from "react";
import "./font-face.css";
import {
    Page,
    Month,
    DaysAndDescriptionPanel,
    DaysPanel,
    Day,
    Description} from "./Components";



export const Main = () => {

    const currentMonth = new Date().getMonth();
    const months = [
        ['January', 31],
        ['February', 29],
        ['March', 31],
        ['April', 30],
        ['May', 31],
        ['June', 31],
        ['July', 30],
        ['August', 31],
        ['September', 30],
        ['October', 31],
        ['November', 30],
        ['December', 31]
    ];
    const [selectedDate, switchSelectedDate] = useState(-1);
    const birthdays = [
        [12, 9, 'Sasha'],
        [15, 9, 'Jacob'],
        [8, 10, 'Noah']
    ];






    const createDays = () => {
        let days = [];
        let birthdaysInThisMonth = [];

        birthdays.forEach(birthday => {
            if (birthday[1] === currentMonth + 1){
                birthdaysInThisMonth.push(birthday);
            }
        });

        console.log(birthdaysInThisMonth);

        for (let i = 0; i <= months[currentMonth][1]; i++){

            days.push(
                <Day onClick = {e => selectDate(e, false)} key = {i}>{i+1}</Day>
            );
        }
        return days;
    }

    const selectDate = (e, unset) => {
        e.preventDefault();
        if (unset){
            switchSelectedDate(-1);
        } else {
            switchSelectedDate(e.target.innerHTML);
        }
    }

    return (
        <Page>
            <Month onClick = {e => selectDate(e, true)}>{months[currentMonth][0]}
                {selectedDate !== -1 && ", " + selectedDate}
            </Month>
            <DaysAndDescriptionPanel>
                <DaysPanel>{createDays()}</DaysPanel>
                <Description/>
            </DaysAndDescriptionPanel>

        </Page>
    );
}