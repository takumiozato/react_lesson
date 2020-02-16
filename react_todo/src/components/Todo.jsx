import React from 'react';
import Button from '@material-ui/core/Button';

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
        <Button variant="outlined" color="primary" size="small" onClick={this.handleClickEdit}>編集</Button>
        <Button variant="outlined" color="secondary" size="small" onClick={this.handleClickDelete}>削除</Button>
      </React.Fragment>
    );
  }
}

export default Todo;