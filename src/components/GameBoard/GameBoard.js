import './GameBoard.css'
import React from 'react'


const GameBoard = ({board,userName, playablePosition}) => {
    console.log(board);
    console.log(userName);
    let TheBoard =()=> board.map((row) => <tr>{row.map((element=><td ><div className={element==userName?" cell red":element==0?"cell":"cell blue"}></div></td>))}</tr>)
    let PlayablePosition = () =>{
        return playablePosition.map((element)=>{
            return <td><div className={element==0?"head-cell":"cell blue"}></div></td>
        })
    }
    return (
        <table>
            <tr>
                <PlayablePosition/>
            </tr>
            <TheBoard/>
        </table>
    )
}

export default GameBoard
