import React, {useState} from "react";

const Sidebar = () =>{
  const [category, setCategory] = useState('all' );

    return (
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
    );
    }
    export default Sidebar;