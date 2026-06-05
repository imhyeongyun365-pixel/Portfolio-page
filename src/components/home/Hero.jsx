import React from 'react'
import "./styles/Hero.scss"
const Hero = () => {
  return (
    <div className='inner hero-inner'>
      <div className='intro-me'>
        <div className="img-wrap">
        <img src="./hero-myphoto.jpg" alt="photo" />

        </div>
        <ul className='myspack'>
          <li className='spack work'>
            <span className='spack-num'>3+</span>
            <span className='spack-name'>경력</span>
          </li>
          <li className='spack skills'>
            <span className='spack-num'>3+</span>
            <span className='spack-name'>기술</span>
          </li>
          <li className='spack projects'>
            <span className='spack-num'>6+</span>
            <span className='spack-name'>프로젝트</span>
          </li>
          <li className='spack Negotiation'>
            <span className='spack-num'>1+</span>
            <span className='spack-name'>협업 수</span>
          </li>
        </ul>
      </div>
      <div className='intro-title'>
          <span className='main-sub_1'>
            현대적이고 성능 좋은 애플리케이션을 <br />
            만들기 위해 사용하는 기술
          </span>
        <h1 className="tit">
          <span className='main-title_1'>
          Full-Stack Delveloper
          </span>
          <span className='main-title_2'>
          풀스택 개발자 
          </span>
          <span className='main-title_3'>
          임현균 입니다.
          </span>
        </h1>

        <div className="intro-btn">
          <button className='myworkBtn'>내 작업 보기</button>
          <button className='mycallBtn'>연락하기</button>
        </div>
      </div>
    </div>
  )
}

export default Hero