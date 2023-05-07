import React, { useCallback, useEffect, useRef, useState } from "react"
import { getImgList } from "../../utils/request"
import Selector from "../../components/Selector"
import { useNavigate } from "react-router-dom"
import "./index.scss"

function Test() {
  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(-1)
  const imgList = useRef<string[]>([])
  const onSelect = useCallback(() => {
    if (currentIndex + 1 < imgList.current.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      navigate("/start")
    }
  }, [currentIndex])
  useEffect(() => {
    getImgList({ test: true }).then((res) => {
      if (res.status === 200) {
        imgList.current = res.data
        console.log(imgList.current)
        setCurrentIndex(0)
      }
    })
  }, [])
  console.log(currentIndex)
  return (
    <div className="test">
      <div className="intro">您是否认为图中标记的两种颜色完全相同？</div>
      <div>
        <img src={imgList.current[currentIndex] || ""} alt="" />
      </div>
      <Selector onSelect={onSelect}></Selector>
    </div>
  )
}

export default Test
