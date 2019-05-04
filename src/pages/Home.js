import React from "react";
import Axios from "axios";
import Weather from '../components/Weather'
import {returnWeekDay} from '../getDate';


//Komponent stanowy - ma za zadanie realizować zadania logiki biznesowej -> operacje na stanie, metody itp.
class Home extends React.Component {
  state = {
    weather: []
  };

  componentDidMount() {
//tutaj robie zapytania http
    Axios({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=Wroclaw,pl&cnt=7&appid=70a046fe2789d2e4e3bb919260264d96&units=metric&lang=pl`,
      method: "GET"
    })
      .then(res => {
        this.setState({
          weather: res.data.list
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
//React.Framgment umożliwia opakowanei elementów bez konieczności dodawania kolejnego diva
  render() {
    return (
      <React.Fragment> 
        <h1>Prognoza pogody na 7 dni dla Wrocławia</h1>
        <WeatherList list={this.state.weather} />
      </React.Fragment>
    );
  }
}
//komponent bezstanowy ma zadanie głównie wyświetlać
function WeatherList(props) {
    return (
    <React.Fragment>
    {
        props.list.map((value,index) => (
            <Weather weekday={returnWeekDay(index)} key={index} day={value} index={index}/>
        ))
    }
    </React.Fragment>
)
}

export default Home;
