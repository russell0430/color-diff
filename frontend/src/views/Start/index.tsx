import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"
function Start() {
  return (
    <div className="start">
      你被强化了,快去送
      <div className="intro">这个在 src/views/Start/index.tsx里</div>
      <ul className="list">
        <li className="list-item">注意不要A</li>
        <li className="list-item">注意不要b</li>
        <li className="list-item">注意c</li>
      </ul>
      <div className="confirm">
        <Link to="/group">确定</Link>
      </div>
    </div>
  )
}

export default Start
