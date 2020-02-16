import React from 'react';

class Todo extends React.Component {
  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id)
  }

  handleClickEdit = () => {
    console.log(this.props)
    const { onClick, id, editing } = this.props
    onClick(id, "editing", !editing);
  }

  render() {
    const { text } = this.props
    return (
      <React.Fragment>
        {text}
        <button onClick={this.handleClickEdit}>編集</button>
        <button onClick={this.handleClickDelete}>削除</button>
      </React.Fragment>
    );
  }
}

export default Todo;