import React,{ Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../css/nav.scss';
import img12 from '../img/v2ex.png';
import Router from '../router'
import axios from 'axios'
class appNav extends Component{
    constructor(){
        super();
        this.state = {
            query:"creative"
        }
        console.log(this)
    }
    componentDidMount(){
        axios.get("/api/nodes/all.json")
        .then((res)=>{
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <div className="head">
                    <img src={img12} alt=""/>
                </div>
                <div className="box_border">
                    <div className="box">
                        <div className="link">
                            <Link className={this.state.query === "tech"?"link_selected":""} to="/list/tech">技术</Link>
                            <Link className={this.state.query === "creative"?"link_selected":""} to="/list/creative">创意</Link>
                            <Link className={this.state.query === "play"?"link_selected":""} to="/list">好玩</Link>
                            <Link className={this.state.query === "apple"?"link_selected":""} to="/list">Apple</Link>
                            <Link className={this.state.query === "jobs"?"link_selected":""} to="/list">酷工作</Link>
                            <Link className={this.state.query === "deals"?"link_selected":""} to="/list">交易</Link>
                            <Link className={this.state.query === "city"?"link_selected":""} to="/list">城市</Link>
                            <Link className={this.state.query === "qna"?"link_selected":""} to="/list">问与答</Link>
                            <Link className={this.state.query === "hot"?"link_selected":""} to="/list">最热</Link>
                            <Link className={this.state.query === "all"?"link_selected":""} to="/list">全部</Link>
                            <Link className={this.state.query === "r2"?"link_selected":""} to="/list">R2</Link>
                        </div>
                        <Router/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default withRouter(appNav);