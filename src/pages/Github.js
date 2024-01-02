import React from 'react';
import "./pages.css";
import gitimg from "../images/github.webp";
import gitaction from"../images/gitac.png";

function Github() {
    return (
        <div className="pages">
            <h1><b>Github</b> </h1><br/>

            <p className='paragraph'>
            GitHub is a code hosting platform for version control and collaboration. 
            It lets you and others work together on projects from anywhere. GitHub Actions
             is a continuous integration and continuous delivery platform that allows you 
             to automate your build, test, and deployment pipeline. With GitHub Actions, 
             you can discover, create, and share actions to perform any job you'd like, 
             including CI/CD, and combine actions in a completely customized workflow. 

            </p>
            <br/>
            <p className='paragraph'> 
            The important points that will be discussed under Github and Github Actions include:</p>
            <br />
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <img src={gitimg} alt="Github Logo" className='image'/>
            
            <ul className="points">
                <li>Version Control and Introduction to Github</li>
                <li>Creating local and remote repositories</li>    
                <li> Need of GitHub Actions</li>   
                <li>Components of GitHub Actions</li>    
                <li>Important attributes of YAML code</li>    
                <li>Job dependencies</li>    
                <li>Environment Variables and Secrets</li>    
                <li>Action Arguments</li>    
                <li>CI/CD Pipeline and Artifacts</li>    
            </ul>
            
            <img src={gitaction} alt="Github Logo" className='image'/>
            </div>
            
        </div>
    )
};

export default Github;