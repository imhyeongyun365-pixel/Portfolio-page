import React from 'react'
import './ProjectCard.scss'
import Tag from '../tag/Tag'
const ProjectCard = ({
    title,
    description,
    tags = [],
    image,
    imageAlt = ''
}) => {
    return (
        <article className="card">
            <div className="thumb">
                <img 
                        src={image} 
                        alt={imageAlt || title} 
                    />
            </div>
            <div className="body">
                <div className="tags">
                    {tags.map(({ label, variant }) => (
                        <Tag key={label} variant={variant}>
                            {label}
                        </Tag>
                    ))}
                </div>
                <h3 className="card-tit">{title}</h3>
                <p className="desc">
                    {description}
                </p>
                <div className="styles">
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