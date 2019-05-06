import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { returnWeekDay } from "../getDate";
import { withRouter, Link } from "react-router-dom";

const styles = {
  card: {
    minWidth: 275,
    maxWidth: "20%",
    margin: "auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 24,
    display: "inline-block"
  },
  pos: {
    marginBottom: 12,
    fontSize: 16
  },
  img: {
    verticalAlign: "middle"
  },
  actions: {
    display: "block"
  }
};

function DayWeather({ classes, index, day }) {
  return (
    <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
          {returnWeekDay(index--)} <img className={classes.img} src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt=""/> 
          </Typography>         
          <Typography className={classes.pos}>
            Temperatura <span role="img" aria-label="day">🌞</span> {day.temp.day.toFixed(1)} ℃
          </Typography>
          <Typography className={classes.pos}>
            Temperatura <span role="img" aria-label="night">🌜</span> {day.temp.night.toFixed(1)} ℃
          </Typography>
          <Typography className={classes.pos}>
            Zachmurzenie <span role="img" aria-label="clouds">⛅</span> {day.clouds} %
          </Typography>
          <Typography className={classes.pos}>
            Prędkość <span role="img" aria-label="wind">💨</span> {day.speed} m/s
          </Typography>
          <Typography className={classes.pos}>
            Ciśnienie <span role="img" aria-label="pressure">🌡️</span> {day.pressure.toFixed()} hPa
          </Typography>
          <Typography className={classes.pos}>
            Wilgotność <span role="img" aria-label="humidity">💧</span> {day.humidity} %
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button variant="contained" color="primary" size="small" className={classes.button} component={Link} to="/">
            Powrót
          </Button>
        </CardActions>
    </Card>
  );
}

export default withStyles(styles)(withRouter(DayWeather));
