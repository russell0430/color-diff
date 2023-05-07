import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./index.scss"
function Start() {
  const navigate = useNavigate()
  return (
    <div className="guide">
      <div className="title">实验指南</div>
      <ul className="list">
        <li className="list-item">恭喜您已经完成训练任务！</li>
        <li className="list-item">
          <b>{"为保证实验数据的准确性，在实验过程中切勿缩放界面！"}</b>
        </li>
        <li className="list-item">
          <b>
            {"为保证实验数据的完整性，在实验过程中切勿刷新界面和回退界面！"}
          </b>
        </li>
        <li className="list-item">
          如果您准备好了，可以点击下面的“开始实验”正式进入实验
        </li>
      </ul>
      <Link to="/group">
        <div className="start">开始实验</div>
      </Link>
    </div>
  )
}

export default Start
