import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal,strMealThumb, strMeal, strArea, strInstructions, strYoutube } = props.meal;
    const url =`/restaurant/${idMeal}`
    return (
 <div>
    <Card className='border border-2 border-dark' style={{marginTop:'20px',borderRadius:'10px',background:'#ecd5d5'}}>
      <Card.Img variant="top"style={{ width: '200px',height:'200px',margin:'auto',marginTop:'20px',borderRadius:'20px'}}  src={strMealThumb} />
        <Card.Body>
         <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions.slice(0,200)}
            </Card.Text>
         <h5>Area: {strArea}</h5>
        </Card.Body>
         <Card.Footer>
        <Link to={url}>
      <button style={{backgroundColor:'#f6605f',border:'1px solid #f6605f',borderRadius:'5px'}}>See Details</button></Link>
                    <br />
                    <br />
       <a style={{textDecoration:'none',border:'1px solid #f6605f',backgroundColor:'#f6605f',padding:'5px',borderRadius:'5px',color:'black'}} href={strYoutube}><i style={{color:'red'}} class="fab fa-youtube"></i> Search On Youtube</a>             
    </Card.Footer>
    </Card>
   </div>
    );
};

export default Meal;