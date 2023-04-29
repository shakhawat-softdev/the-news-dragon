import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.error(error.message))
    }, [])

    return (
        <div>
            <h2>All Category</h2>
            <div className=''>
                {
                    catagories.map(category => <p key={category.id}>
                        <Link to={`${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;