/* eslint-disable eqeqeq */
import React, {useState, useRef, useEffect} from 'react';
import raw from './result.txt';
import './Hooks.css'

function Hooks() {

    const [data, setData] = useState('');
    const [bioCount, setBioCount] = useState(0);
    const [recCount, setRecCount] = useState(0);
    const [count, setCount] = useState(0);
    const btnRef = useRef();

    useEffect(()=>{
        const btn = btnRef.current;
        var x = setInterval(()=>{
            btn.click();
        }, 1000);
        return () => clearInterval(x)
    }, [])

    const fetchData = () => {
        fetch(raw).then(r => r.text()).then(t => {            
            t == 'bio' && data != 'bio' ? setBioCount((prev)=> prev + 1): t == 'rec' && data != 'rec'?setRecCount((prev)=>prev + 1):setCount(count+1);
            setData(t);
        })
    }


    return (
        <div id = 'container'>
            <h3 className = 'bin'>E- Bin</h3>
            <p className = 'current'>Current Type: {data == 'bio'? 'Biodegredable Waste':'Recyclable Waste'}</p>
            <button className = 'fetchbtn'ref = {btnRef} onClick = {fetchData}>Fetch</button>
            <p className = 'bio'>Biodegredable: {bioCount}</p>
            <p className = 'rec'>Recyclable: {recCount}</p>
        </div>
    )
}

export default Hooks
