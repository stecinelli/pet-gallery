
import React, {useState} from 'react'
import { IPuppiesInfo } from '../types';

const PuppyInfo = ({info, setValue}: IPuppiesInfo) => {
  const [isEditable, setIsEditable] = useState <Boolean> (false)
  const [infoToChange, setInfoToChange] = useState('')

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.currentTarget.value;
    setInfoToChange(value)
  }

  const saveInfoChange = () => {
    setValue(infoToChange)
    setIsEditable(false)
  }

  return (
  <>
    <>
      <span>{info}</span>
      <button className='btn edit' onClick={()=> setIsEditable(true)}></button>
    </>
    
    {isEditable && 
      <>
        <input typeof='text' name='changeInfo' onChange={handleInfoChange}/>
        <button className='btn' onClick={saveInfoChange}>Save</button>
        <button className='btn' onClick={()=>setIsEditable(false)}>Close</button>
      </>
    }
  </>
  )
}

export default PuppyInfo