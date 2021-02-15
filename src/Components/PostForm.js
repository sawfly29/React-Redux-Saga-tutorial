import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {title} = this.state;
    const newPost = {title, id: Date.now().toString()}
    console.log(newPost)
    this.setState({title: ''})

  };

  changeInputHandler = (event) => {
      event.persist()
      this.setState(prev => ({...prev, ...{
          [event.target.name]: event.target.value}
      }))//один большой хендлер на мноожество инпутов, конкретно этот меняет в стейте по имени инпута значение по value
      //и возврат старого стейта с изменениями в новом стейте
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}
