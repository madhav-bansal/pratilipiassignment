import axios from "axios";
import { React,  Component } from "react";
import Content from "./components/content";
import SignUp from "./components/signUp";
class App extends Component {
  constructor(props) {
    super(props);
   
    let tmpid = localStorage.getItem("userid");
    this.state = {
      needSignUp: !tmpid ? true : false,
      userid: tmpid,
      passworderror: "",
    };
  }

  login = (id) => {
    this.setState({
      needSignUp: false,
      userid: id,
    });
  };

  signUp = (form) => {
    // console.log(form.target);
    let formdata = new FormData(form.target);
    let mysignupurl = "http://127.0.0.1:7000/signup/";
    axios({
      method: "post",
      url: mysignupurl,
      data: formdata,
    })
      .then((response) => {
        //handle success
        // console.log(response.data);
        if (response.data !== "user already exist and password is wrong") {
          localStorage.setItem("userid", response.data);
          let id = Number(response.data);

          this.login(id);
        } else {
          alert(response.data);
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.needSignUp ? (
          <SignUp onSubmit={this.signUp} />
        ) : (
          <Content userid= {this.state.userid} />
        )}
      </div>
    );
  }
}

export default App;
