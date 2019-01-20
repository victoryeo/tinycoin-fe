import React, { Component } from "react";

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      sender: '',
      receiver: '',
      amount: ''
    };
    //this.onSubmit = this.onSubmit.bind(this);
  }
  updateSender(evt) {
    this.setState({
      sender: evt.target.value
    })
    //console.log(this.state.sender)
  }
  updateReceiver(evt) {
    this.setState({
      receiver: evt.target.value
    })
    //console.log(this.state.receiver)
  }
  updateAmount(evt) {
    this.setState({
      amount: evt.target.value
    })
    //console.log(this.state.amount)
  }
  onSubmit(event) {
    event.preventDefault()
    console.log('transaction', this.state.sender, this.state.receiver, this.state.amount)

    fetch(`http://127.0.0.1:4040/txion`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'Post',
      body: JSON.stringify(
        {from: this.state.sender,
          to: this.state.receiver,
          amount: this.state.amount
      })
    }).then(response => response.json())
      .then(data => this.setState({data:data}))
  }
  render() {
    return (
      <div>
        <h2>Send transaction</h2>
        <div>
           <form onSubmit={this.transaction}>
             <div>
               <label>Sender</label><input className="sender" type="text"
                value={this.state.sender} onChange={evt => this.updateSender(evt)}/><br/>
               <label>Receiver</label><input className="receiver" type="text"
                value={this.state.receiver} onChange={evt => this.updateReceiver(evt)}/><br/>
               <label>Amount</label><input className="amount" type="text"
                value={this.state.amount} onChange={evt => this.updateAmount(evt)}/>
             </div>
            <div>
              <button className='button-transaction'
                onClick={evt => this.onSubmit(evt)}>Send</button>
             </div>
           </form>
        </div>

        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Transactions;
