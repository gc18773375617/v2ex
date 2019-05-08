import React,{Component} from 'react'
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom'
import List from '../dom/list'
class router extends Component{
    render(){
        return(
            <Router>
                <Link to="/list">List</Link>
                <Route path="/list" component={List} />
            </Router>
        )
    }
}
export default router