import React, { Component } from "react";
import axios from "axios";
import Book from "./book";
class TopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selected: false,
      selectedbook: {},
    };
  }

  componentDidMount() {
   
    this.getallbooks();
  }

  getallbooks() {
    axios
      .get("http://127.0.0.1:8000/topbooks")
      .then((response) => {
        console.log("got response")
        this.setState({
          books: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectBook = (book) => {
    this.setState({ selectedbook: book });
    this.setState({ selected: true });
  };

  like = () => {
     console.log("liked");
    let book = this.state.selectedbook;
    
    let userid = localStorage.getItem("userid");
    console.log("1")
    let host =
      "http://127.0.0.1:8000/like/" + String(book.id) + "/" + String(userid);

    axios
      .get(host)
      .then((response) => {
        console.log("got")
        this.setState({
          selectedbook: response.data,
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  backtoall = () => {
    this.setState({ selectedbook: {} });
    this.setState({ selected: false });
    
    this.getallbooks();
  };

  render() {
    return (
      <div>
        {!this.state.selected ? (
          <div className="container">
            <div className="table-responsive">
              {this.state.books.map((p) => {
                return (
                  <div className="container p-2" key={p.id}>
                    <div className="card" id={p.id} key={p.id}>
                      <h5 className="card-header">{p.title}</h5>
                      <div className="card-body">
                        {/* <h5 class="card-title">Special title treatment</h5> */}
                        <p className="card-text">
                          {p.story.slice(0, 500) + "..."}
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.selectBook(p);
                          }}
                        >
                          details
                        </button>

                        <span
                          className="author_id rounded p-2 bg-primary "
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                          }}
                        >
                          Likes:{p.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Book
            book={this.state.selectedbook}
            like={this.like}
            seeallbooks={this.backtoall}
          ></Book>
        )}
      </div>
    );
  }
}

export default TopContent;
