import React from 'react'
import "./birthday.css"
import { motion } from 'framer-motion';

export const Birthday = () => {
  return (
   <div className='container'>
     <div className='section'>
      <motion.div
      whileInView={{ opacity: 1, y:-800}}
      transition={{delay:0, duration:25}}
      className='header'>
      <motion.h2
      initial={{ opacity: 0, y: 400,scale: 0.5 }}
      whileInView={{ opacity: 1, y:0, scale: 1}}
      transition={{delay:1.5, duration:5}}
      >Happy moments</motion.h2>
      <motion.h2
       initial={{ opacity: 0, y: 400,scale: 0.5 }}
       whileInView={{ opacity: 1, y:0, scale: 1}}
       transition={{delay:3, duration:5}}
      >Happy thoughts</motion.h2>
      <motion.h2
       initial={{ opacity: 0, y: 400,scale: 0.5 }}
       whileInView={{ opacity: 1, y:0, scale: 1}}
       transition={{delay:4.5, duration:5}}
      >Happy dreams</motion.h2>
      <motion.h2
       initial={{ opacity: 0, y: 400,scale: 0.5 }}
       whileInView={{ opacity: 1, y:0, scale: 1}}
       transition={{delay:6, duration:5}}
      >Happy feelings</motion.h2>
      
     
        </motion.div>


        
 <motion.div
         initial={{ opacity: 0, y: 600,scale: 0.5 }}
         whileInView={{ opacity: 1, y:0, scale: 1}}
         transition={{delay:15, duration:5}}
        className='card'>

          <div className='img-box'>
          <div className='imge'>
        <img src="./images/23rd-birthday-45.gif" alt="" />
      </div>
          <div className='my-life'>
          <img src="./images/img1.jpg" alt="" />
          </div>
          </div>

          <div className='text'>
            <p>Your smile is even brighter than the sun. I wish it stays like this forever.You may be far from my eyes but you aren't far from my soul, enjoy your birthday and every good thing that comes your way.Happy Birthday!</p>
          </div>
          
        </motion.div>
      </div>
   </div>
  )
}
