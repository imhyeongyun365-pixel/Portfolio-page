import React from 'react'
import './styles/MainProject.scss'
import { motion as Motion, scale } from 'framer-motion'
import { mainprojectList } from '../../utils/mainprojectList'
import ProjectCard from '../projectCard/MainProjectCard'

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

const MainProject = () => {


  return (
    <div className="inner Mprojects-inner">

       
        <h1 className="tit tit__">
          Main Project
        </h1>

       

      
        
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: .2 }}
          className="Main-grid">
          {mainprojectList.map((p) => (
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

export default MainProject