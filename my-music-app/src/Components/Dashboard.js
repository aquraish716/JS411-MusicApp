import React, {Component} from 'react';
import { Card, Typography, CardContent, Switch, Select, MenuItem, Slider, CardActions, InputLabel, FormControl, Button} from '@material-ui/core';

class Dashboard extends Component {
    state = {
        checkedA: true,
        volume: 25,
        quality: '',
        notifications: [],
        message: ''
    }

onClearNotifications = () => {
    this.setState({notifications: []});
}

notificationsChange = (e) => {
    if(this.state.checkedA === true){
        const online = [...this.state.notifications]
        online.push("Your application is offline. You won't be able to share or stream music to other devices.")
        this.setState({notifications: online})
    }
    this.setState({checkedA: !this.state.checkedA})

}

      handleOnChange = (e, newValue) => {
        this.setState({volume: newValue});
        if(newValue >= 80){
            const extremeVolume = [...this.state.notifications]
            extremeVolume.push("Listening to music at a high volume could cause long-term hearing loss.")
            this.setState({notifications: extremeVolume})
        }
    
    
    }
      
      handleQualityUpdate = (e) => {
            e.preventDefault();
            this.setState({quality: e.target.value});  
            if(e.target.value === 1){
                const poorQuality = [...this.state.notifications]
                poorQuality.push("Music quality is degraded. Increase quality if your connection allows it.")
                this.setState({notifications: poorQuality})
            } 
             
      }
      

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', fontSize: '40px'}} >Welcome Ahmed!</h1>
                <div style={{display: 'flex', flexDirection: 'row', marginLeft: '150px'}}>
                <Card style={{width: '25%', height: '200px', margin: '30px', border: 'solid', borderColor: 'black', boxShadow: '0 0 0 3px blue', outline: '0', backgroundColor: 'rgba(169, 175, 255, 1)'}} variant="outlined">
                    <CardContent>
                        <Typography style={{color:'black', fontWeight:'bold', textAlign: 'center', fontSize: '20px'}} color="textPrimary" gutterBottom > Online Mode</Typography>
                        <p>Is this application connected to the internet?</p>
                        <CardActions>
                            <Switch checked={this.state.checkedA} onClick={this.notificationsChange} value="checkedA" />
                        </CardActions>
                    </CardContent>
                </Card>
               <Card style={{backgroundColor: 'rgba(169, 175, 255, 1)', width: '25%', height: '200px', margin: '30px', border: 'solid', borderColor: 'black', fontSize: '20px', boxShadow: '0 0 0 3px blue', outline: '0'}} variant="outlined">
                    <CardContent>
                            <Typography style={{color:'black', fontWeight:'bold', textAlign: 'center', fontSize: '20px'}} color="textPrimary"> Master Volume </Typography>
                            <p>Overrides all other sound settings in this application</p>
                            <CardActions>
                                <Slider 
                                defaultValue={30}
                                style={{width: '100%'}}
                                        marks={true}
                                        value={this.state.volume}
                                        onChange={this.handleOnChange}
                                        step={10}
                                        min={0}
                                        max={100}
                                        type='number'
                                        valueLabelDisplay="on"
                                        />
                            </CardActions>
                    </CardContent>
                </Card>
                <Card style={{backgroundColor: 'rgba(169, 175, 255, 1)', width: '25%', height: '200px', margin: '30px', border: 'solid', borderColor: 'black', boxShadow: '0 0 0 3px blue', outline: '0'}} variant="outlined">
                    <CardContent>
                        <Typography style={{color:'black', fontWeight:'bold', textAlign: 'center', fontSize: '20px'}} color="textPrimary"> Sound Quality </Typography>
                        <p>Manually control the music quality in event of poor connection</p>
                        <CardActions>
                        <FormControl style={{width: '100%'}}>
                        <InputLabel>Select Quality</InputLabel>
                            <Select onClick={this.handleQualityUpdate} defaultValue='' onChange={console.log(this.state.quality)} >
                                <MenuItem value={1}>Low</MenuItem>
                                <MenuItem value={2}>Normal</MenuItem>
                                <MenuItem value={3}>High</MenuItem>
                            </Select>
                        </FormControl>
                        </CardActions>    
                    </CardContent>
                </Card>
                </div>                
                <div>
        <Typography color="initial" variant='h4'> System Notifications: 
        <span style={{marginLeft:'60%'}}>
            <Button style={{background: 'blue', color: 'white'}} variant="contained" color="inherit" onClick={this.onClearNotifications}>Clear Notifications</Button>
        </span> 
        
        {this.state.notifications.map(notification => {
return <p style={{fontSize: '20px', textAlign: 'center'}}>{notification}</p>})}</Typography>
                </div>
        </div>

        );
    } 
}

export default Dashboard;