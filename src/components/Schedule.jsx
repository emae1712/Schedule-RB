import React, {useState} from "react";
import Image from "../img/Figures.jpg";

const Schedule = ({category, cards}) =>{
	console.log(cards.Ideation);

	const [isCheck, setIsCheck] = useState(false);

	// toggle card
	const toggle = (inputName) => {
    setIsCheck((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
	console.log(isCheck);

    return (
      <>
			
				<h2>{category === 'socialInnovation'? 'Social Innovation' : ''}</h2>
				{category === 'socialInnovation'&& cards.Ideation.concat(cards.Validation).map((card) =>(
          <label key = {card.id}>
            <input id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
            <div >
							{card.title}
							
							<p>view builder</p>
							
							<img src={Image} alt=""/>
						</div>
						<div className="show_checked">
							<input type="date" name="date" id=""/>
							<input type="time" name="" id=""/>
						</div>
					</label>
					))}
			
				<h2>{category === 'all'? 'Ideation' : ''}</h2>
				{category === 'all'&& cards.Ideation.map((card) =>(
          <label key = {card.id}>
            <input id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
            <div>
							{card.title}
							
							<p>view builder</p>
							
							<img src={Image} alt=""/>
						</div>
						<div className="show_checked">
							<input type="date" name="date" id=""/>
							<input type="time" name="" id=""/>
						</div>
					</label>
					))}

				<h2>{category === 'all'? 'Validation' : ''}</h2>
				<button onChange=''>select all in ideation</button>
				{category === 'all'&& cards.Validation.map((card) =>(
					<>
					
          <label key = {card.id}>
            <input id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
            <div>
							{card.title}
							
							<p>view builder</p>
							
							<img src={Image} alt=""/>
						</div>
						<div className="show_checked">
							<input type="date" name="date" id=""/>
							<input type="time" name="" id=""/>
						</div>
					</label>
					</>
					))}
      </>
    );
    }
    export default Schedule;