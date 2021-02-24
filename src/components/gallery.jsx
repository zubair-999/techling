import React, { Component } from 'react';
import './Font.css';
export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>
              Our diverse and dedicated teams with experience in this industry
              produce unparalleled projects and services. Techling has over 250
              clients globally who have the utmost trust and belief in the
              company and the services we offer. We have kept ourselves up to
              date with new IT knowledge which keeps us ahead of the game.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="hover11 column">
                <a
                  href="https://chex.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="img/chex.png" className="Project " alt="Chex.Ai" />
                </a>
                <h5 class="text-uppercase title-bold text-center">Chex.Ai</h5>
                <a
                  href="https://chex.ai"
                  rel="”nofollow”"
                  className="project-link clr-gray center-block text-center"
                >
                  chex.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
