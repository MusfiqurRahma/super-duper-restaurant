import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { restaurantId } = useParams();
    const [data, setData] =  useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${restaurantId}`)
            .then(res => res.json())
            .then(data => setData(data.meals[0]))
    }, [restaurantId])
    return (
        <div style={{ border: '2px solid black', width: '20%', margin: 'auto', marginTop: '10px', borderRadius: '15px' }}>
            <img style={{ width: '200px', height: '200px', margin: 'auto', marginTop: '20px', borderRadius: '20px' }} src={data.strMealThumb} alt="" />
            <h4>Id No: {restaurantId}</h4>
            <h3>{data.strMeal}</h3>
            <h5>Area: {data.strArea}</h5>
        </div>
    );
};
export default Details;