import React from 'react';
// import All from './lidivine';
// import Component from './components';
// import Page from "./contacts"
import Navbar from './navy';
import Hero from './hero';
import Cards from './cards';





// {/* <ROUTES>
//   <Route>
//      {/* PUT IN MANY ROUTES */}
//   </Route>
// </ROUTES> */}

 

function Lidivine() {
  return (
    <div className='nav'>
      <Navbar />
      <Hero />
      <div className="cardy">
        <Cards 
      img="pics/cat6.jpg"
      star="5.0 * USA"
      title="Life lessons with Katie Zaferes"
      person="From $135 / person"
      />
      <Cards 
      img="pics/cat4.jpeg"
      star="5.0 * USA"
      title="Life lessons with Katie Zaferes"
      person="From $135 / person"
      />
      <Cards 
      img="pics/cat2.jpg"
      star="5.0 * USA"
      title="Life lessons with Katie Zaferes"
      person="From $135 / person"
      />
      <Cards 
      img="pics/cat6.jpg"
      star="5.0 * USA"
      title="Life lessons with Katie Zaferes"
      person="From $135 / person"
      />
      </div>
      </div>
        )
      
  }
//     <div className="App">
//       {/* {/* <All />
//     </div>
//     <div>
//       <Component /> 
//   }*/ 
//       <Navy />
  
//     </div>
  
//   );
// }

// function Card() {
//   return(
//     <div className='card'>
//       <Page
//       img="pics/cat2.jpg"
//       name="mr.whiskerson"
//       phone="(212) 555-1234 "
//       email="mr.whiskaz@catnap.png"
//        />
//       <Page
//       img="pics/cat3.jpg"
//       name="mr.Agasaro"
//       phone="(212) 555-1234 "
//       email="mr.Agasaro@catnap.MEOW" />
//       <Page
//       img="pics/cat6.jpg"
//       name="mr.Ingabire"
//       phone="(212) 555-1234 "
//       email="mr.ingabire@catnap.meow" />
//       <Page
//       img="pics/cat.jpeg"
//       name="mr.Ahirwe"
//       phone="(212) 555-1234 "
//       email="mr.Ahirwe@catnap.meow" />

//     </div>
//   )
  
// }

  


export default Lidivine;
// export default Card;

