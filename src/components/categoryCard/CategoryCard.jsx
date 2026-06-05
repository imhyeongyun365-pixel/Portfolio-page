import React from 'react'
import './CategoryCard.scss'
import ProgressBar from '../prograssBar/PrograssBar'
const CategoryCard = ({
    title,
    subtitle,
    accent = 'primary',
    skills = [],
    progress = 1,
    tags = [],
    icon,
    iconColor

}) => {
    return (
        <article
            style={iconColor ? { ['--icon-color']: iconColor } : undefined}
            className="category_card"
        >
            <div className="head">
                {icon ? <div className="iconWrap">{icon}</div> : null}
                <div className="headText">
                    <h3 className="title">
                        {title}
                    </h3>
                    {subtitle? <p className="subtitle">{subtitle}</p>:null}
                </div>
            </div>
            <div className="list">
                {skills.map(({ name, percent, showPercent }) => (
                    <ProgressBar
                        key={name}
                        label={name}
                        percent={percent}
                        accent={accent}
                        progress={progress}
                        showPercent={showPercent !== false}
                    />
                ))}
            </div>

            {tags.length > 0 ? (
                <div className="tagRow">
                    {tags.map((tag) => (
                        <span key={tag} className="tagChip">
                            {tag}
                        </span>
                    ))}
                </div>
            ) : null}
        </article>
    )
}

export default CategoryCard