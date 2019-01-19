import React, { Component } from "react";

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  mining() {
    console.log('click mining')
    fetch(`http://127.0.0.1:4040/mining`)
      .then(response => response.json())
      .then(data => this.setState({data:data}))
  }
  render() {
    return (
      <div>
        <h2>send transaction</h2>
        <div>
  <form onSubmit={this.transaction}>
     <div>
     Sender<input id="sender" type="text"/><br/>
     Receiver<input id="receiver" type="text"/><br/>
     Amount<input id="amount" type="text"/>
     </div>
    <div>
    <button className='button-transaction'>Send</button>
     </div>
   </form>
</div>

        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Transactions;
