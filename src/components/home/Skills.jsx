import React from 'react'
import './styles/Skills.scss'
import { icons } from '../../utils/icons'
import CategoryCard from '../categoryCard/CategoryCard'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { certifications, skillCategories } from '../../utils/skillsData'
const Skills = () => {


  const CATEGORY_ICONS = {
        monitor: icons.monitor,
        server: icons.server,
        flask: icons.flask,
        cloud: icons.cloud,
        sparkle: icons.sparkle
    }

    const SparkleIcon = icons.sparkle

    const shouldReduceMotion = useReducedMotion()


    const cardMotion = shouldReduceMotion ? {} : {
        initail: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: .25 },
        transition: { duration: .45, ease: [.22, 1, .36, 1] }
    }
    return (
            <div className="inner skills-inner">
                <header className="hero">
                    <span className="`badge badge__green ${badge}`">
                        <SparkleIcon />
                        Tech stack
                    </span>
                    <h1 className="tit">Technologies I use</h1>
                    <p className="txt">
                        A curated set of tools and platforms I reach for when building modern, performant applications.
                    </p>
                </header>
                <div className="grid">
                    {skillCategories.map((cat, index) => {
                        const IconCmp = CATEGORY_ICONS[cat.iconKey] ?? icons.monitor

                        return(
                            <Motion.div
                            key={cat.key}
                                {...cardMotion}
                                transition={
                                    shouldReduceMotion || !cardMotion.transition
                                    ? undefined
                                    : {...cardMotion.transition,delay:index*0.06}
                                }
                            >
                                <CategoryCard
                                    title={cat.title}
                                    subtitle={cat.subtitle}
                                    accent={cat.accent}
                                    skills={cat.skills}
                                    tags={cat.tags}
                                    progress={1}
                                    icon={<IconCmp/>}
                                    iconColor={cat.iconColor}
                                />
                            </Motion.div>
                        )
                    })}
                </div>
                {/* <section className="certSection" aria-labelledby='certs-heading'>
                    <div className="certHeader">
                        <h2 id='certs-heading' className="certTitle">
                            Certifications
                        </h2>
                        <a href="#" className="certLink">
                            Verified credentails
                        </a>
                    </div>
                    <div className="certGrid">
                    {certifications.map((c)=>(
                        <article key={c.key} className="certCard" style={{['--cert-brand']:c.brandColor}}>
                            <div className="certIcon">
                                <span className="certMonogram">{c.monogram}</span>
                            </div>
                            <h3 className="certCardTitle">
                                {c.title}
                            </h3>
                            <p className="certMeta">
                                {c.issuer}-{c.year}
                            </p>
                            <p className="certDetail">
                                {c.detail}
                            </p>
                        </article>
                    ))}
                    </div>

                </section> */}
            </div>
    )
}

export default Skills