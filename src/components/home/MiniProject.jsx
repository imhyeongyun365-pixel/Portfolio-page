import React from 'react'
import './styles/MiniProject.scss'
import { miniprojectList } from '../../utils/miniprojectList'
import { motion as Motion, scale } from 'framer-motion'
import ProjectCard from '../projectCard/MiniProjectCard'
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .15,
    }
  }
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .3,
      ease: [.22, 1, .36, 1]
    }
  }
}


const Project = () => {
  return (
    
      <div className="inner projects-inner">

       
        <h1 className="tit tit__">
          MINI Project
        </h1>

       

      
        
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: .2 }}
          className="grid">
          {miniprojectList.map((p) => (
            <Motion.div
              key={p.title}
              variants={itemVariants}
            >

              <ProjectCard
                {...p}
              />

    
            </Motion.div>
          ))}
        </Motion.div>
      </div>

    
  )
}

export default Project