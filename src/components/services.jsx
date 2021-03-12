import React, { Component } from 'react';
import './Font.css';
export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We aim at creating a perfect blend of global web development
              leaders with the aptitude to produce high-quality affordable
              results. Techling’s primary aim is to assure customer satisfaction
              with regard to professional and technical services. We maintain a
              total source of support by giving facilities such as debugging,
              providing a solution, and establishment of a system with a
              committed group of employees. Responsibility and commitment,
              towards our clients, are the roots that we stay strong to. .
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <i className="fab fa-aws Amazon"></i>
              <div className="service-desc">
                <h3>Amazon Web Services</h3>
                <p>
                  Whether you're looking for compute power, database storage,
                  content delivery, or other functionality, AWS has the services
                  to help you build sophisticated applications with increased
                  flexibility, scalability and reliability
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/nodejs.png" className="Node" alt="" />
              <div className="service-desc">
                <h3>Node Js</h3>
                <p>
                  As an asynchronous event-driven JavaScript runtime, Node.js is
                  designed to build scalable network applications
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/angular-js.png" className="Angular" alt="" />
              <div className="service-desc">
                <h3>Angular</h3>
                <p>
                  Angular puts you in control over scalability. Meet huge data
                  requirements by building data models on RxJS, Immutable.js or
                  another push-model.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <i className="fab fa-react React"></i>
              <div className="service-desc">
                <h3>React</h3>
                <p>
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/cloud.png" className="Google" alt="" />
              <div className="service-desc">
                <h3>Google Cloud</h3>
                <p>
                  Build apps faster, make smarter business decisions, and
                  connect people anywhere.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img src="img/graphql.svg" className="Graph" alt="" />
              <div className="service-desc">
                <h3>GraphQL</h3>
                <p>
                  GraphQL is a query language for APIs and a runtime for
                  fulfilling those queries with your existing data. GraphQL
                  provides a complete and understandable description of the data
                  in your API, gives clients the power to ask for exactly what
                  they need and nothing more, makes it easier to evolve APIs
                  over time, and enables powerful developer tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
