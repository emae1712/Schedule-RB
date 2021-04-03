import React, {useState} from "react";
import Image from "../img/Figures.jpg";
import Data from "./Data.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Schedule = ({category, cards}) =>{
	console.log(cards.Ideation);
	//data by select
	const socialData = Data.Ideation.concat(Data.Validation);
	const [socialInnovation, setSocialInnovation] = useState(socialData)
	const [ideation, setIdeation] = useState(cards.Ideation);
  const [validation, setValidation] = useState(cards.Validation);


	const [isCheckAll, setIsCheckAll] = useState(false);
	const [isCheck, setIsCheck] = useState(false);
	const [valid, setValid] = useState(cards.Validation);
	

console.log(valid);
	// toggle card
	const toggle = (inputName) => {
    setIsCheck((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
	
	// const handleSelectAll = ()=> {
	// 	setIsCheckAll(false);
  //   setIsCheck((prevState) => {
  //     const newState = { ...prevState };
  //     for (const inputName in newState) {
  //       newState[inputName] = false;
  //     }
  //     return newState;
  //   });
  // };
	console.log(isCheckAll);
	const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    const copyInformation = Data.Validation.map((card) => (
      isCheckAll === true ? { ...card, isChecked: true } : { ...card, isChecked: false }
    ));
    setValid(copyInformation);
  };

	// useEffect(() => {
  //   let allChecked = true;
  //   for (const inputName in isCheck) {
  //     if (isCheck[inputName] === false) {
  //       allChecked = false;
  //     }
  //   }
  //   if (allChecked) {
  //     setIsCheckAll(true);
  //   } else {
  //     setIsCheckAll(false);
  //   }
  // }, [isCheck]);
	
	const handleOnDragEnd =(result)=>{
		if (!result.destination) return;
		const items = Array.from(socialInnovation);
		const [reorderItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderItem);
		setSocialInnovation(items);
	}
    return (
      <>
			
				<h2>{category === 'socialInnovation'? 'Social Innovation' : ''}</h2>
				{category === 'socialInnovation'&& socialInnovation.map((card, index) =>(
					<DragDropContext onDragEnd={handleOnDragEnd}>
						<Droppable droppableId="social">
							{(provided) =>(
								<label  {...provided.droppableProps} ref={provided.innerRef}>
									<input id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
									<Draggable key = {card.id} draggableId={card.id} index={index}>
										{(provided) =>(
											<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
												<div>
													{card.title}
													<p>view builder</p>
													<img src={Image} alt=""/>
													</div>
													<div className="show_checked">
														<input type="date" name="date" id=""/>
														<input type="time" name="" id=""/>
													</div>
												</div>
												
										)}
									</Draggable>
									{provided.placeholder}
								</label>
							)}
						</Droppable>
					</DragDropContext>
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
				<button onClick={handleSelectAll} checked={isCheckAll}>{(isCheckAll ? 'select all in ideation' : 'deselect all in ideation')}</button>
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