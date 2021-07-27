class Signin extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: "",
          page_det:"singin"
          
          
      };
  }

    render() {
      return (
        <div>
        <h1>Sign In</h1>
        <h3>Username</h3>
        <input type="text" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updateUser} value={this.state.username}></input>
        <h3>Password</h3>
        <input type="password" placeholder="Enter Value" aria-label="Username" aria-describedby="basic-addon1" onChange={this.updatePass} value={this.state.password}></input>
        <div>
        
        <div class="row">
        <div class="col">
        <button type="button" class="btn btn-primary" onClick={this.renMessage}>Sign-in</button>
        </div>
        <div class="col">
        <a href="signup.html">
        <button type="button" class="btn btn-secondary" >Sign-up</button>
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