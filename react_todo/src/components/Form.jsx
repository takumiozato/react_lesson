import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
  constructor(props) {
    super(props)
    // this.state の中には初期値が入る
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    // console.log(e)
    this.setState({ input: e.currentTarget.value })
  };

  // handleSubmit メソッドを作る
  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.input) return;
    this.setState({ input: e.currentTarget.value })
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-basic"
          label="Todoを入力"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="contained" color="primary" size="small">追加</Button>
      </form>
    );
  }
}

export default Form;