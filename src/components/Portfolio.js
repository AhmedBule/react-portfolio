import React from 'react';
import apps from "./apps.json";

class Portfolio extends React.Component{
    state={
        apps
    }
    render(){
        return(<div class="container text-center" >
            <h3>Portfolio</h3>
            <div className="container">
        {this.state.apps.map((project,i) =>{
            return(<div className="card">
            <h6>{project.appname}</h6>
           <a href={project.repo} target="_blank" rel="noopener noreferrer">Check Github</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" >Live</a>
              <img src={project.img} width="200" height="200"/>
            </div>)
        })}
        </div>
        </div>)
    }
}

export default Portfolio;