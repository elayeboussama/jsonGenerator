import React, { useState } from 'react';
import styles from '../style'; 
import Input from './elements/Input';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BiCopyAlt } from 'react-icons/bi';
function Generator() {
  const [textTypes, setTextTypes] = useState(["String", "Number", "Array"])
  const Field = ({index}) =>{
    const [valueType, setValueType] = useState("String")
    return (
      <div className={`flex flex-row justify-between items-center w-full bg-slate-900 rounded px-5 pt-1 `}>
        <div className={`flex gap-4 `}>
          <div className={`w-[20px] h-[70px] border-l-2 border-b-2 border-dashed rounded-bl-md  relative -mt-4 `}/>
          <Input name="Field" type="text" id="field" placeholder="Field name" componentType="TextField" />
        </div>
        <Input name="Type" type="text" id="type" placeholder="choose type" componentType="select" listTextTypes={textTypes} setValueType={setValueType} valueType={valueType} />
        <Input name="Value" type={valueType} id="value" placeholder="Field Value" componentType="TextField" />
        <AiOutlineMinusCircle size={20} className={`mt-7 cursor-pointer`} onClick={()=>popElement(index)} color="white"/>
      </div>
    )
  }

  let [list, setList] = useState(["a"])
const pushElement = ()=>{
  setList([...list,"a"])
}
function popElement (index){
  const newArray = [...list]; // Create a copy of the original array
  newArray.splice(index, 1); // Delete the element at the specified index
  setList(newArray) 
}
  return (
    <section id="home" className={`flex md:flex-row gap-6 flex-col min-h-[400px] relative ${styles.paddingX}`}>
      <div className={`flex flex-col justify-between items-start w-full h-full bg-slate-900 rounded-lg px-5 py-7 md:min-w-[500px] sm:min-w-[580px]  min-w-[420px] overflow-auto`}>
       <div className='mb-3'>
        <h1 className={`text-white `}>Object Name</h1>
        <Input name="Value" type="text" id="value" placeholder="Field Value" componentType="TextField" />
       </div>
        {list.map((f,index)=>{
          return <Field index={index}/>
        })}
        <div className={`flex gap-1 items-end ml-5`}>
          <div className={`w-[20px] h-[70px] border-l-2 border-b-2 border-dashed rounded-bl-md  relative -mt-3  `}/>
          <AiOutlinePlusCircle size={20} className={`-mb-2 cursor-pointer`} onClick={pushElement} color="white"/>
        </div>
        
      </div>
      <div className="border__gradient w-full h-full min-h-[500px] bg-transparent p-[1.5px]  rounded-lg z-[2] relative">
        <div className="flex flex-row justify-between items-center w-full h-full min-h-[500px] bg-slate-950   rounded-lg z-[1]">
          <div className='absolute top-0 right-0 w-[30px] bg-slate-800 text-white flex justify-between items-center mr-[1.5px] mt-[1.5px] px-2  rounded-tr-md rounded-bl-md  cursor-pointer shadow-2xl'>
            <BiCopyAlt className='my-1' size={18} onClick={()=>alert("hello")} color="white"/>
          </div>
        </div>
      </div>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] -bottom-[20%] rounded-full blue__gradient'/>
  </section>
  )
}

export default Generator