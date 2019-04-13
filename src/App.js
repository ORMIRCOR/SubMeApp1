import React, { Component } from 'react';
import {TypesOfApartments, UsersData, ExtraDetailsArr, ApartmentStack,  PhotoStack, SubletSearch} from './Data.js';
import SearchPage from "./SearchPage";


      class ExtraDetailsPublish extends Component 
      {
        render() {
            return(
              <div>
                <p>or</p>
              </div>
            )    
        }
      }

class FirtsPublishPage extends Component {

  render() {
    const data = this.props;
    const NamesList =  TypesOfApartments.map((Type, index) => {
      return(    
           <option key = {index} > {Type.TypeName} </option>
            ) 
      })

    return (
      <div>
       
         <h1> welcome ! in order to publish an add, please enter to following details </h1>
         <form action= "">

          <h3>Location information</h3>
          City:   <input type="text" name="CityName" value=""/> <br/>
          Street: <input type="text" name="StreetName" value=""/><br/>
          Number: <input type="text" name="NumberApr" value=""/><br/>
          
          <h3>Avalible at</h3>
          CheckIn: <input type="date" name="DateCheckIn"/> <br/>
          CheckOut: <input type="date" name="DateCheckOut"/> <br/>

          <h3>Property Type</h3>
          <select>  
          <option>choose</option>
          {NamesList}
          </select >
          
          <h3>Num Of Rooms</h3>
          <input type="range" name="NumOfRooms" min="1" max="6" /> 

          <h3>Sublet Type</h3>
          Solo: <input type="radio" name= "1"/> <br/>
          Partners: <input type="radio" name= "2" />  <br/>
            
          <h3> General description of the tablet </h3>
          <textarea rows="5" cols="20" name=""> </textarea>  <br/>

          <input type="submit" value="Next Step"/>
         
        </form>  
        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
  
        <SearchPage TypesOfApartments = {this.TypesOfApartments}  />
        
      </div>
    );
  }
}

export default App;
