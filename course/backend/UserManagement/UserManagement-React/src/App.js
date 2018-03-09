import React, { Component } from 'react';
import api from 'users-api-client-0'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

api.protocol = 'http'
api.host = 'localhost'
api.port = '5000'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    )
  }
}
const PrimaryHeader = () => (
  <ul className="nav nav-tabs mb-4 pt-4 px-4 bg-dark">
    <li className="nav-item mr-1">
      <NavLink className="nav-link text-white" activeClassName="active text-dark" to="/search">Search</NavLink>
    </li>
    <li className="nav-item mr-1">
      <NavLink className="nav-link text-white" activeClassName="active text-dark" to="/register">Register</NavLink>
    </li>
  </ul>
)
const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path="/search" component={UsersList} />
        <Route path="/register" component={Register} />
      </Switch>
    </main>
  </div>
)
class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      surname: '',
      email: '',
      username: '',
      password: '',
      error: '',
      showAlert: false,
      succes: false
    }
  }
  keepInput(input, property) {
    if (this.state.error) this.setState({ error: '', showAlert: false, succes: false })
    this.setState({ [property]: input.trim() })
  }
  submit() {
    const { name, surname, email, username, password } = this.state
    api.register(name, surname, email, username, password).then(response => {
      this.setState({ showAlert: true })
      if (response.status === 'OK') {
        this.setState({
          name: '',
          surname: '',
          email: '',
          username: '',
          password: '',
          succes: true
        })
      } else {
        this.setState({ error: response.error })
      }
    })
  }
  render() {
    return (
      <div className="mx-4">
        <form className="mb-4" onSubmit={e => { e.preventDefault(); this.submit() }}>
          <div className="row">
            <div className="col-md">
              <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.name} className="form-control" type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-md">
              <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.surname} className="form-control" type="text" name="surname" placeholder="Surname" />
            </div>
            <div className="col-md">
              <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.email} className="form-control" type="text" name="email" placeholder="email" />
            </div>
            <div className="col-md">
              <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.username} className="form-control" type="text" name="username" placeholder="Username" />
            </div>
            <div className="col-md">
              <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.password} className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <div className="col-md">
              <button type="submit" className="btn btn-primary col">Register</button>
            </div>
          </div>
        </form>
        <AlertDismissible succes={this.state.succes} error={this.state.error} show={this.state.showAlert} />
      </div>
    )
  }
}
function AlertDismissible(props) {
  return (
    <div className={`${props.show ? 'alert' : 'd-none'} alert-${props.succes ? 'success' : 'danger'}`} role="alert">
      {props.succes ? 'User registration successful' : 'User registration failed: ' + props.error}
    </div>
  )
}

class UsersList extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      responseStatus: '',
      modalInfo: {
        id: '',
        name: '',
        surname: ''
      }
    }
  }
  removeUserFromList = (id) => {
    let index = this.state.users.findIndex(user => user.id === id)
    this.setState(prevState => {
      let users = prevState.users
      users.splice(index, 1)
      return {users}
    })
  }
  componentDidMount() {
    api.list().then(res => this.setState({ users: res.data, responseStatus: res.status }))
  }
  setModal(id, name, surname) {
    this.setState({ modalInfo: { id, name, surname } })
  }
  render() {
    return (
      <div className="mx-4">
        <form className="mb-4">
          <div className="row">
            <div className="col-md">
              <input className="form-control" placeholder="User name" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="Name" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="Surname" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="email" type="text" />
            </div>
            <div className="col-md">
              <button type="submit" className="btn btn-primary col">Search</button>
            </div>
          </div>
        </form>
        <Modal info={this.state.modalInfo} removeUser={this.removeUserFromList} />
        <div className="table-responsive">
          <table className="text-center table table-striped table-sm table-bordered table-hover">
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Surname</th>
                <th>email</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button type="button" className="btn btn-outline-primary btn-sm" data-toggle="collapse" data-target="#edit-123" aria-expanded="false" aria-controls="collapseExample">Edit</button>
                      &nbsp;
                      <button type="button" className="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#modal" onClick={e => this.setModal(user.id, user.name, user.surname)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
      succes: false,
      showAlert: false
    }
  }
  keepInput(input, property) {
    if (this.state.showAlert) this.setState({ showAlert: false, succes: false })
    this.setState({ [property]: input })
  }
  submit() {
    api.delete(this.props.info.id, this.state.username, this.state.password).then(res => {
      this.setState({ showAlert: true })
      if (res.status === 'OK') {
        this.setState({ succes: true })
        this.props.removeUser(this.props.info.id)
      } else {
        this.setState({ error: res.error })
      }
    })
  }
  render() {
    return (
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Delete {this.props.info.name} {this.props.info.surname}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Before deleting please insert username and password</p>
              <form className="mb-4" onSubmit={e => { e.preventDefault(); this.submit() }} >
                <div className="form-row ">
                  <div className="col">
                    <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.username} className="form-control" name="username" placeholder="Username" type="text" />
                  </div>
                  <div className="col">
                    <input onChange={e => this.keepInput(e.target.value, e.target.name)} value={this.state.password} className="form-control" name="password" placeholder="Password" type="password" />
                  </div>
                  <div className="col">
                    <a type="button" className="btn btn-primary col text-white" data-dismiss="modal">Cancel</a>
                  </div>
                  <div className="col">
                    <button type="submit" className="btn btn-danger col">Delete</button>
                  </div>
                </div>
              </form>
              <AlertDismissible succes={this.state.succes} error={this.state.error} show={this.state.showAlert} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
