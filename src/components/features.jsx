import React, { Component } from 'react';

export class features extends Component {
  render() {
    return (
      <div id="progress" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Progress</h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <i class="fas fa-project-diagram Feature"></i>
              <h3>Project Completed</h3>
              <p>3</p>
            </div>
            <div className="col-xs-12 col-md-4">
              <i class="fas fa-crown Feature"></i>
              <h3>Satisfied Customers</h3>
              <p>3</p>
            </div>
            <div className="col-xs-12 col-md-4">
              <i class="fas fa-users Feature"></i>
              <h3>Team Members</h3>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default features;
