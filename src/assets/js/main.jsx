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

// function tic () {
//   const comp1 = (
//     <div>
//       <h1>My first component</h1>
//       <h2>It's {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   render(
//     comp1,
//     document.querySelector("#clock"),
//   );
// }

// setInterval(tic, 1000);

// function Hello(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Hello name="Guilherme" />
//       <Hello name="Juliana" />
//       <Hello name="Joaquim" />
//     </div>  
//   )
// }

// render(
//   <App />,
//   document.querySelector("#hi"),
// );


function Tit(props) {
  return (
    <h2>{props.name}</h2>
  )
}


function BuildTitle() {
  const tits = saveData.map(function(a,i){
    return a.titleTask;
  });
  console.log(tits);
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

// function t() {

//   const tt = saveData.filter(function(h){
//     return h.titleTask;
//   })

// }