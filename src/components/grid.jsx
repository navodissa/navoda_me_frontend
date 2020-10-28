import React, { Component } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      twitter: [],
      post: "",
      postedtime: "",
      // quote: "",
      // author: "",
    };
  }

  // React Lifecycle method. This will load right before anything loads
  componentDidMount() {
    axios
      .get("https://quotes.rest/qod.json?category=inspire")
      .then((response) => {
        this.setState({
          quotes: response.data.contents.quotes[0],
          //  author: response.data.contents.quotes[0].author,
        });
        console.log(response.data.contents.quotes[0].author);
      });

    axios({
      method: "GET",
      url: "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
        "x-rapidapi-key": "c2b5d5f7b2msh9e5a2057d3940eep1788b9jsn4e4205af7c5b",
      },
      params: {
        id: "Navod_a",
      },
    })
      .then((response) => {
        this.setState({
          twitter: new XMLParser().parseFromString(response.data),
          post: this.state.twitter.value,
        });
        this.setState({
          post: this.state.twitter.children[0].children[1].children[0].value,
          postedtime: this.state.twitter.children[0].children[1].children[2]
            .value,
        });
        console.log(
          this.state.twitter.children[0].children[1].children[2].value
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const styles = {
      color: "black",
      textDecoration: "none",
      height: "100px",
    };

    return (
      <div class="card-columns">
        {/* <div class="card">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Image cap"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <image
              href="../img/medium_1.png"
              x="0"
              y="0"
              height="50px"
              width="50px"
            />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Image cap
            </text>
          </svg>

          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">
              This is a longer card It's a broader card with text below as a
              natural lead-in to extra content. This content is a little longer.
              This content is a little bit longer.
            </p>
          </div>
        </div> */}

        <div class="card p-3">
          <a
            href="https://medium.com/@navodissa/github-integration-for-atom-ide-f02f293ef1d3"
            style={styles}
          >
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1400/0*QkLHzS3THKhgPPDL"
              alt="Card image"
              height="200"
            />
            <div class="card-body">
              <h4 class="card-title">GitHub integration for Atom IDE</h4>

              <p class="card-text">
                Today I’m going to demonstrate how we can integrate Atom
                application with your Github account. There are two ways...
              </p>
              {/* <a href="#" class="btn btn-warning">
              See Profile
            </a> */}
            </div>
          </a>
        </div>

        <div class="card p-3">
          <blockquote class="blockquote mb-0 card-body">
            <p>{this.state.quotes.quote}</p>
            <footer class="blockquote-footer">
              <small class="text-muted">{this.state.quotes.author}</small>
            </footer>
          </blockquote>
        </div>

        <div class="card p-3">
          <a
            href="https://blog.bitsrc.io/building-a-serverless-webapp-why-you-should-consider-the-monolith-4f0105935589?source=extreme_sidebar---------0-2----------------------&gi=797c135b74f"
            style={styles}
          >
            <img
              class="card-img-top "
              src="https://miro.medium.com/max/1400/1*AdVpUIKlkP-hFQhIgkJM5A.jpeg"
              alt="Card image"
              height="200"
            />

            <div class="card-body">
              <h4 class="card-title">
                Building a Serverless Web App: Why You Should Consider the
                Monolith
              </h4>
              <p class="card-text">
                With the technology advancements in the cloud, it is possible to
                build full-stack web apps using...
              </p>
              {/* <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> */}
            </div>
          </a>
        </div>
        <div class="card bg-secondary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
            <footer class="blockquote-footer text-white">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div class="card p-3">
          <a
            href="https://medium.com/edureka/ci-cd-pipeline-5508227b19ca?source=extreme_main_feed---------2-59--------------------33d8b23a_d155_4306_a1e6_7e7235fc6b62--6"
            style={styles}
          >
            <img
              class="card-img-top"
              src="https://miro.medium.com/max/1280/1*eTiDbrFARCizMbhkCcKbwg.jpeg"
              alt="Card image"
              height="200"
            />
            <div class="card-body">
              <h4 class="card-title">
                CI CD Pipeline: Learn How to Setup a CI CD Pipeline From Scratch
              </h4>
              <p class="card-text">
                CI CD Pipeline implementation or the Continuous
                Integration/Continuous Deployment software is the backbone...
              </p>
              {/* <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> */}
            </div>
          </a>
        </div>

        {/* <div class="card">
          <svg
            class="bd-placeholder-img card-img"
            width="100%"
            height="260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: Card image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96" />
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
              Card image
            </text>
          </svg>
        </div> */}

        <div class="card p-3 text-right">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img
                  className="thumbnail img-responsive"
                  src="https://image.flaticon.com/icons/svg/220/220233.svg"
                  alt=""
                />
              </div>
              <h5 class="card-title">
                <a href="https://twitter.com/navod_a">@navod_a</a>
              </h5>
            </div>

            <p class="card-text">{this.state.post}</p>

            <p class="card-text">
              <small class="text-muted">{this.state.postedtime}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
