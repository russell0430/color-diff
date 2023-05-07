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
        <b>实验介绍: 测量用户对图中带颜色标记对的色差感知</b>
      </div>
      <ul className="list">
        <li className="list-item">本实验的目的是收集实验用户对图中带颜色标记的色差感知的数据，请您仔细阅读实验介绍，并开始用户实验。</li>
        <li className="list-item">您提供的实验数据将用于科学分析，请您务必认真对待实验，非常感谢！</li>
        <li className="list-item">在下面的实验中，我们将展示<b>{"6个图片用于训练，144个图片（36个散点图、72个柱状图、36个线形图）"}</b>用于正式实验  
        </li>
        <li className="list-item">特别注意，本实验共有3个实验，<b>{"每个用户只需要做其中一个即可"}</b>，具体做哪个会被提前告知。</li>
      </ul>
      <div className="example">
        <div><b>{"下面是三个展示任务："}</b></div>
        <div className="images">
          <img src="/1.png" alt=""></img>
          <img src="/2.png" alt=""></img>
          <img src="/3.png" alt=""></img>
        </div>
      </div>
      <ul className="list">
        <li className="list-item"><b>{"对于每一个图片，会提供两个选择。选择“是”代表您认为图中两种颜色完全相同，选择“否”代表您认为图中两种颜色不完全相同"}</b></li>
        <li className="list-item"><b>{"特别注意：（1）图中不是简单的“紫色”和“紫色” （2）只要您感觉到两种颜色哪怕只有再微小的差异，应该选择“否”"}</b></li>
        <li className="list-item">请您认真地对待每一次选择,我们设计了相应的检验算法来检验您的认真程度，非常感谢您的参与！请在下面输入您的姓名，并点击确定开始实验！</li>
      </ul>
      <div style={{margin:"5px"}}>请输入您的姓名</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <div className="confirm" onClick={start}>
        确定
      </div>
    </div>
  )
}

export default Home
