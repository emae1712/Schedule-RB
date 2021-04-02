import React from "react";
import Image from "../img/Figures.jpg";

const Schedule = () =>{
	const socialInnovation= [
		{
			title: 'Problem',
			view: 'view builder',
			type: 'Ideation'
		},
		{
			title: 'Solution',
			view: 'view builder',
			type: 'Ideation'
		},
		{
			title: 'Team',
			view: 'view builder',
			type: 'Ideation'
		},
		{
			title: 'Ecosystems',
			view: 'view builder',
			type: 'Validation'
		},
		{
			title: 'Results',
			view: 'view builder',
			type: 'Validation'
		}
	];
	const Ideation= [
		{
			title: 'Problem',
			view: 'view builder',
			type: 'Ideation'
		},
		{
			title: 'Solution',
			view: 'view builder',
			type: 'Ideation'
		},
		{
			title: 'Team',
			view: 'view builder',
			type: 'Ideation'
		}
	];
	const Validation= [
		{
			title: 'Ecosystems',
			view: 'view builder',
			type: 'Validation'
		},
		{
			title: 'Results',
			view: 'view builder',
			type: 'Validation'
		}
	];

    return (
      <div className = 'schedule__container'>
				<h2>Ideation</h2>
				{Ideation.map((card) =>(
          <label>
            <input type="radio" name={card.title} value={card.title}/>
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
				<h2>Validation</h2>
				{Validation.map((card) =>(
          <label>
            <input type="radio" name={card.title} value={card.title}/>
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
					
					{/* <label className="card_label">
							<input type="radio" name="card" value="one_value" />
							<div>
								Small
								<p>view builder</p>
								<img src="" alt=""/>
							</div>
					</label> */}
      </div>
    );
    }
    export default Schedule;