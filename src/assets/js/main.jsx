import '../sass/main.scss';

import React from 'react';
import { render } from 'react-dom';

let saveData = [
	{
		titleTask: 'Ir tomar banho',
		dateTask: '01/10/2017',
		doneTask: false
	},
	{
		titleTask: 'Ir ao médico',
		dateTask: '09/03/2017',
		doneTask: false
	},
	{
		titleTask: 'Jogar bola',
		dateTask: '16/07/2017',
		doneTask: true
	}
];


function Tit(props) {
  return (
    <h2>{props.name}</h2>
  )
}


function BuildTitle() {
  const tits = saveData.map((a,i) => {
    return a.titleTask;
  });
  return (
    <div>
      {tits.map((name) => <Tit key={name} name={name} />)}
    </div>  
  ) 
}

render(
  <BuildTitle />,
  document.querySelector("#todo-results"),
)
