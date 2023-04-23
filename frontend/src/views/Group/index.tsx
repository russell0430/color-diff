import React from "react"
import { useUser } from "../../utils/useUser"
import { useNavigate } from "react-router-dom"
import "./index.scss"
function Group() {
  const navigate = useNavigate()
  const { setExperiment } = useUser()
  const chooseGroup = (idx: 1 | 2 | 3) => {
    setExperiment(idx)
    navigate("/experiment")
  }
  return (
    <div className="group">
      <div className="group-hint">please choose a set of experiment</div>
      <div className="group-list">
        {Array(3)
          .fill(0)
          .map((_, idx) => {
            return (
              <div
                key={idx}
                className="group-item"
                onClick={() => chooseGroup((idx + 1) as 1 | 2 | 3)}
              >
                实验{idx + 1}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Group
