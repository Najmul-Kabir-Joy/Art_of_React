import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';


const Persons = () => {
    const [persons, setPerson] = useState([]);
    useEffect(() => {
        fetch('./person.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div>
            <h1>Persons INFO List</h1>
            {
                persons.map(person =>
                    <Person
                        key={person._id}
                        data={person}
                    >
                    </Person>
                )
            }
        </div>
    );
};

export default Persons;