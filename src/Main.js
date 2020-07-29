import React, { Component } from 'react'

class Main extends Component() {
  render(){
    return (
      <div className="Main">
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/stuff">Stuff</a></li>
          <li><a href="/content">Content</a></li>
        </ul>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default Main;
