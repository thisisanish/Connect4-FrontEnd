import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Join = () => {
    const [userName,setUserName] = useState('')
    const [room,setRoom] = useState('')
    return (
        <div>
            <h1>Join</h1>
            <input type="text" name="username" id="username" placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
            <input type="text" name="gameroom" id="gameroom" placeholder="room" onChange={(e)=>setRoom(e.target.value)}/>
            <Link onClick={e=>(!room | !userName ?e.preventDefault():null )} to={`/game?userName=${userName}&room=${room}`}>
                <button type="submit">Submit</button>
            </Link>
        </div>
    )
}

export default Join
