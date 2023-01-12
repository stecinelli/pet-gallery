import express from 'express';
import React, { useState } from 'react'
import { INewPuppy, IPuppiesAdd } from '../types';


const AddNewPuppy = ({ addFunction }: IPuppiesAdd) => {
    const [showAddPuppyInput, setShowAddPuppyInput] = useState <Boolean> (false)
    const [newPuppyName, setNewPuppyName] = useState('')
    const [newPuppyBreed, setNewPuppyBreed] = useState('')
    const [newPuppyDob, setNewPuppyDob] = useState('')

    const handleNewPuppyName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        const value = e.currentTarget.value;
        setNewPuppyName(value)
    }

    const handleNewPuppyBreed = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        const value = e.currentTarget.value;
        setNewPuppyBreed(value)
    }

    const handleNewPuppyDob = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        const value = e.currentTarget.value;
        setNewPuppyDob(value)
    }

    const createNewPuppy = (e: React.MouseEvent<HTMLElement>) => {

        const newPuppy: INewPuppy ={
            name: newPuppyName,
            breed: newPuppyBreed,
            dob: newPuppyDob,
        }

        e.preventDefault();

        addFunction(newPuppy);
        setShowAddPuppyInput(false);

        setNewPuppyName('');
        setNewPuppyBreed('');
        setNewPuppyDob('');
        
    }
    

  return (
    <div className='addNewPuppy-container'>
        <button className='btn add' onClick={()=>setShowAddPuppyInput(true)}> Add new puppy </button>
        <div className={showAddPuppyInput ?'form-popup open' : 'form-popup'}>
            <form className='form-container'>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder='Enter Name' name='name' value={newPuppyName} onChange={handleNewPuppyName}/>

                <label htmlFor="breed">Breed:</label>
                <input type="text" placeholder='Enter Breed' name='breed' value={newPuppyBreed} onChange={handleNewPuppyBreed}/>

                <label htmlFor="dob">Date of Birth:</label>
                <input type="text" placeholder='Enter Date of Birth' name='dob' value={newPuppyDob} onChange={handleNewPuppyDob}/>

                <button className='btn add' onClick={createNewPuppy}>Save</button>
                <button className='btn add' onClick={(e)=>{e.preventDefault();setShowAddPuppyInput(false)}}>Cancel</button>
            </form>
        </div>
    </div>
  )
}

export default AddNewPuppy