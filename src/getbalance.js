import React, { Component } from "react";

class GetBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: null,
      address: ''
    };
  }
  updateAddress(evt) {
    this.setState({
      address: evt.target.value
    })
    //console.log(this.state.receiver)
  }
  onBalanceSubmit(event) {
    console.log('click onBalanceSubmit')
    event.preventDefault()

    fetch(`http://127.0.0.1:4040/balance/${this.state.address}`)
      .then(response => response.json())
      .then(data => this.setState({balance:data}))
      .catch((err) => {
        console.log(err)
    })
  }
  render() {
    return (
      <div>
        <h2>Display balance</h2>

          <form onSubmit={this.transaction}>
            <div>
              Address
              <input className="input-balance" type="text"
               value={this.state.address} onChange={evt => this.updateAddress(evt)}/>

             <button className='button-balance'
               onClick={evt => this.onBalanceSubmit(evt)}>GetBalance</button>
            </div>
          </form>

        <p>Balance is: {this.state.balance}</p>
      </div>
    );
  }
}

export default GetBalance;
