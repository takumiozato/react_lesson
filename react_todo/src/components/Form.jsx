import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    // this.state の中には初期値が入る
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    console.log(e)
    this.setState({ input: e.currentTarget.value })
  };

  // handleSubmit メソッドを作る
  handleSubmit = e => {
      this.props.onSubmit(this.state.input);
      e.preventDefault()
      if (!this.state.input) return;
      this.setState({input: ""});   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button>追加</button>
      </form>
    );
  }
}

export default Form;