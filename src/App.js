import logo from './logo.svg';
import './App.css';
import Testimonio from '../src/componentes/Testimonio';

function App() {
  const text = `Elon Reeve Musk FRS is a business magnate and investor.
  He is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; 
  founder of the Boring Company; co-founder of Neuralink and OpenAI; president
   of the Musk Foundation; and owner and CEO of Twitter, Inc.`

   const text2 = `William Henry Gates III is an American business magnate, software developer, investor, author, 
   and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen`

   const text3 = `Be Passionate. And do what you for love. ...
   Work Hard. Don't ever fool yourself—success comes from really hard work. ...
   Be Good. And by that, I mean damn good. ...
   Focus. ...
   Push the Limits. ...
   Serve. ...
   Create Ideas. ...
   Be Persistent.`

  return (
    <div className= 'App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que habla la gente de nosotros</h1>
      <Testimonio 
        nombre = 'Barack Obama'
        pais= 'American'
        imagen ='testimonio3'
        cargo= 'Ex-President of United states'
        testimonio={text3}
      />
      <Testimonio 
        nombre = 'elon musk'
        pais= 'canadiense-americano'
        imagen ='testimonio1'
        cargo= 'SEO space'
        testimonio={text}
      />
       <Testimonio 
        nombre = 'Bill Gates'
        pais= 'Norte-Americano'
        imagen ='testimonio2'
        cargo= 'SEO Microsoft'
        testimonio={text2}
      />
      </div>
    </div>
  );
}

export default App;
