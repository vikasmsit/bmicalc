

  class Signup extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          page_det:"signup"
          
      };
  }

    render() {
      return (
        <div>
        <h1>Sign Up</h1>
        <h3>Username</h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateUser} value={this.state.username}></input>
        <h3>Password</h3>
        <input type="password" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updatePass} value={this.state.password}></input>
        <h3>Mobile Number</h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateMob} value={this.state.mobile}></input>
        <h3>Date of Birth</h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateDob} value={this.state.dob}></input>
        
        
        <div>
        <div class="row">
        <div class="col">
        <button type="button" class="btn btn-primary" onClick={this.renMessage}>Sign-up</button>
        </div>
        <div class="col">
        <a href="signin.html">
        <button type="button" class="btn btn-secondary">Sign-in</button>
        </a>
        </div>
        </div>
        </div>
        
        

        
        </div>
      );
    }

    updateUser = (event) => {
      this.setState({ username: event.target.value });
      }

    updatePass = (event) => {
      this.setState({ password: event.target.value });
        }
    
    updateMob = (event) => {
      this.setState({ mobile: event.target.value });
        }

    updateDob = (event) => {
      this.setState({ dob: event.target.value });
        }
      
    renMessage = (event) => {

       
      ReactDOM.render(<Message username={this.state.username} page={this.state.page_det}/>,document.querySelector("#mess"))
      this.setState({
        username: "",
          password: "",
          mobile: "",
          dob:""
      })
      }
  }



  
  
  



  
  //ReactDOM.render(<Signin />, document.querySelector("#signin"));
  //ReactDOM.render(<Signup />, document.querySelector("#signup"));