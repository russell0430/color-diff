import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./index.scss"
function Guide() {
  const navigate = useNavigate()
  return (
    <div className="guide">
      <div className="title">训练指南</div>
      <ul className="list">
        <li className="list-item">在下面的实验中，将会展示6个图片训练任务，您需要完成6次训练任务后才能开始正式的实验</li>
        <li className="list-item">在每个图片中，只需点击“是”或者“否”即可</li>
        <li className="list-item">在训练实验任务过程中，您可以熟悉界面的点击方式</li>
        <li className="list-item">所有的灰色标记均为干扰标记</li>
        <li className="list-item">如果您准备好了，可以点击下面的“开始训练”继续实验</li>
      </ul> 
      <div className="start"><Link to="/test">开始训练</Link></div>
    </div>
  )
}

export default Guide
