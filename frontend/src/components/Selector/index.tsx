import React from "react"
import "./index.scss"
function Selector({ onSelect }: { onSelect: (v: boolean) => void }) {
  return (
    <div className="selector">
      <div className="btn" onClick={() => onSelect(true)}>
        是
      </div>
      <div className="btn" onClick={() => onSelect(false)}>
        否
      </div>
    </div>
  )
}

export default Selector
