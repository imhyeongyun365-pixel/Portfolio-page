import React from 'react'
import './MainProjectCard.scss'
import Tag from '../tag/Tag'
const ProjectCard = ({
    title,
    description,
    tags = [],
    image,
    imageAlt = ''
}) => {
    return (
        <article className="main-card">
            <div className="main-thumb">
                <img 
                        src={image} 
                        alt={imageAlt || title} 
                    />
            </div>
            <div className="main-body">
                <div className="main-tags">
                    {tags.map(({ label, variant }) => (
                        <Tag key={label} variant={variant}>
                            {label}
                        </Tag>
                    ))}
                </div>
                <h3 className="main-card-tit">{title}</h3>
                <p className="main-desc">
                    {description}
                </p>
                <div className="main-styles">
                    <button className='btn btn__primary btn__md'>
                            View
                    </button>
                    <button className='btn btn__outline btn__md'>
                            Code
                    </button>
                </div>
            </div>
    
        </article>
    )
}

export default ProjectCard