
/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Header from "../../components/Public/Header";
import './index.less';
import MyOrder from "../../components/ShoppingCar/MyOrder";
import OrderPay from "../../components/ShoppingCar/OrderPay";
import OrderSend from "../../components/ShoppingCar/OrderSend";
export default class ShoppingCar extends Component{
    constructor(){
        super();
        this.state={header:'我的订单'}
    }
    componentDidMount(){

    }
    render(){
        return(
            <Router>
                <div>
                    <Header  title={this.state.header}/>
                    <ul className="tab">
                        <li className="tab-item"><Link to="/shoppingCar">全部</Link></li>
                        <li className="tab-item"><Link to="/shoppingCar/orderPay">待付款</Link></li>
                        <li className="tab-item"><Link to="/shoppingCar/orderSend">待发货</Link></li>
                    </ul>

                        <Route exact path="/shoppingCar" component={MyOrder}/>
                        <Route path="/shoppingCar/orderPay" component={OrderPay}/>
                        <Route path="/shoppingCar/orderSend" component={OrderSend}/>

                </div>
            </Router>
        )
    }
}
