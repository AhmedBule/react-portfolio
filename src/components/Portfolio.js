import React from 'react';
import apps from "./apps.json";

class Portfolio extends React.Component{
    state={
        apps
    }
    render(){
        return(<div class="container text-center" >
            <h4>Portfolio</h4>
            <div className="container">
        {this.state.apps.map((project,i) =>{
            return(<div className="card">
            <h6>{project.title}</h6>
           <a href={project.repo}>Github</a>
            <a href={project.live}>Live</a>
              <img src={project.img} width="300" height="300"/>
            </div>)
        })}
        </div>
        </div>)
    }
}

export default Portfolio;