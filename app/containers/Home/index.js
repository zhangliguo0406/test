/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
export default class Home extends Component{
    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-xs-10 form-group">
                        <input type="text" className="form-control" placeholder="想要什么快来搜索吧"/>
                    </div>
                    <button className="btn btn-primary btn-sm">搜索</button>
                </div>
            </div>
        )
    }
}
