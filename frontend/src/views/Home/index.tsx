import React, { useState } from "react"
import { useUser } from "../../utils/useUser"
import { useNavigate } from "react-router-dom"
import "./index.scss"
function Home() {
  const navigate = useNavigate()
  const { setName } = useUser()
  const [val, setVal] = useState("")

  const start = () => {
    if (val === "") {
      alert("please enter a name")
      return
    }
    setName(val)
    navigate("/guide")
  }
  return (
    <div className="home">
      <div className="intro">
        <b>实验介绍: 测量用户对途中带颜色标记对的色差感知</b>
      </div>
      <ul className="list">
        <li className="list-item">本实验旨在啊吧啊吧.....</li>
        <li className="list-item">这个在 src/views/home/index.tsx里</li>
        <li className="list-item">添加也可以</li>
        <li className="list-item">
          使用<b>{"<b>加粗文字</b>"}</b>
        </li>
      </ul>
      <div className="example">
        <div>以下就是示例图</div>
        <div className="images">
          <img src="/1.png" alt=""></img>
          <img src="/2.png" alt=""></img>
          <img src="/3.png" alt=""></img>
        </div>
      </div>
      <ul className="list">
        <li className="list-item">本实验旨在啊吧啊吧.....</li>
        <li className="list-item">这个在 src/views/home/index.tsx里</li>
        <li className="list-item">添加也可以</li>
        <li className="list-item">
          使用<b>{"<b>加粗文字</b>"}</b>
        </li>
      </ul>
      <div style={{ margin: "10px" }}>请输入您的姓名</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <div className="confirm" onClick={start}>
        确认
      </div>
    </div>
  )
}

export default Home
