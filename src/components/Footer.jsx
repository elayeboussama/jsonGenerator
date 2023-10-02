import React from 'react'
import styles from '../style' 
import { socialMedia} from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexStart}  flex-col mb-8 w-full`}>
         
        <h1 className={`font-poppins font-semibold cursor-pointer text-[24px] mr-10  bg-blue-green-gradient-text`}>{`{JG}`}</h1>
        <p className={`${styles.paragraph} mt-4 maw-w-[310px]`}>A new way to write JSON code more easily, humorously, and dynamically.</p>

      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-[18px] leading-[27px] text-white text-center   '>
          2023 JsonGenerator. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index)=>(
            <a target="_blank" href={social.link}>
              <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer