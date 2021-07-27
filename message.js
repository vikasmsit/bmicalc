class Message extends React.Component{

    render(){
        console.log(this.props.page)
        if(this.props.page==="signup"){

          return this.renderSignup();
        }

        else{

          return this.renderSignin();
        }
    
    }
    renderSignin() {
      return (
        <div>
        <h2>Message !</h2>
        <h2>User: {this.props.username}</h2>
        <h3>You are Signed In !</h3>
        </div>
      );
    }
    
    renderSignup() {
      return (
        <div>
        <h2>Message !</h2>
        <h2>User: {this.props.username}</h2>
        <h3>You have successfully registered !</h3>
        </div>
      );
    }

  }