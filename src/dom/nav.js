import React,{ Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../css/nav.scss';
import img12 from '../img/v2ex.png';
import Router from '../router';
class appNav extends Component{
    constructor(){
        super();
        this.state = {
            query:""
        }
    }
    componentDidMount(){
        this.getQuery()
    }
    componentDidUpdate=()=>{
        if(this.state.query !== this.props.location.pathname){
            this.getQuery()
        }
    }
    getQuery=()=>{
        const que = this.props.location.pathname
        this.setState({
            query:que
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
                            <Link className={this.state.query === "/list/tech"?"link_selected":""} to="/list/tech">技术</Link>
                            <Link className={this.state.query === "/list/creative"?"link_selected":""} to="/list/creative">创意</Link>
                            <Link className={this.state.query === "/list/play"?"link_selected":""} to="/list/play">好玩</Link>
                            <Link className={this.state.query === "/list/apple"?"link_selected":""} to="/list/apple">Apple</Link>
                            <Link className={this.state.query === "/list/jobs"?"link_selected":""} to="/list/jobs">酷工作</Link>
                            <Link className={this.state.query === "/list/deals"?"link_selected":""} to="/list/deals">交易</Link>
                            <Link className={this.state.query === "/list/city"?"link_selected":""} to="/list/city">城市</Link>
                            <Link className={this.state.query === "/list/qna"?"link_selected":""} to="/list/qna">问与答</Link>
                            <Link className={this.state.query === "/list/hot"?"link_selected":""} to="/list/hot">最热</Link>
                            <Link className={this.state.query === "/list/all"?"link_selected":""} to="/list/all">全部</Link>
                            <Link className={this.state.query === "/list/r2"?"link_selected":""} to="/list/r2">R2</Link>
                        </div>
                        <Router/>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(appNav);