import React from "react";
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'

 class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    
    const {title} = this.state;
    if (!title.trim()){return this.props.alert && <Alert text = {this.props.alert}/>}
    const newPost = {title, id: Date.now().toString()}
    this.props.createPost(newPost)
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
        
      {this.props.alert && <Alert text = {this.props.alert}/>}
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

const mapDispatchToProps = {
  createPost, showAlert}

  const mapStateToProps = (state) => {
    return {alert: state.app.alert}
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)