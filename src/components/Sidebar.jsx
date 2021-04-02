import React, {useState, useEffect} from "react";
import Schedule from "./Schedule";
import Data from "./Data.json";

const Sidebar = () =>{
  const [category, setCategory] = useState('');
  const [card, setCard] = useState('');
  const social = Data.Ideation.concat(Data.Validation)
  // const ideation = Data.Ideation;
  // const validation = Data.Validation;
  console.log(social);

  useEffect(()=>{
    setCard(Data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
    return (
      <>
      <div className = 'sidebar__container'>
        <button onClick={() => setCategory('all')}>All</button>
        <p className="show-web">Templates</p>
        <button onClick={() => setCategory('socialInnovation')}>Social innovation</button>
        <select className="show-cellphone" onChange={(event) => setCategory(event.target.value)}>
          <option value="socialInnovation">Social innovation</option>
          <option value="Template 1">Template 1</option>
          <option value="Template 2">Template 2</option>
          <option value="Template 3">Template 3</option>
        </select>
      </div>
      <div className = 'schedule__container'>
        <Schedule cards = {card} category= {category} />
      </div>
      </>
    );
    }
    export default Sidebar;