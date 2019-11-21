// import React, { Component } from "react";

// class DogsList extends Component {
//   state = {
//     dogBreeds: null
//   };



//   componentDidMount() {
//     fetch("https://dog.ceo/api/breeds/list/all")
//       .then(res => res.json())
//       .then(data => {
//         console.log("what is inside data", data);
//         const breeds = Object.keys(data.message);
//         this.updateBreeds(breeds); // transform `data` to an array of strings Object.keys(data.message) other way of doing it.
//       })
//       .catch(console.error);
//   }

//   updateBreeds(breeds) {
//     this.setState({
//       dogBreeds: breeds
//     });
//   }



//   render() {
//     return (
//       <div className="dogs-list">
//         <h1>Dogs list</h1>
//         {this.state.dogBreeds === null && "Loading..."}

//         {
//           <ul>
//             {this.state.dogBreeds !== null &&
//               this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>)}
//           </ul>
//         }
//       </div>
//     );
//   }



// }

// export default DogsList;
