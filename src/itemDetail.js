import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
export default function Item({match}) {
    useEffect(()=>{
        fetchItem();
        // console.log(match);
    },[]);
    // state for a single item as an object
    const [item, setItem] = useState({});
    const fetchItem = async ()=>{
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
        const item = await fetchItem.json();
        // console.log(item);
        setItem(item);
    }
    return (
        <div className="singleItem">
            <h1>{item.title}</h1>
            <div className="singleThumb">
                <img src={item.image}/>
                <span>${item.price}</span>
            </div>
            <section>
                {item.description}
            </section>
        </div>
    )
}
