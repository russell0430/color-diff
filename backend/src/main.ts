import "./env"
import express from "express"
import cors from "cors"
import apiRouter from "./routers/api"
const app = express()

// prefix of request url /img/1.jpg
const imgPrefix = "/img"

let imgUrlPrefix = "public"
if (process.env.IMG_URL_PREFIX) {
  imgUrlPrefix = process.env.IMG_URL_PREFIX
} else {
  console.warn(`no specific img resource found, using ${imgUrlPrefix}`)
}

// get port
let port = 5174
if (Number(process.env.BACKEND_PORT)) {
  port = Number(process.env.BACKEND_PORT)
} else {
  console.warn(`no specific port found, using ${port}`)
}

// usage of concating public url
// let domain = "/"
// if (process.env.BACKEND_DOMAIN) {
//   domain = process.env.BACKEND_DOMAIN
// } else {
//   console.warn(`no specific domain founding, using ${domain}`)
// }

app.use(imgPrefix, express.static(imgUrlPrefix))
app.use(cors())
app.use("/api", apiRouter)
app.get("/", (req, res) => {
  res.send("hello")
})
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
