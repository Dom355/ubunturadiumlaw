import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{ background: "#323030" }} className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="text-white">What's RadiumLaw</h5>
              <p className="text-white">
                We build Radiumlaw to replace heavy law books with fast
                navigation and feature that you need when reading laws.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li style={{ listStyleType: "none" }}></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container text-white">© 2020 Copyright RadiumLaw</div>
        </div>
      </footer>
    );
  }
}
export default Footer;
