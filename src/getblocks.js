import React, { Component } from "react";

class GetBlocks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  getBlocks() {
    console.log('click getBlocks')
    fetch(`http://127.0.0.1:4040/blocks`)
      .then(response => response.json())
      .then(data => this.setState({data:data}))
  }

  render() {
    return (
      <div>
        <h2>Display blocks</h2>
        <button className='button-blocks'
          onClick={()=>this.getBlocks()}>GetBlocks</button>

        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default GetBlocks;
