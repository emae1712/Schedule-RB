
import React, {useState, useEffect} from "react";
import Schedule from "./Schedule";
import Data from "./Data.json";
import '../styles/App.scss'
// console.log(Data);
const Sidebar = () =>{
  const [category, setCategory] = useState('');
  const [cards, setCards] = useState('');

  useEffect(()=>{
    setCards(Data)
  }, [category])
  console.log(cards);
  
    return (
      <>
      <div className = 'sidebar__container'>
        <button className = {category ==='all' ? 'btn-select' : 'btn-unselect'} onClick={() => setCategory('all')}>All</button>
        <p className="show-web">Templates</p>
        <button className = {category ==='socialInnovation' ? 'btn-select show-web' : 'btn-unselect show-web'} onClick={() => setCategory('socialInnovation')}>Social innovation</button>
        <select className="show-cellphone socialSelect" onChange={(event) => setCategory(event.target.value)}>
          <option value="socialInnovation">Social innovation</option>
          <option value="socialInnovation">Template 1</option>
          <option value="socialInnovation">Template 2</option>
          <option value="Template 3">Template 3</option>
        </select>
      </div>
      <div className = 'schedule__container'>
        <Schedule cards = {cards} category= {category} />
      </div>
      </>
    );
    }
    export default Sidebar;