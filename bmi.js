

  class Bmi extends React.Component {

    render() {
      return (
        <div>
        <h1>BMI Calculator</h1>
          <Form name="Weight (Kg)" />
          <Form name="Height (m)" />
          <Butt name="Calculate" />
          <Result res="Empty"/>
        </div>
      );
    }
  }

  class Calculator extends React.Component{

    render() {

      return (

        <div>
        <h1>Calculator</h1>
          <Form name="Value 1" />
          <Form name="Value 2" />
          <h2>Operation</h2>
          <div class="row opRow">
            <div class="col">
            <Butt name="+" />
            </div>
            <div class="col">
            <Butt name="-" />
            </div>
            <div class="col">
            <Butt name="*" />
            </div>
            <div class="col">
            <Butt name="/" />
            </div>
          </div>
          <Result res="Empty"/>
          

        </div>

      );
    }

  }

  class Form extends React.Component {
    render() {
      return (
        <div>
        <h3>{this.props.name}</h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
      );
    }
  }

  class Result extends React.Component{

    render(){

      return(
        <div>
        
        <h3>Result: {this.props.res}</h3>
        </div>
      );
    }
  }

  class Butt extends React.Component {
    render() {
      return (
        <div>
        <button type="button" class="btn btn-primary">{this.props.name}</button>
        </div>
      );
    }
  }



  ReactDOM.render(<Bmi />, document.querySelector("#BMI"));
  ReactDOM.render(<Calculator />, document.querySelector("#calc"));