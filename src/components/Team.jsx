import React, { Component } from 'react';

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Our passionate and enthusiastic team of IT specialists provides
              outstanding services and advice to our customers according to
              their business requirements and improves their operational
              efficiency by using updated softwares.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="rounded">
                      {' '}
                      <img
                        src={d.img}
                        alt="..."
                        className="team-img"
                        style={{ borderRadius: '150px' }}
                      />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
