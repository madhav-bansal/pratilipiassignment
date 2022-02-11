import React, { Component } from "react";
class Book extends Component {
  dummy = {
    id: 1,
    title: "my first book",
    story: `Create a singlepage web application which allows users to manage the content
    ld be sent to User Interaction Service and stored accordingly.
  erId and password micro services - content, user-interaction service.
    Content Service
    Serving books as content. The content will have a story and title, considering the scope of this assignment.
    Data ingestion should happen via csv, write a script to ingest data into the database( IdIdeally script should also be a part of your
    service). Content service should have at least the title, story, date published and the user id stored.
    Top contents API - sorted on user-interaction[Sort on basis of Number of likes]
    eraction[Sort on basis of Number of likes]
    Testing- An API to help us post the csv file, and it should automatically invoke the data ingestion process once it receives the csv file.
    User data should be sent to User Interaction Service and stored accordingly.
    User interaction service
    Add Update API for User Like event(validate if user exists)
    Add signup API for User which will take fields as userId and password
    email address should consist of an email prefix andasdfasfasjdf;asjfa;slfjka;sfjasdlkfjfl;asjflkasdjf;aslfjas;lfd`,
    author_id: 1,
    likes: 10,
    date_published: "12/1/2000",
  };

  render() {
    return (
      <section className="h-100 h-custom" style={{ background: "8fc4b7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-3  text-white bg-primary">
                  <h3 className="mb-2 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Title: {this.props.book.title}
                  </h3>
                  <button
                    className="btn btn-danger"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "26px",
                    }}
                    onClick={this.props.seeallbooks}
                  >
                    back
                  </button>
                </div>
                <div className="card-body ">
                  <span className="card bg-secondary">Story:</span>
                  <div id="content-1">
                    <div className="featured">
                      <p>{this.props.book.story}</p>
                      <div className="featured-meta">
                        <div>
                          <span className="post-date bg-primary rounded  p-1">
                            Date Published: {this.props.book.date_published}
                          </span>

                          <span
                            className="author_id rounded p-2 bg-primary "
                            style={{
                              position: "absolute",
                              right: "172px",
                              bottom: "10px",
                            }}
                          >
                            Author Id: {this.props.book.author_id}
                          </span>
                          <button
                            className="btn btn-primary"
                            style={{
                              position: "absolute",
                              right: "23px",
                              bottom: "10px",
                            }}
                            onClick={this.props.like}
                          >
                            Like : {this.props.book.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Book;
