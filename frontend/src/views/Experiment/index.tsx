import React, { useCallback, useEffect, useState } from "react"
import useConfigs from "../../hooks/useConfig"
import Selector from "../../components/Selector"
import { useUser } from "../../utils/useUser"
import { submitData as submit } from "../../utils/request"
import { useNavigate } from "react-router-dom"
import "./index.scss"
function Experiment() {
  const navigate = useNavigate()
  const { experiment, name } = useUser()
  if (experiment === null || name === null)
    return (
      <div onClick={() => navigate("/")}> 未初始化用户信息,请退回首页 </div>
    )
  const { currentIndex, imgList, next, initilize, filledArray } = useConfigs()
  const currentImgUrl = imgList[currentIndex]
  const [isFinished, setIsFinished] = useState(false)

  const onSelect = useCallback(
    (res: boolean) => {
      const result = next(res)
      if (!result) {
        setIsFinished(true)
      }
    },
    [next, setIsFinished]
  )
  useEffect(() => {
    initilize(experiment)
  }, [initilize, experiment])
  const submitData = useCallback(() => {
    if (imgList.length === 0 || imgList.length !== filledArray.length) {
      // console.log(imgList, filledArray)
      alert("something bad happen, please enter again")
      navigate("/")
      return
    }
    submit(
      name,
      experiment,
      imgList.map((val, idx) => ({
        url: val,
        choice: filledArray[idx] ? 1 : 0,
      }))
    ).then((res) => {
      if (res.status === 200) {
        alert("data submit")
        navigate("/thank")
      }
    })
  }, [imgList, filledArray, name, experiment])
  const getTypeRemaining = () => {
    if (currentIndex < 36) {
      return 36 - currentIndex
    } else if (currentIndex < 108) {
      return 108 - currentIndex
    } else {
      return 144 - currentIndex
    }
  }

  return (
    <div
      className="experiment"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div className="hint">
        当前已填{currentIndex},当前类型剩余{getTypeRemaining()},总共剩余
        {imgList.length - currentIndex}
        {currentImgUrl}
      </div>
      {currentImgUrl ? (
        <div className="chart">
          <img src={currentImgUrl} alt="" />
        </div>
      ) : null}
      {isFinished ? (
        <div className="submit-btn" onClick={submitData}>
          submit
        </div>
      ) : (
        <Selector onSelect={onSelect}></Selector>
      )}
    </div>
  )
}

export default Experiment
