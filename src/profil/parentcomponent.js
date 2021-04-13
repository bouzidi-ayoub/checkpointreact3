import React from 'react';
import ChildComponent from "./childcomponent" ;
const array = [ { act : "Driving Miss Daisy (1989)"}, {act: "Robin Hood: Prince of Thieves (1991)"}, { act: "The Shawshank Redemption (1994)"}]
const array2 = [{ act2: "Nurse Betty (2000)"},{ act2:""},{act2:"Million Dollar Baby (2004)"}]
const parentcomponent = ( ) => {
const handleAlert = (title) => alert(`this is  ${title}`);
 return (
   <>
     <ChildComponent
     title="Morgan Freeman"
     pp= " profil picture"
     handleAlert={handleAlert}
     t= {array}
     t2={array2}
     Alert1={handleAlert}
     
     />
     
   </>
 );
};

export default parentcomponent;