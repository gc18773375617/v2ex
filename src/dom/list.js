import React,{Component} from 'react'
import '../css/list.css'
import axios from 'axios'

class List extends Component {
	componentDidMount(){
		console.log("sadf");
		axios.get("/api/topics/hot.json")
		.then(res=>{
			console.log(res)
		});
	}
	render(){
		return(
		<h1>this is List</h1>
		)
	}
	
}
export default List;