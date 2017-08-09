<<<<<<< HEAD
/**
 * Created by z on 2017/8/7.
 */
import React,{Component} from 'react';
export default class List extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
=======
import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Hot from './components/Hot/index';
import NorthChina from './components/NorthChina/index';
import Northeast from './components/Northeast/index';
import Other from './components/Other/index';
import SouthChina from './components/SouthChina/index';


export default class List extends Component{
    render(){
        return(
            <Router>
                <div className="eat">
                    <div className="title">特产列表页</div>
                    <ul className="allFood">
                        <li><Link to="/list">热销特产</Link></li>
                        <li><Link to="/list/northChina" >东北特产</Link></li>
                        <li><Link to="/list/northeast" >华北特产</Link></li>
                        <li><Link to="/list/other">华南特产</Link></li>
                        <li><Link to="/list/southChina">其他地区</Link></li>
                    </ul>
                    <Route exact path="/list" component={Hot}/>
                    <Route path="/list/northChina" component={NorthChina}/>
                    <Route path="/list/northeast" component={Northeast}/>
                    <Route path="/list/other" component={Other}/>
                    <Route path="/list/southChina" component={SouthChina}/>
                </div>
            </Router>
        )
    }
}

import './index.less';
>>>>>>> 85cbaeb3d84313a85916bbffe7e8edd86c19ffcf
