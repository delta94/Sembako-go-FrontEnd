import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";

import Home from "../src/View/TampilanAwal";
import history from "./history";
//import LoginPembeli from "./View/Login/LoginPembeli";
import Login from "./View/LoginIndex";
import LoginPenjual from "./View/Login/LoginPenjual";
import RegisterPenjual from "./View/Penjual/RegisterPenjual";

export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path ="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/Login" component={Login}/>
                    <Route path = "/RegisterPenjual" component={RegisterPenjual}/>
                    <Route path ="/LoginPenjual" component={LoginPenjual}/>
                </Switch>
            </Router>
        )
    }
}