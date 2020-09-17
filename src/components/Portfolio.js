import React from 'react';
import apps from "./apps.json";

class Portfolio extends React.Component{
    state={
        apps
    }
    render(){
        return(<div class="container text-center" >
            <h3 className="sectionheader">Portfolio</h3>
            <div className="container">
        {this.state.apps.map((project,i) =>{
            return(<div className="card bg-info text-white">
            <h6 className="card-header text-center">{project.appname}</h6>
           <a href={project.repo} target="_blank" className='text-white' rel="noopener noreferrer">Check Github</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" >Live</a>
            <div className="card-body d-flex align-content-between flex-row">
              <img src={project.img} width="300" height="300" alt={project.appname}/>
              <p className="card-text text-right">{project.description}</p>
              </div>
            </div>)
        })}
        </div>
        </div>)
    }
}

export default Portfolio;