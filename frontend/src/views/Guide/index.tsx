import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./index.scss"
function Guide() {
  const navigate = useNavigate()
  return (
    <div className="guide">
      <div className="title">训练指南</div>
      <ul className="list">
        <li className="list-item">这个在 src/views/Guide/index.tsx</li>
        <li className="list-item"> 阿八八八</li>
        <li className="list-item">自己写点吧</li>
      </ul> 
      <div className="start"><Link to="/test">开始训练</Link></div>
    </div>
  )
}

export default Guide
