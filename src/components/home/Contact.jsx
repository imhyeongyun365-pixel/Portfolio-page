import React from 'react'
import './styles/Contact.scss'

const contactList = [
  {
    icon: '✉',
    label: '이메일',
    value: 'imhyeongyun365@gmail.com'
  },
  {
    icon: '☎',
    label: '전화번호',
    value: '+82 10-4663-8940'
  },
  {
    icon: '📍',
    label: '위치',
    value: '대한민국 경기도 포천시'
  }
]

const socialList = [
  {
    icon: '↗',
    href: '#',
    label: 'notion'
  },
  {
    icon: '⌘',
    href: '#',
    label: 'github'
  },
  {
    icon: '✉',
    href: 'mailto:imhyeongyun365@gmail.com',
    label: 'email'
  }
]

const Contact = () => {
  return (
    
      <div className="inner contact-inner">
        <div className="contact-title-box">
          <h2 className="contact-title">CONTACT</h2>
          <p className="contact-desc">
            새로운 기회나 협업 제안을 환영합니다. 언제든지 편하게 연락해 주세요!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactList.map((item) => (
              <div className="contact-card" key={item.label}>
                <div className="contact-icon">
                  {item.icon}
                </div>

                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}

            <div className="contact-social">
              <p>소셜 미디어</p>

              <div className="social-links">
                {socialList.map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form">
            <h3>메시지 보내기</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  id="name"
                  type="text"
                  placeholder="홍길동"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">제목</label>
              <input
                id="subject"
                type="text"
                placeholder="프로젝트 문의 제목"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                placeholder="안녕하세요. 협업 관련하여 연락드립니다..."
              />
            </div>

            <button type="submit" className="contact-submit">
              메시지 전송하기
            </button>
          </form>
        </div>
      </div>
    
  )
}

export default Contact