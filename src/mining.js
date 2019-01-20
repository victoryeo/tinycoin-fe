import React, { Component } from "react";

class Mining extends Component {
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
        <h2>Start mining?</h2>
        <button className='button-mining'
          onClick={()=>this.mining()}>Mining</button><br/>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default Mining;
