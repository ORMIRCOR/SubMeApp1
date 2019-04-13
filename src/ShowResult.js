import React, { Component } from 'react';
import LikedPosts from "./LikedPosts"; 


class ShowResult extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        adsThatILiked : [], 
      };
    };

 render() {

    var liked = [];

    const Exactly = this.props.arrSpecific.map((ad) => { return ( 
      < div >
     <table border="4" >
       <tr>
      <th>city</th>
      <th>{ad.city}</th>
    </tr>
    <tr>
      <td>cityArea</td>
      <td>{ad.cityArea}</td>
    </tr>
    <tr>
      <td>dateCheckIn</td>
      <td>{ad.dateCheckIn}</td>
    </tr>
    <tr>
      <td>dateCheckOut</td>
      <td>{ad.dateCheckOut}</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>{ad.maxPrice}</td>
    </tr>
    <tr>
      <td>propType</td>
      <td>{ad.propType}</td>
    </tr>

    <button onClick = { liked.push(ad) + alert("benny") } > Like </button>
 
  </table>
   <br> </br>
  </div >  )})

    const Flex = this.props.qFlex.map((ad) => { return ( 
      < div >
      <table border="4">
        <tr>
       <th>city</th>
       <th>{ad.city}</th>
     </tr>
     <tr>
       <td>cityArea</td>
       <td>{ad.cityArea}</td>
     </tr>
     <tr>
       <td>dateCheckIn</td>
       <td>{ad.dateCheckIn}</td>
     </tr>
     <tr>
       <td>dateCheckOut</td>
       <td>{ad.dateCheckOut}</td>
     </tr>
     <tr>
       <td>Price</td>
       <td>{ad.maxPrice}</td>
     </tr>
     <tr>
       <td>propType</td>
       <td>{ad.propType}</td>
     </tr>

     <button onClick = { liked.push(ad) + alert("benny") } > Like </button>

   </ table>
   </ div > )})

   this.setState ({ adsThatILiked :  this.liked }); 
    
    return (
      <div>

          <h2>specific</h2>
          {Exactly} 

          <h2>Flex</h2>
          {Flex}

         <button onClick = { <LikedPosts {...this.state} /> } >  clik here and see the ads that you liked </button>

      </div>
    );
  }
}

export default ShowResult;


// class Child extends Component
//   {
//   render() {
//     return (
//       <button onClick = {this.props.handler} > click me  </button>
//     ) 
//   }
//   }

// class Parent extends Component
//    {
//   constructor(props) {
//     super(props)

//     this.handler = this.handler.bind(this)
//     this.state = {color : "green"}
//    }

//     handler() {
//     this.setState({
//       color:"yellow"
//     })
//   }

//   render() {
//     return(       
//        <div>
//       <p style={{backgroundColor:this.state.color}}> {this.props.player.name} </p>
//       <Child handler = {this.handler} />
//       </div>
//     )
//   }
// }