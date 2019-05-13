import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import List from '../dom/list'
import '../css/list.scss'
class router extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path="/list/:type" component={List} />
                </Switch>
            </div>
        )
    }
}
export default router