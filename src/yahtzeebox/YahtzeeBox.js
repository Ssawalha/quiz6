import React from 'react'
import './YahtzeeBox.css'

const box = (props) => {
    return(
        <div className = 'Yahtzee'>
            <h3>Dice No. {props.dicenum}: Roll: {props.roll}</h3>
        </div>
    )
};

export default box;