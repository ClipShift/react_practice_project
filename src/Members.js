import React from 'react';
import raw from './memeberData.json';
import './Members.css';
import hitesh from './hitesh.jpg';
import aditya from './aditya.jpg';
import saumya from './saumya.jpg';
import srivatsan from './srivatsan.jpg';

function Members() {

    return (
        <div className = 'mcontainer'>
        <div className = 'members'>
                <div className = 'card'>
                    <img className = 'profile-pic sri' src = {srivatsan} />
                    <div className = 'name'>{raw.srivatsan.name}</div>
                    <div className = 'roll'>{raw.srivatsan.roll}&emsp;&emsp;{raw.srivatsan.section}</div>
                    <div className = 'work'>{raw.srivatsan.work}</div>
                </div>
                <div className = 'card'>
                    <img className = 'profile-pic adi' src = {aditya} />
                    <div className = 'name'>{raw.aditya.name}</div>
                    <div className = 'roll'>{raw.aditya.roll}&emsp;&emsp;{raw.aditya.section}</div>
                    <div className = 'work'>{raw.aditya.work}</div>
                </div>
                <div className = 'card'>
                    <img className = 'profile-pic sau' src = {saumya} />
                    <div className = 'name'>{raw.saumya.name}</div>
                    <div className = 'roll'>{raw.saumya.roll}&emsp;&emsp;{raw.saumya.section}</div>
                    <div className = 'work'>{raw.saumya.work}</div>
                </div>
                <div className = 'card'>
                    <img className = 'profile-pic hit' src = {hitesh} />
                    <div className = 'name'>{raw.hitesh.name}</div>
                    <div className = 'roll'>{raw.hitesh.roll}&emsp;&emsp;{raw.hitesh.section}</div>
                    <div className = 'work'>{raw.hitesh.work}</div>
                </div>
        </div>
        </div>
    )
}

export default Members
