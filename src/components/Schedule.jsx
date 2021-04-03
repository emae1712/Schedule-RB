import React, {useState} from "react";
import Image from "../img/Figures.jpg";
import Data from "./Data.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../styles/App.scss'

const Schedule = ({category, cards}) =>{
	console.log(cards.Ideation);
  //data
  const socialData = Data.Ideation.concat(Data.Validation);
	const [socialInnovation, setSocialInnovation] = useState(socialData);
  const [ideation, setIdeation] = useState(Data.Ideation);
  const [validation, setValidation] = useState(Data.Validation);

  //state
	const [isCheck, setIsCheck] = useState(false);

	// toggle card
	const toggle = (inputName) => {
    setIsCheck((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

	// Drag functions
  const handleOnDragEnd =(result)=>{
		if (!result.destination) return;
    if (result.source.droppableId === 'social') {
      const items = Array.from(socialInnovation);
      const [reorderItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderItem);
      setSocialInnovation(items);
    } else if (result.source.droppableId === 'Ideation'){
      const items = Array.from(ideation);
      const [reorderItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderItem);
      setIdeation(items);
    } else{
      const items = Array.from(validation);
      const [reorderItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderItem);
      setValidation(items);
    }
	}
    return (
      <>
			<DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="main-title">
          <h2>{category === 'socialInnovation'? 'Social Innovation' : ''}</h2>
          <p className="show-web right">{category === 'socialInnovation'? 'Due Date (Opcional)' : ''}</p>
        </div>
				{category === 'socialInnovation'&& socialInnovation.map((card, index) =>(
          <Droppable droppableId="social">
            {(provided) =>(
              <label  {...provided.droppableProps} ref={provided.innerRef}>                
                <Draggable key = {card.id} draggableId={card.id} index={index}>
                  {(provided) =>(
                    <div className="main-div" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      <input className="visible-web" id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
                      <div className="main-card">
                        <div className={ isCheck[card.title]=== true ? "card-border": "card" } >
                          <div >
                            <h3>{card.title}</h3>
                            <p className="view-builder">view builder</p>
                          </div>
                          <img src={Image} alt="" className={ isCheck[card.title]=== true ? "img-color": "img-gris" }/>
                        </div>
                        <div className={ isCheck[card.title]=== true ? "": "hidden-date" }>
                          <input type="date" name="date" id=""/>
                          <input type="time" name="" id=""/>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </label>
            )}
          </Droppable>
					))}          
      </DragDropContext>
			
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="main-title">
          <h2>{category === 'all'? 'Ideation' : ''}</h2>
          <button onChange=''>select all in ideation</button>
          <p className="show-web right">{category === 'all'? 'Due Date (Opcional)' : ''}</p>
        </div>
				{category === 'all'&& ideation.map((card, index) =>(
          <Droppable droppableId={card.type}>
            {(provided) =>(
              <label  {...provided.droppableProps} ref={provided.innerRef}>                
                <Draggable key = {card.id} draggableId={card.id} index={index}>
                  {(provided) =>(
                    <div className="main-div" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      <input className="visible-web" id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
                      <div className="main-card">
                        <div className={ isCheck[card.title]=== true ? "card-border": "card" } >
                          <div >
                            <h3>{card.title}</h3>
                            <p className="view-builder">view builder</p>
                          </div>
                          <img src={Image} alt="" className={ isCheck[card.title]=== true ? "img-color": "img-gris" }/>
                        </div>
                        <div className={ isCheck[card.title]=== true ? "": "hidden-date" }>
                          <input type="date" name="date" id=""/>
                          <input type="time" name="" id=""/>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </label>
            )}
          </Droppable>
					))}          
      </DragDropContext>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="main-title">
          <h2>{category === 'all'? 'Validation' : ''}</h2>
          <button onChange=''>select all in ideation</button>
          <p className="show-web right">{category === 'all'? 'Due Date (Opcional)' : ''}</p>
        </div>
				{category === 'all'&& validation.map((card, index) =>(
          <Droppable droppableId={card.type}>
            {(provided) =>(
              <label  {...provided.droppableProps} ref={provided.innerRef}>                
                <Draggable key = {card.id} draggableId={card.id} index={index}>
                  {(provided) =>(
                    <div className="main-div" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      <input className="visible-web" id = {card.id} type="radio" name={card.title} value={card.title} onClick={() => toggle(card.title)} checked={isCheck[card.title]}/>
                      <div className="main-card">
                        <div className={ isCheck[card.title]=== true ? "card-border": "card" } >
                          <div >
                            <h3>{card.title}</h3>
                            <p className="view-builder">view builder</p>
                          </div>
                          <img src={Image} alt="" className={ isCheck[card.title]=== true ? "img-color": "img-gris" }/>
                        </div>
                        <div className={ isCheck[card.title]=== true ? "": "hidden-date" }>
                          <input type="date" name="date" id=""/>
                          <input type="time" name="" id=""/>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
                {provided.placeholder}
              </label>
            )}
          </Droppable>
					))}          
      </DragDropContext>
      </>
    );
    }
    export default Schedule;