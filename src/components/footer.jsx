import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="page-footer font-small p mb-2 bg-dark text-white">
        <div class="footer-copyright text-center py-3">
          <h6>
            <small>
              © 2020 Copyright
              <a href="https://navoda.me/"> Navoda.me (Beta Version)</a>
            </small>
          </h6>
        </div>
      </footer>
    );
  }
}

export default Footer;
// added a comment for Jenkins testing
