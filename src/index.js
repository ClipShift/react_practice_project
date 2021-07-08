import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hooks from './Hooks';
import Location from './Location.js'
import Navbar from './Navbar';
import About from './About';
import Members from './Members';

function App() {

  const [component, setComponent] = React.useState('main')

  return (
    <div>
    <Navbar 
      currentComponent = {component} 
      aboutComponent = {() => {setComponent('about')}} 
      binComponent = {() => {setComponent('main')}}
      membersComponent = {() => {setComponent('members')}}
    />
    {component === 'main' && <div><Hooks /><Location /></div>}
    {component === 'about' && <About />}
    {component === 'members' && <Members />}
    {/* <Members /> */}
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
