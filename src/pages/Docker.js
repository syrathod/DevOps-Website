import React from 'react';
import "./pages.css";
import docker from "../images/docker_logo.webp";

function Docker() {
    return (
        <div className="pages">
            <h1><b>Docker</b> </h1><br/>

            <p className='paragraph'>
            Docker is an open platform for developing, shipping, and running applications. 
            It enables you to separate your applications from your infrastructure so you can deliver 
            software quickly. With Docker, you can manage your infrastructure in the same ways you manage 
            your applications. By taking advantage of Docker methodologies for shipping, testing, and 
            deploying code quickly, you can significantly reduce the delay between writing code and running
            it in production. It streamlines the development lifecycle by allowing developers to work in 
            standardized environments using local containers which provide your applications and services. 
            </p>
            <br/>
            <p className='paragraph'> 
            The important points to be discussed in Docker include:</p>
            <br />
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <img src={docker} alt="Docker Logo" className='image'/>
            
            <ul className="points">
                <li>Introduction to Virtualization and Containerization</li>
                <li>Introduction to Docker, its benefits and installation process</li>
                <li>Docker Architecture and development workflow</li>
                <li>Docker Compose</li>
                <li>Docker Daemon and Docker CLI</li>   
                <li>Dockerfile, Docker Image and Docker Container</li>   
                <li>Hands-on experience of building a local image and running it on a Docker Host</li>
            </ul>
            </div>
            
        </div>
    )
};

export default Docker;