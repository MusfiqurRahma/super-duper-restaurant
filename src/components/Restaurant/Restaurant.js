import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import {Form, FormControl, Row} from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText,setSearchText]=useState('')
    
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data=>setMeals(data.meals))
    }, [searchText])
    const handleSearch = event => {
        const setSearchValue = event.target.value;
        setSearchText(setSearchValue)
    }
    return (
        <div>
        <Form className="d-flex w-50 mx-auto mt-3">
        <FormControl
          onChange={handleSearch}
          type="search"
          placeholder="Search your favourite food"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success primary" style={{border:'1px solid #ced4da',borderRadius:'5px',backgroundColor:'#ecd5d5'}}>Search</Button>
      </Form>
            <Row xs={1} md={4} className="g-4 m-auto" style={{ width: '95%',}}>
            {
                    meals.map(meal => <Meal
                        meal={meal}
                        key={meal.idMeal}>
                        </Meal>)
            }
            </Row>
         </div>
     );
};
export default Restaurant;