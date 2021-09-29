import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <div className='persons'>
            {
                persons.map(person =>
                    <Person data={person} key={person._id}></Person>
                )
            }
        </div>
    );
};

export default Persons;