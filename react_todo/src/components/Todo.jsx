import React from 'react';

class Todo extends React.Component {
    handleClickDelete = () => {
        const { onDelete, id } = this.props;
        onDelete(id)
      }

    handleClickEdit = () => {
        const { onChange, id, editing} = this.props
        onChange(id, "editing", !editing);
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