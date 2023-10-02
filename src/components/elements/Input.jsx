import { useState } from "react";

 
export default function Input({name, type, id, placeholder, componentType, valueType, setValueType, listTextTypes}) {
    const [selectedType, setSelectedType]=useState(valueType!=null ? valueType : placeholder)
    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
      };
    return (
      <>
        {componentType=="TextField"?
            <div className="">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-white">
                    {name}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div> */}
                <input
                    type={type}
                    name={name}
                    id={id}
                    className="block w-[100px] sm:w-[150px] 
                    md:w-[130px] rounded-md border-0 py-1.5 pl-3 pr-4  mr-2 focus:text-gray-900 text-gray-200  ring-1 ring-inset ring-white placeholder:text-gray-400 bg-slate-950 focus:bg-white sm:text-[15px] text-[12px]  sm:leading-6"
                    placeholder={placeholder}
                />
                {/* <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                    Currency
                    </label>
                    <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                    </select>
                </div> */}
                </div>
            </div>    
        
        :

            <div className="">
                <label htmlFor={id} className="block text-sm font-medium leading-6 text-white">
                    {name}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <select
                    name={name}
                    id={id}
                    className="block w-[100px] sm:w-[150px] md:w-[130px] rounded-md border-0 py-1.5 pl-3 pr-4 mr-2 focus:text-gray-900 text-gray-200 ring-1 ring-inset ring-white placeholder:text-gray-400 bg-slate-950 focus:bg-white sm:text-[15px] text-[12px] sm:leading-6"
                    defaultValue={selectedType} // Set the default selected option
                    onChange={handleSelectChange} // Add the change event handler
                    > 
                    {listTextTypes.map(t=>(<option value="USD">{t}</option> ))}
                    </select>
                </div>
            </div>

    
    }


      </>
    )
  }
  