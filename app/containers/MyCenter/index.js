/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import './index.less'
import Header from "../../components/Public/Header";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
export default class MyCenter extends Component{
    constructor(){
        super();
        this.state={title:"个人中心"}
    }

    render(){
        return(
        <Router>
            <div className="myCenter">
                <Header title={this.state.title}/>
                <div className="user">
                    <div className="userAvatar">
                        <img src="" alt=""/>
                        <span>用户名</span>
                    </div>
                    <div className="userMsg"><a href="http://localhost:3002/#/shoppingCar">我的订单 <span className="arrow pull-right">&gt;</span></a></div>
                    <div className="userList">
                        <p>我的信息 <span className="arrow pull-right icon-more">&gt;</span></p>
                        <div className="hid">
                            <p><Link to="/myDetail">个人信息</Link><span className="arrow pull-right">&gt;</span></p>
                            <p><Link to="/address">收获地址</Link><span className="arrow pull-right">&gt;</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </Router>

        )
    }
}
