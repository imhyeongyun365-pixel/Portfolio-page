import React, { useEffect, useRef, useState } from 'react'
import './PrograssBar.scss'
import { animate, motion as Motion, useReducedMotion } from 'framer-motion'

const ACCENT = {
    primary: 'accent_primary',
    success: 'accent_success',
    info: 'accent_info',
    warning: 'accent_warning',
    frontend:'accent_frontend',
    backend:'accent_backend',
    testing:'accent_testing',
    develop:'accent_develop'
}

const ProgressBar = ({
    label,
    percent,
    accent = 'primary',
    progress = 1,
    showPercent = true
}) => {

    const prefersReducedMotion = useReducedMotion()

    const safe = Math.min(100, Math.max(0, percent))

    const accentClass = ACCENT[accent] ?? ACCENT.primary

    const progressRatio = Math.min(1, Math.max(0, progress))

    const end = Math.min(100, Math.max(0, safe * progressRatio))

    const targetDisplay = Math.round(end)

    const [displayPct, setDisplayPct] = useState(0)

    const displayRef = useRef(0)

    const pctLabel = prefersReducedMotion ? targetDisplay : displayPct

    useEffect(() => {

        if (prefersReducedMotion) return

        const start = displayRef.current

        if (start === targetDisplay) return

        const controls = animate(start, targetDisplay, {
            type: 'tween',
            duration: .6,
            ease: [.22, 1, .36, 1],
            onUpdate: (v) => {
                const n = Math.round(v)
                displayRef.current = n
                setDisplayPct(n)
            },
            onComplete: () => {
                displayRef.current = targetDisplay
                setDisplayPct(targetDisplay)
            }
        })

        return () => controls.stop()

    }, [targetDisplay, prefersReducedMotion])


    const fillTransition = prefersReducedMotion
        ? { type: 'tween', duration: 0 }
        : { type: 'spring', stiffness: 100, damping: 22, mass: .85 }

    return (
        <div className="wrap">
            <div className="labelRow">
                <span className="label">{label}</span>
                {showPercent ? (
                    <span className="pct">{pctLabel}%</span>
                ) : null}
            </div>
            <div className="track">
                <Motion.div
                    className={`fill ${ACCENT[accent] ?? ACCENT.primary}`}
                    
                    initial={prefersReducedMotion?false:{width:'0%'}}
                    animate={{width:`${end}%`}}
                    transition={fillTransition}
                />
            </div>
        </div>
    )
}

export default ProgressBar