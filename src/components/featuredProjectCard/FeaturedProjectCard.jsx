import React from "react"
import './FeaturedProjectCard.scss'
import {icons} from '../../utils/icons'
import Tag from "../tag/Tag"

const GRADIENT = {
  violet: gradient_violet,
  emerald: gradient_emerald,
  sunset: gradient_sunset,
  sky: gradient_sky,
  ember: gradient_ember,
  rose: gradient_rose,
}
const META_ICONS = {
  stack: icons.stack,
  calendar: icons.calendar,
  github: icons.github,
  external: icons.external,
  code: icons.code
}

const IconStar = icons.star
const IconExternal = icons.external
const IconGithub = icons.github

const FeaturedProjectCard = ({
  title,
  description,
  tags = [],
  gradient = 'violet',
  status,
  meta = [],
  demoHref = '#',
  codeHref = '#',
  demoLabel = 'Live demo'
}) => {

  const gradientClass = GRADIENT[gradient] ?? GRADIENT.violet

  return (
    <article className='card'>
      <div className='`${visual} ${gradientClass}` aria-hidden'>
        <div className='chrome'>
          <span className='dot' />
          <span className='dot' />
          <span className='dot' />
        </div>
        <div className='mockContent' />
      </div>
      <div className='body'>
        <div className='topRow'>
          <div className='tags'>
            {tags.map(({ label, variant }) => (
              <Tag variant={variant} key={label}>
                {label}
              </Tag>
            ))}
          </div>
          {status ? (
            <span
              className="`${status} ${status.type == 'live' ? status_live : styles.status_featured}`"
            >
              {status.type == 'live' ? <span className={statusDot} aria-hidden /> : null}
              {status.label}
            </span>
          ) : null}
        </div>
        <h3 className="title">{title}</h3>
        <p className="desc">{description}</p>
        {meta.length > 0 ? (
          <div className="meta">
            {meta.map(({ type, text }) => {
              const MetaIcon = META_ICONS[type] ?? IconStar

              return (
                <span key={`${type}-${text}`} className="metaItem">
                  <span className="metaIcon">
                    <MetaIcon />
                  </span>
                  {text}
                </span>
              )
            })}
          </div>
        ) : null}

        <div className="actions">
          <a href={demoHref} className="`btn btn__primary ${btnPrimary}`">
            <IconExternal/>
            {demoLabel}
          </a>
          <a href={demoHref} className="`btn btn__outline ${btnOutline}`">
            <IconGithub/>
          </a>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProjectCard