import React from 'react';

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
        <button onClick={this.handleSubmit}>更新</button>
      </div>
    );
  }
}

export default EditTodo;