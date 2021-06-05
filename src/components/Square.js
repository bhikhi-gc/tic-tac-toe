import React from "react";
import "./Square.css";
import useSound from 'use-sound';
import clickSound from '../sounds/click-sound.wav';

const Square = (props) => {	
	const [play] = useSound(clickSound);
    	return (
          <button 
          className="square" 
          onClick={ ()=> { props.onClick();play();} }
          >
            { props.value }
          </button>
        );
};

export default Square;