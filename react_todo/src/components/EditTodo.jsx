import React from 'react';
import Button from '@material-ui/core/Button';

class EditTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    };
  }

  handleChange = e => {
    this.setState({ text: e.currentTarget.value })
  }

  handleSubmit = () => {
    const { onSubmit, id } = this.props;
    if (!this.props.text) return;
    onSubmit(id, this.state.text);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button variant="outlined" color="primary" size="small" onClick={this.handleSubmit}>更新</Button>
      </div>
    );
  }
}

export default EditTodo;