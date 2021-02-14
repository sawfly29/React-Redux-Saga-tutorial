import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return <form onSubmit={this.submitHandler}>
        <div className='form-group'>
            <label htmlFor='title'>Заголовок</label>
            <input type='text' className='form-control' id='title' />
        </div>
        <button className = 'btn btn-success' type='submit'>Создать</button>
    </form>;
  }
}