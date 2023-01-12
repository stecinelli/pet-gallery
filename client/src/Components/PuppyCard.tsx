import React, {useState, useEffect} from 'react'
import { IPuppiesProps, IPuppies } from '../types';
import PuppyInfo from './PuppyInfo';

const PuppyCard = ({ puppy:{name, breed, dob, puppyId}, deleteFunction, updateFunction, setPuppiesList }: IPuppiesProps) => {
  const [nameToUpdate, setNameToUpdate] = useState('')
  const [breedToUpdate, setBreedToUpdate] = useState('')
  const [dobToUpdate, setDobToUpdate] = useState('')

  useEffect(() => {
    if(nameToUpdate !== '') {

      const puppyUpdate = {
        puppyId: puppyId,
        name: nameToUpdate,
        breed: breed,
        dob: dob
      }

      setPuppiesList((prev)=> {
        const filteredPuppyList = prev.filter(p=> p.puppyId !== puppyId);
         return [
           ...filteredPuppyList,
          puppyUpdate
         ]
      });

      updateFunction(puppyUpdate);
    }
    
    
  }, [nameToUpdate, puppyId])

  useEffect(() => {
    if(breedToUpdate !== '') {
      
      const puppyUpdate = {
        puppyId: puppyId,
        name: name,
        breed: breedToUpdate,
        dob: dob
      }

      setPuppiesList((prev)=> {
        const filteredPuppyList = prev.filter(p=> p.puppyId !== puppyId);
         return [
          ...filteredPuppyList,
          puppyUpdate
        ]

      });

      updateFunction(puppyUpdate);
    }

  }, [breedToUpdate, puppyId])

  useEffect(() => {
    if(dobToUpdate !== '') {
      
      const puppyUpdate = {
        puppyId: puppyId,
        name: name,
        breed: breed,
        dob: dobToUpdate
      }

      setPuppiesList((prev)=> {
        const filteredPuppyList = prev.filter(p=> p.puppyId !== puppyId);
         return [
          ...filteredPuppyList,
          puppyUpdate
        ]

      });

      updateFunction(puppyUpdate);
    }

  }, [dobToUpdate, puppyId])
  

  return (
  <div className='Card'>
    <h3><PuppyInfo info={name} setValue={setNameToUpdate}/></h3>
    <p><PuppyInfo info={breed} setValue={setBreedToUpdate}/></p>
    <p><PuppyInfo info={dob} setValue={setDobToUpdate}/></p>
    <button className='btn' onClick={()=> deleteFunction(puppyId)} >Delete</button>
  </div>
  )
}

export default PuppyCard