import React from "react";
import IMG from "../img/Morgan.jpg";
import PropTypes from 'prop-types';
const childcomponent = ( props) => {
const { title, pp,t,t2,Alert1}=props;
 return (
   <>
     <div className= 'container'>
   <h1>{title}</h1>
   <button   onClick={()=>Alert1(title)} > click me</button>
   <h3>{pp}</h3>
   <a href="https://imgbb.com/"><img src= {IMG} alt="" border="0" /></a>
   <h4>About him</h4>
   <p>Morgan Freeman (born June 1, 1937) is an American actor, director, and narrator. He has appeared in a range of film genres portraying character roles and is particularly known for his distinctive deep voice. Freeman is the recipient of various accolades, including an Academy Award, a Golden Globe Award, and a Screen Actors Guild Award.</p>
   <h4>Here are 6 of the best roles of Morgan Freeman's career.</h4>
   <div className="listFlex">
       <ul>
           {t.map(el=><li>{el.act}</li>)}
       </ul>
       <ul>
           <li> {t2.map(el=><li>{el.act2}</li>)} </li>
       </ul>
   </div>
   <h4>Social Media</h4>
   Catch us on Twitter - <a href="https://twitter.com/morgan_freeman?lang=fr">@morgan_freeman</a>
</div>
   </>
 );
};
childcomponent.defaultProps = {
    pp : 'This is default type for pp ',
  };
  childcomponent.propTypes = {
    title: PropTypes.string.isRequired,
    pp: PropTypes.string,
    t: PropTypes.arrayOf(PropTypes.string),
    t2:PropTypes.arrayOf(PropTypes.string),
    handleAlert: PropTypes.func,
  };
export default childcomponent;