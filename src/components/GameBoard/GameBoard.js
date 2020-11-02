import './GameBoard.css'
import React from 'react'


const GameBoard = ({board,userName, playablePosition,handlePositionSubmit}) => {
    // console.log(board);
    // console.log(userName);

    const handleDrop =(e)=>{
        // console.log(e);
        // console.log(e.currentTarget);
        handlePositionSubmit(e.currentTarget.name)

    }

    let TheBoard =()=> board.map((row) => <tr >{row.map((element=><td width="80rem"><div className={element===userName?"cell col red":element===0?"cell col":"cell col yellow"}>  </div></td>))}</tr>)
    
    let PlayablePosition = () =>{
        // console.log(playablePosition);
        return playablePosition.map((element,index)=>{
            console.log(element,index);
            return <td  align="center" cli><button  onClick={(e)=>handleDrop(e)} name={index} className= {element!==0?"btn btnO rounded-pill btn-warning":"btn btnO disabled rounded-pill btn-warning"}><i name={index} className="fa fa-lg fa-arrow-circle-down"/></button></td>
        })
    }
    return (
        <table  className="center table-hover"  cellSpacing="0" >
            <tr>
                <PlayablePosition/>
            </tr>
            <TheBoard/>
        </table>
    )
}

export default GameBoard
