import React,{Component} from 'react'
import axios from 'axios'
import '../css/list.scss'
class List extends Component {
	constructor(){
		super();
		this.state={
			list:[],
			ty:""
		}
	}
	componentDidMount=()=>{
		this.getData()
	}
	getData=()=>{
		var type = this.props.match.params.type;
		axios.get("/api/topics/show.json?node_name="+type)
		.then(res=>{
			console.log(res)
			const data = res.data
			this.setState({
				list:data.map((i,vo)=>{
					return(
						<div key={vo} className="list_item">
							<ul>
								<li>
									<img src={i.member.avatar_mini} alt=""/>
								</li>
								<li className="item_center">
									<h1><i>{i.node.title}</i> • <span>{i.member.username}</span> </h1>
									<p>{i.title}</p>
									<h2>11 分钟前  •  最后回复 <span>{i.last_reply_by}</span></h2>
								</li>
								<li>
									<i><span>{i.replies}</span></i>
								</li>
							</ul>
						</div>
					)
				}
			),
			ty:type
			})
		})
	}
	componentDidUpdate() {
		console.log(this.state.ty !== this.props.match.params.type)
		if(this.state.ty !== this.props.match.params.type){
			this.getData();
		}
	 }
	render(){
		return(
		<div>
			{this.state.list}
		</div>
		)
	}
	
}
export default List;