import React, { Component } from "react";
import { ApartmentStack } from './Data.js';
import ShowResult from "./ShowResult"; 

const PriceCategory = [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000];
const PriceflexibleRange = [0.1, 0.1, 0.1, 0.05, 0.05, 0.06, 0.06, 0.06];
// const PriceCategoryPerNight = [100, 200, 300, 400, 500];

const subletDurationCategory = [3, 5, 10, 14, 21, 30, 90];
const subletDurationFlexCategory = [1, 2, 3, 4, 4, 7, 10];

class Filter extends Component {
  
  constructor(props) {
    super(props);
    this.state = { //object of an ad
      city: this.props.city,
      cityArea: this.props.cityArea,
      checkIn: this.props.checkIn,
      checkOut: this.props.checkOut,
      propType: this.props.propType,
      maxPrice: this.props.maxPrice,
      isFlexibleCheckIn : this.props.flexibleCheckIn,
      isFlexibleCheckOut: this.props.flexibleCheckOut,
      isFlexiblePrice: this.props.flexiblePrice,
      arrSpecific : [], // Contains ads that are completely relevant to the search settings
      arrResidues : [], // Contains the relevant ad residue from all ads
      arrAllAdds : [] // Contains all ads 
    };
  };

  render() {
  // debugger;
    alert (" benny filter ");

   var temp = [];
   var arrSpecific = []; // Contains ads that are completely relevant to the search settings
   var arrResidues = []; // Contains the relevant ad residue from all ads
   var joined;
   

   this.arrAllAdds = () => { // Contains all ads (apartments)
    for (let i = 0; i < 4 ; i++) {
     // debugger;
       temp.push(ApartmentStack[i]);
      // this.joined = this.state.arrSpecific.concat(ApartmentStack[i]);
      // this.setState({ arrSpecific : joined })

      // let a = this.state.arrSpecific.slice(); //creates the clone of the state
      // a[i] = ApartmentStack[i];
      // this.setState({arrSpecific : a});
      
      const {arrSpecific} = this.state; 
      const newItem = ApartmentStack[i];
      this.setState({arrSpecific : [...this.state.arrSpecific, newItem ]});
    }
    return temp;
  }

  // this.arrAllAdds = () => { // Contains all ads (apartments)
  //   for (let i = 0; i < 4 ; i++) {
  //     this.joined = this.state.arrSpecific.concat(ApartmentStack[i]);
  //     this.setState({ arrSpecific : joined })
  //   }
  // }

  // this.arrAllAdds();

    this.temp = this.arrAllAdds();

    this.setState ( { arrAllAdds  :  temp } );  // set all ads

      this.arrSpecific = this.state.arrAllAdds.filter(Apartment =>  
      Apartment.city === this.props.city &&
      Apartment.cityArea === this.props.cityArea &&
      Apartment.checkIn === this.props.checkIn && 
      Apartment.checkOut === this.props.checkOut && 
      Apartment.maxPrice <= this.props.maxPrice &&
      Apartment.propType === this.props.propType
      );

      this.setState ({ arrSpecific :  arrSpecific }); // set specific ads

        arrResidues = this.state.arrAllAdds.filter(Apartment =>  
        Apartment.city !== this.props.city ||
        Apartment.cityArea !== this.props.cityArea ||
        Apartment.checkIn !== this.props.checkIn || 
        Apartment.checkOut !== this.props.checkOut || 
        Apartment.maxPrice >= this.props.maxPrice ||
        Apartment.propType !== this.props.propType
        );
  
        this.setState ({ arrResidues :  arrResidues }); //  set arrResidues

     if(this.props.flexPrice === 1 || this.props.flexflexOut === 1 || this.props.flexflexIn === 1) {
      return (
        <div>
          <h1>looking</h1>
          <FlexFilter {...this.state}  />
        </div>
      );
     }

    else {
    return (
    <div>
     <h1>ShowResult</h1>
     < ShowResult {...this.state.arrSpecific} />
     </div>
      );
    }
  }
}

export class FlexFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
       arrFlex : [], // Contains the ads according to the user's flexibility settings
       flexibleDateIn: "",
       flexibleDateOut: "",
       flexibleMaxPrice: "",
    };
  };

  newMaxPrice = () => {
    debugger;
    let index, newprice;
    for (let i = 0; i < PriceCategory.length; i++) {
      if (this.props.maxPrice <= PriceCategory[i]) {
        index = i;
        break;
      }
      newprice = this.props.maxPrice + (this.props.maxPrice * PriceflexibleRange[index]);
      return newprice;
    }
  }

  newDateOut = () => {
    debugger;
    let index = 0, durationSublet = this.props.checkOut - this.props.checkIn ; // in order to know the sublet duration
    let newCheckOut;
    for (let i = 0; i < subletDurationCategory.length; i++) {
      if (durationSublet <= subletDurationCategory[i]) {
        index = i;
        break;
      }
      newCheckOut = this.props.checkOut + (subletDurationFlexCategory[index]);
      return newCheckOut;
    }
  }

  render() {

    var arrFlex = [];
  
    debugger;
    if(this.props.isFlexiblePrice === "1")
    {
      this.setState(
        {
          flexibleMaxPrice: this.newMaxPrice(),
        });
    }

    if(this.props.isFlexibleCheckOut === "1")
    {
      this.setState(
        {
          flexibleDateOut: this.newDateOut(),
        });
    }
       
      arrFlex = this.state.arrResidues.filter(Apartment =>  
      Apartment.city === this.props.city &&
      Apartment.cityArea === this.props.cityArea &&
      Apartment.checkOut <= this.state.flexibleDateOut && 
      Apartment.checkIn === this.props.checkIn &&
      Apartment.maxPrice <= this.state.flexibleMaxPrice &&
      Apartment.propType === this.state.propType);

 
    this.setState(
      {
        arrFlex : arrFlex
      });

    return (
      <div>
        <h1>looking</h1>
       < ShowResult flex = {this.state.arrFlex} specific = {this.props.arrSpecific} />
      </div>
    );
  }
}

export default Filter;

  //  apartmentprice = Filter.map((apartment, index) => {
  //   return (
  //     <div>
  //       <p key={index} > {apartment.Price} </p>
  //       <br />
  //     </div>
  //   )
  // })

    // let k = ApartmentStack();
    // Filter = k.filter(function (Apartment, Search) {
    //   return Apartment.Price <= maxPrice && Apartment.City === Search.location[0]
    //     && Apartment.Aavailable[0] === Search.Aavailable[0] && Apartment.Aavailable[1] === Search.Aavailable[1];
    // });

      // while ( this.i != 0) { // flew while
    //   if (this.state.qResidues.first().city == this.state.city &&
    //       this.state.qResidues.first().cityArea == this.state.cityArea &&
    //        [ this.state.qResidues.first().checkOut >= this.props.checkOut && this.state.qResidues.first().checkOut <= this.state.flexibleDateOut ] 
    //          && this.state.qResidues.first().checkIn == this.props.checkIn && this.state.qResidues.first().maxPrice <= this.state.flexibleMaxPrice
    //         &&  this.state.qResidues.first().propType == this.state.propType)
    //         {
    //        tempQflex.add(this.state.qResidues.first());   // add ad to qFlex
    //         }
    //    qResidues.Remove(); // remove 1 element from the  qResidues
    //    this.setState(
    //     {
            
    //     });
    //    i = qResidues.Size();
    // }
