import React, {Component} from 'react';
import { TextField, Button} from '@material-ui/core';
import Dashboard from './Dashboard'

class Login extends Component {
state = {
    user: '',
    pass: '',
    loggedIn: false
}

handleChange = (e) => {
    const copy = {...this.state}
    copy[e.target.id] = e.target.value
    this.setState(copy)
}

submit = (e) => {
    e.preventDefault();
    if(this.state.pass === ''){
        this.setState({loggedIn: true})

    }
}
    render() {
        if(this.state.loggedIn){
            return <Dashboard />
        }else {
            return (
                <div>
                <form style={{display: 'flex', flexDirection: 'column', width: '30%', margin: 'auto', marginTop: '200px'}} onSubmit={this.submit}>
                    <TextField 
                    style={{border:'solid grey 1px'}}
                    id="user"
                    label="User Name"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                    <TextField 
                    style={{border:'solid grey 1px'}}
                    id="pass"
                    label="Password"
                    type="password"
                    value={this.state.pass}
                    onChange={this.handleChange}
                    />
                    <Button style={{backgroundColor: 'blue', color: 'white'}} variant="contained" color="inherit" type="submit">Login</Button>
                </form>
            </div>
        )
    }
}
}

export default Login;