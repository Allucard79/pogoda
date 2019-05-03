import React from "react";
import Axios from "axios";
import DayWeather from "../components/DayWeather";

class Details extends React.Component {
  state = {
    current: undefined
  };
  componentDidMount() {
    Axios({
      url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=Wroclaw,pl&cnt=7&appid=70a046fe2789d2e4e3bb919260264d96&units=metric&lang=pl`,
      method: "GET"
    })
    //react router dom przekazuje do dynamicznych adresów zmienne i umożliwia korzystanie z nich (:day) przy użyciu props.match.params
      .then(res => {
        this.setState({
          current: res.data.list[this.props.match.params.day] 
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <h1>Prognoza szczegółowa</h1>
        {this.state.current ? (
          <DayWeather
            day={this.state.current}
            index={this.props.match.params.day}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default Details;
