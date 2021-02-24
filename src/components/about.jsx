import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive About" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>Any progressive business demands the right tools to guide innovation and achieve strategic superiority. Techling Technologies understands the unique operational challenges of today’s and empowers organizations to achieve business excellence.</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                     <li >Reliable</li>
                     <li >On Time Delivery</li>
                     <li >Quality</li>
                     <li >Cost Effective</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    <li >Innovative</li>
                     <li >Intelligent Solutions</li>
                     <li >Full Transparency</li>
                     <li >Agile Approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
