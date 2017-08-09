/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import '../../download/font_pxdwvzv2wt57b9/iconfont.css'
//路由HasRouter
import {HashRouter as Router, Route,Link,Switch} from "react-router-dom";
import Home from "../containers/Home/index";
import List from "../containers/List/index";
import ShoppingCar from "../containers/ShoppingCar/index";
import MyCenter from "../containers/MyCenter/index";
import "./index.less"
import Content from "../components/content/Content";
export default class RouterMap extends Component{
    render(){
        return(

                <Router>
                    <div className="footerBox">
                        <ul className="navList" style={{margin:0}}>
                            <li><Link to="/"><i className="iconfont icon-wxbzhuye"></i>首页</Link></li>
                            <li><Link to="/list"><i  className="icon iconfont icon-shangpin-xianxing"></i>特产</Link></li>
                            <li><Link to="/shoppingCar"><i  className="icon iconfont icon-gouwuchetianjia"></i>订单</Link></li>
                            <li><Link to="/myCenter"><i  className="icon iconfont icon-activity"></i>我的</Link></li>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/list" component={List}/>
                        <Route path="/shoppingCar" component={ShoppingCar}/>
                        <Route path="/myCenter" component={MyCenter}/>
                        <Route path="/content" component={Content}/>
                    </div>
                </Router>
        )
    }
}
