import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import {returnWeekDay} from '../getDate';


const styles = {
    card: {
      minWidth: 200,
      maxWidth: '20%',
      display: 'inline-block',
      margin: '10px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
      color: '#ffffff',
    },
    actions: {
      display: 'block',
    }
  };

  //zmiana adresu url na ścieżkę podaną jako argument funkcji np. /day/1
  function SimpleCard({classes,index,day,history}) {
    const changeLocation = (e,path) => {
        history.push(path)
    }

    let date = new Date(),
    format = ""
    date.setDate(date.getDate() + index)
    
    if(date.getDate() < 10) {
        format = "0"
    }
    format += date.getDate() + "."
    if(date.getMonth() + 1 < 10) {
        format += "0"
    }
    format += date.getMonth() + 1
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {returnWeekDay(index)} {format}
          </Typography>
          <Typography className={classes.pos}>
            Temperatura {day.temp.day.toFixed()} ℃
          </Typography>
          <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt=""/>
          <Typography>
            {day.weather[0].description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="contained" color="primary" size="small" className={classes.button} onClick={(e) => changeLocation(e,`/day/${index}`)}>Zobacz szczegóły dnia</Button>
        </CardActions>
      </Card>
    );
  }
  
  
  export default withStyles(styles)(withRouter(SimpleCard));