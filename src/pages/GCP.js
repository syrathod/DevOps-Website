import React from 'react'
import "./pages.css"
import gcp_img from "../images/gcp_logo1.png" 
function GCP() {
  return (
    <div className="kube_page">
            <h1><b>Google Cloud Platform</b> </h1>

            <p style={{ fontSize: 20, fontWeight: 600 }}>
            Google Cloud Platform is a set of cloud computing services that Google offers, 
            which runs on the same infrastructure that Google uses for its end-user products,
            such as YouTube, Gmail, and more. GCP is known as one of the leading cloud 
            providers in the IT field. It offers a variety of services including Machine Learning, 
            AI and Big Data processing. GCP also offers application development and integration services.  
            <br/>Under GCP the main points to be discussed include the following:

            </p>
            <br />
            <ul className="kube_points">
                <li>Cloud Computing and its need</li>
                <li>Introduction to Google Cloud</li>
                <li>Benefits and advantages of using GCP</li>
                <li>Hands-on demo of the services provided by GCP</li>
            </ul>
            <img src={gcp_img} alt="ABC" className='kube_img'/>
        </div>
  )
}

export default GCP