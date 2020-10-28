import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner_1 from "../imgs/banner_1.jpg";
import banner_2 from "../imgs/banner_2.jpg";
import banner_3 from "../imgs/banner_3.jpg";

class Banner extends Component {
  render() {
    return (
      <div
        id="carousel-example-1z"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-1z"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block w-100" src={banner_1} alt="First slide" />
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={banner_2} alt="Second slide" />
          </div>

          <div class="carousel-item">
            <img class="d-block w-100" src={banner_3} alt="Second slide" />
          </div>

          {/* <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              alt="Third slide"
            />
          </div> */}
        </div>

        <a
          class="carousel-control-prev"
          href="#carousel-example-1z"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-example-1z"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Banner;
