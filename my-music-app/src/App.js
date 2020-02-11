import React, {Component} from 'react';
import './App.css';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import Login from './Components/Login';
import { Link } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div>
          <AppBar position="absolute" style={{backgroundColor: 'blue', color: 'white'}}>
            <Toolbar>
              <Typography variant="h4"> My Music App </Typography>
            </Toolbar>
          </AppBar>
          <Login />
      </div>
    );
  }
  
}

export default App;
