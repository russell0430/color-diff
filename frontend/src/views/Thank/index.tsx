import React from 'react'

function Thank() {
    return (
      <div
        className="thank"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        <div style={{ padding: "100px 200px", background: "bisque" }}>恭喜您已经完成所有的实验，感谢您的参与！</div>
      </div>
    )
  }

export default Thank