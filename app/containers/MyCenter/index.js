/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import './index.less'
import Header from "../../components/Header/index";
export default class MyCenter extends Component{

    render(){
        return(
            <div className="myCenter">
               <Header/>
                <div className="user">
                    <div className="userAvatar">
                        <img src="" alt=""/>
                        <span>用户名</span>
                    </div>
                    <div className="userMsg"><a href="http://localhost:3002/#/shoppingCar">我的订单 <span className="arrow pull-right">&gt;</span></a></div>
                    <div className="userList">
                        <p>我的信息 <span className="arrow pull-right">&gt;</span></p>
                        <div className="hid">
                            <p><a href="javascript:;">个人信息</a><span className="arrow pull-right">&gt;</span></p>
                            <p><a href="javascript:;">收获地址</a><span className="arrow pull-right">&gt;</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
