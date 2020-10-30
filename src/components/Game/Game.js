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
    const [position,setPosition] = useState('')
    useEffect(()=>{
        const {userName,room} = queryString.parse(location.search)
        setRoom(room)
        setUserName(userName)
        socket = io(ENDPOINT)
        socket.emit('join',{userName,room})
        
        
    },[ENDPOINT,location.search])
    
    useEffect(()=>{
        socket.on('game',(gameData)=>{
            setPlayablePosition(gameData.playablePosition)
            setBoard(gameData.gameStatus)
        })
    })
    
    function handlePositionSubmit (e) {
        console.log("reached");
        // socket.emit('playPosition',{userName,position})
      
        socket.emit('playPosition',{userName,room,position})
        // socket.on('game',(gameData)=>{
        //     setPlayablePosition(gameData.playablePosition)
        //     setBoard(gameData.gameStatus)


        // })
        console.log(userName);
        
    }
    
    
    return (
        <div>
            <h1>Connect 4</h1>
            <h2>You are {userName}</h2>
            <input type="text" name="position" id="position" placeholder ='position' onChange={(e)=>setPosition(e.target.value)}/>
            <button type="submit" onClick={handlePositionSubmit}>Submit</button>
            <GameBoard playablePosition={playablePosition} userName={userName} board={board}/>
        </div>
    )
}

export default Game
