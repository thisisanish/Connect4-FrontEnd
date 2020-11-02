import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join = () => {
    const [userName,setUserName] = useState('')
    const [room,setRoom] = useState('')
    return (
        
            <div className="join"> 
                <h1 className="text-center text-white display-3">Join</h1>                
                <h3 className="text-white">Username</h3>                                                                    
                <input className="form-control text-lg" type="text" name="username" id="username" placeholder="username" onChange={(e)=>setUserName(e.target.value)}/>
                <h3 className="text-white">Room</h3>
                <input className="form-control text-lg"  type="text"  name="gameroom" id="gameroom" placeholder="room" onChange={(e)=>setRoom(e.target.value)}/>
                <br/>
                <br/>
                <div className="text-center">
                    <Link onClick={e=>(!room | !userName ?e.preventDefault():null )} to={`/game?userName=${userName}&room=${room}`}>
                        <button className="btn btn-lg btn-danger rounded" type="submit">Submit</button>
                    </Link>
                </div>
                

            </div>
            
        
    )
}

export default Join
