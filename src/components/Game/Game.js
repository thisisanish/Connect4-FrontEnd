import React,{useEffect,useState} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import GameBoard from '../GameBoard/GameBoard'

let socket;
let ENDPOINT = 'localhost:3001'

const Game = ({location}) => {
    const [userName,setUserName] = useState('')
    const [room,setRoom] = useState('')
    const [board,setBoard] = useState([[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,]])
    const [playablePosition, setPlayablePosition] = useState([6,6,6,6,6,6,6])
    const [winnerMessage, setWinnerMessage] = useState('')
    // const [position,setPosition] = useState('')
    useEffect(()=>{
        const {userName,room} = queryString.parse(location.search)
        setRoom(room)
        setUserName(userName)
        socket = io(ENDPOINT)
        socket.emit('join',{userName,room})
        
        
    },[location.search])
    
    useEffect(()=>{
        socket.on('game',(gameData)=>{
            console.log(gameData)
            setPlayablePosition(gameData.playablePosition)
            setBoard(gameData.gameStatus)
            setWinnerMessage(gameData.winnerPlayer)
            
        })
    })


    
    
    function handlePositionSubmit (position) {
        console.log(position);
        if(playablePosition[position]!==0){
            console.log(userName,room,position);
            // socket.emit('playPosition',{userName,position})
          
            socket.emit('playPosition',{userName,room,position})
            socket.on('game',(gameData)=>{
                setPlayablePosition(gameData.playablePosition)
                setBoard(gameData.gameStatus)
    
    
            })
           
        }
        
        
    }
const winnerComponent = <h2>{winnerMessage}</h2>
    
    return (
        
        <div className="container game">
    
            <h1 className="text-center text-white"><strong>Connect 4</strong></h1>            
            
            
                <h3 className="text-center text-white">Hi <strong> {userName}</strong>, you in room <strong><u>{room}</u></strong> with color <span className="text-danger"><strong>RED</strong></span> </h3>
                
            <hr/>
            <div  style={{display:'flex',
            justifyContent:"center"}}>
                
                
                <GameBoard  handlePositionSubmit={handlePositionSubmit} playablePosition={playablePosition} userName={userName}  board={board}/>
                
                
            </div>
            <hr/>
            <div className="text-center">
                
                <h3 className="text-center text-white">{winnerComponent}</h3>  
                <button type="button" className="btn btn-lg btn-danger center" onClick={(e)=>socket.emit('resetBoard',room)}>Reset</button>
                 
                </div>
                
            

        </div>
            
    )
}

export default Game
