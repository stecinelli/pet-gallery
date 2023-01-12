import React, { useState, useEffect } from 'react';
import { IPuppies, INewPuppy } from '../types';
import AddNewPuppy from './AddNewPuppy';
import PuppyCard from './PuppyCard';

const PuppiesGallery = () => {

    const [puppiesList, setPuppiesList] = useState <IPuppies[]> ([
        {
            puppyId: 0,
            name: 'NOME',
            breed: 'RACA',
            dob: 'AAAA/MM/DD'
        },
    ])

    const getData = async () => {
        const response = await fetch('http://localhost:3001/api/puppies');
        const data = await response.json();
            
        const newPuppieslist = data.puppies;

        setPuppiesList(newPuppieslist)
        console.log('response get', response)
    }

    const addPuppy = async (newPuppy: INewPuppy) => {

        const response = await fetch('http://localhost:3001/api/puppies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPuppy)
        });

        console.log('newPuppy', newPuppy)
        console.log('response', response)
        getData()

    }

    const updatePuppy = async (puppy: IPuppies) => {

        const response = await fetch(`http://localhost:3001/api/puppies/${puppy.puppyId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(puppy)
        });

        console.log('newPuppy', puppy)
        console.log('response update', response)
        getData()
        
    }

    const deletePuppy = async (id: number) => {
        const response = await fetch(`http://localhost:3001/api/puppies/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        });

        console.log('response delete', response)
        getData()
    }

    useEffect(() => {
        getData();

    }, [])


  return (
    <div className='Gallery'>
        <h1>Puppies Gallery</h1>
        <div className='puppyCard-container'>
            {puppiesList && 
                puppiesList.map(p => 
                    <PuppyCard 
                        puppy={p}
                        key={p.puppyId}
                        deleteFunction={deletePuppy}
                        setPuppiesList={setPuppiesList}
                        updateFunction={updatePuppy}
                        /> 
                )
            }
        </div>
        <AddNewPuppy addFunction={addPuppy}/>
    </div>
  )
}

export default PuppiesGallery