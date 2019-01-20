import React, { Component } from 'react'
import logo from './logo-tiny.png'
import './App.css'
import {
  BrowserRouter,
  Route,
  Router,
  NavLink,
  HashRouter,
  Redirect
} from "react-router-dom"
import Transactions from "./transactions"
import GetBlocks from "./getblocks"
import GetBalance from "./getbalance"
import Mining from "./mining"
import PropTypes from "prop-types"
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doRedirect: false
    }
    //this.transactions = this.transactions.bind(this);
    //this.getblocks = this.getblocks.bind(this);
  }
  //static contextTypes = {
  //  router: PropTypes.object
  //}
  transactions() {
    console.log('click transactions')
    //this.props.history.push('/transactions')
    this.setState({
      doRedirect: true
    });
  }
  getblocks() {
    window.open('/getblocks', "_blank") //to open new page
  }
  render() {
    if (this.state.doRedirect)
      console.log('trie')
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tinycoin
          </p>
        </header>
        <body>
        <p>
          Tiny Coins wallet
        </p>
        <ul className="header">
          <li><NavLink to="/transactions">Transactions</NavLink></li>
          <li><NavLink to="/getblocks">GetBlocks</NavLink></li>
          <li><NavLink to="/getbalance">GetBalance</NavLink></li>
          <li><NavLink to="/mining">Mining</NavLink></li>
        </ul>
          <div className="content">
            <Route path="/transactions" component={Transactions}/>
            <Route path="/getblocks" component={GetBlocks}/>
            <Route path="/getbalance" component={GetBalance}/>
            <Route path="/mining" component={Mining}/>
          </div>
        </body>
      </div>
      </BrowserRouter>
    )
  }
}

export default (App)
