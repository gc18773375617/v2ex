import React,{Component} from 'react'
import axios from 'axios'

class List extends Component {
	componentDidMount=()=>{
		axios.get("/api/topics/hot.json")
		.then(res=>{
			
		});
		console.log(this)
	}
	render(){
		return(
		<h1>this is List</h1>
		)
	}
	
}
export default List;