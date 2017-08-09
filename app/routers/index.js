import React,{Component} from 'react';
//路由HasRouter
import {HashRouter as Router, Route,Link} from "react-router-dom";
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import ShoppingCar from "../containers/ShoppingCar/index";
import MyCenter from "../containers/MyCenter/index";
import GoodsDetail from '../containers/goodsDetail/index'
import "./index.less"
export default class RouterMap extends Component{
    render(){
        return(

                <Router>
                    <div className="footerBox">
                        <ul className="navList" style={{margin:0}}>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/list">特产</Link></li>
                            <li><Link to="/shoppingCar">订单</Link></li>
                            <li><Link to="/myCenter">我的</Link></li>

                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/list" component={List}/>
                        <Route path="/shoppingCar" component={ShoppingCar}/>
                        <Route path="/myCenter" component={MyCenter}/>
                        <Route path="/goodsDetail" component={GoodsDetail}/>
                    </div>
                </Router>
        )
    }
}
