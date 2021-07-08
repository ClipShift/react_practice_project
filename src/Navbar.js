import React from 'react'
import logo from './logo-adgitm.jpg'
import './Navbar.css'

function Navbar(props) {

    const openWindow = () => {
        window.open('https://google.com/','popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); 
    }

    return (
        <div id = 'navbar'>
            <div className = 'title'>
                <a href = 'https://adgitmdelhi.ac.in/' rel = 'noreferrer' target = '_blank'><img className = 'adgitm-logo' alt = 'adgitm-logo' src = {logo}/></a>
                <h4>Major Project</h4>
            </div>
            
            <ul>
                {props.currentComponent === 'about'
                ?<li className = 'navBtn' onClick = {props.binComponent}>E-Bin</li>
                :<li className = 'navBtn' onClick = {props.aboutComponent}>About</li>}
                
                {props.currentComponent === 'members'
                ?<li className = 'navBtn' onClick = {props.binComponent}>E-Bin</li>
                :<li className = 'navBtn' onClick = {props.membersComponent}>Members</li>}

                <li className = 'navBtn' onClick={openWindow}>Report</li>
            </ul>
        </div>
    )
}

export default Navbar
