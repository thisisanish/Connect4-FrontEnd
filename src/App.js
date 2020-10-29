import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Game from '../src/components/Game/Game'
import Join from './components/Join/Join'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Join} />
                <Route path='/game' component={Game}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
