import React, { Component } from 'react';
import api from 'users-api-client-0'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

api.protocol = 'http'
api.host = 'localhost'
api.port = '5000'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    api.list().then(res => this.setState({ users: res }))
  }
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
    <li className="nav-item">
      <NavLink className="nav-link text-white" activeClassName="active text-dark" to="/search">Search</NavLink>
    </li>
    <li className="nav-item">
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
      password: ''
    }
  }
  keepInput(e){
    console.log(e)
  }
  submit() {
    console.log('------> Submit\n')
  }
  render() {
    return (
      <div className="mx-4">
        <form className="mb-4" onSubmit={e => { e.preventDefault(); this.submit() }}>
          <div className="row">
            <div className="col-md">
              <input className="form-control" placeholder="Name" type="text" onChange={(e) => this.keepInput(e.target.value)} />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="Surname" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="email" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="User name" type="text" />
            </div>
            <div className="col-md">
              <input className="form-control" placeholder="Password" type="password" />
            </div>
            <div className="col-md">
              <button type="submit" className="btn btn-primary col">Register</button>
            </div>
          </div>
        </form>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          User registration successful
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          User registration failed
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>
    )
  }
}
class UsersList extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      responseStatus: ''
    }
  }
  componentDidMount() {
    api.list().then(res => this.setState({ users: res.data, responseStatus: res.status }))
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
                      <button type="button" className="btn btn-outline-danger btn-sm" data-toggle="modal" data-target="#delete-123">Delete</button>
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

export default App;
