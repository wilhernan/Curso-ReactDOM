import React, {Component} from 'react';
import './App.css';
import Form from './FormContainer'  //Acceso al Formulario 
import Header from './Header'       //Acceso al encabezado del Meme 
import MemeGenerator from './MemeGenerator' //Acceso al Generador Meme
import TodoItem from './TodoItem'   //Acceso al Proyecto TODO's
import Product from './Product'     //Ejercicios adicionales
import productsData from './vschoolProducts'  //Ejercicios adicionales
import TodosData from './TodosData'; //Acceso al Proyecto TODO's

//Descomentar "<Form/>" para ir al ejercicio de Formulario y el Proyecto TODO's
//O Habilitar "<Header/><MemeGenerator/>" para ir al ejercio de Generador de Meme
function App(){
  return (
  /* <Form/> */
    <div>
      <Header/>
      <MemeGenerator/>
    </div>
   
  )
} 


export default App
