

  class Bmi extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          height: "",
          weight: "",
          BMI: "Empty"
          
      };
  }

    render() {
      return (
        <div>
        <h1>BMI Calculator</h1>
        <h3>Weight (in Kg) </h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateWeight} value={this.state.weight}></input>
        <h3>Height (in m) </h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateHeight} value={this.state.height}></input>
        <div>
        <button type="button" class="btn btn-primary" onClick={this.updateResult}>Calculate BMI</button>
        </div>
        <Result res={this.state.BMI}/>
        

        
        </div>
      );
    }

    updateWeight = (event) => {
      this.setState({ weight: event.target.value });
      }

    updateHeight = (event) => {
      this.setState({ height: event.target.value });
        }
      
    updateResult = (event) => {

      var res=parseFloat(this.state.weight)/ (parseFloat(this.state.height)**2)
      res=res.toFixed(2)

      if(res>25){

        res=res+" (Obese)"
      }

      else if(res>20 && res<=25){

        res=res+ " (Healthy)"
      }

      else {

        res=res+ " (Under-weight)"
      }
       
      this.setState({ BMI: res });
      }
  }

  class Calculator extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
          val1: "",
          val2: "",
          result: "Empty"
          
      };
    }

    render() {

      return (

        <div>
        <h1>Calculator</h1>
        <h3>Value 1 </h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateVal1} value={this.state.val1}></input>
        <h3>Value 2 </h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateVal2} value={this.state.val2}></input>
        
          <h2>Operation</h2>
          <div class="row opRow">
            <div class="col">
            <div>
            <button type="button" class="btn btn-primary" onClick={this.updateResultadd}>+</button>
            </div>
            </div>
            <div class="col">
            <div>
        <button type="button" class="btn btn-primary" onClick={this.updateResultsub}>-</button>
        </div>
            </div>
            <div class="col">
            <div>
        <button type="button" class="btn btn-primary" onClick={this.updateResultmul}>*</button>
        </div>
            </div>
            <div class="col">
            <div>
        <button type="button" class="btn btn-primary" onClick={this.updateResultdiv}>/</button>
        </div>
            </div>
          </div>
          <Result res={this.state.result} purp="BMI"/>
          

        </div>

      );
    }

    updateResultadd = (event) => {

       
      this.setState({ result: parseFloat(this.state.val1)+ parseFloat(this.state.val2) + " (Addition)" } );
    }

    updateResultsub = (event) => {

       
      this.setState({ result: parseFloat(this.state.val1)-parseFloat(this.state.val2) + " (Subtraction)" });
    }

    updateResultmul = (event) => {

       
      this.setState({ result: parseFloat(this.state.val1)*parseFloat(this.state.val2) + " (Multiplication)"});
    }

    updateResultdiv = (event) => {

       
      this.setState({ result: parseFloat(this.state.val1)/parseFloat(this.state.val2) + " (Division)"});
    }


    updateVal1 = (event) => {
      this.setState({ val1: event.target.value });
      }

    updateVal2 = (event) => {
      this.setState({ val2: event.target.value });
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