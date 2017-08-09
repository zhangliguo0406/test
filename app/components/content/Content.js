import React,{Component} from 'react';

export default class Content extends Component{
    constructor(props){
        super(props);
        console.log(props);
    };
    render(){
       // console.log(this.props.location);
        //let s=this.props.location.search.split("?")[1];
        //let query=eval("({"+s.replace(/&/g,"',").replace(/=/g,":'")+"})");
       // console.log(s,query);
        return (
            <div>
               {/* {query._id}*/}
            </div>
        )
    }
}
//this.props.router.replace({pathname:"/Content", query:value})




