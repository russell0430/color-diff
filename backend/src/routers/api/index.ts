import express, { Router } from "express"
import { getTestImgList, writeCsv } from "../../utils"
import { getImgList, mockGetImgList } from "../../utils"
const imgListRouter = Router()

imgListRouter.get("/:group", (req, res, next) => {
  if (!["1", "2", "3", "test"].includes(req.params.group)) {
    res.status(400).end()
    return
  }
  if (req.params.group === "test") {
    res.status(200).json({ status: 200, data: getTestImgList() }).end()
    return
  }
  const imgList = mockGetImgList(Number(req.params.group) as 1 | 2 | 3)
  res.status(200).json({ status: 200, data: imgList }).end()
})
// imgListRouter.get("/test", (req, res) => {
//   res
//     .status(200)
//     .json({ status: 200, data: ["test1", "test2"] })
//     .end()
// })

const router = Router()
router.use(express.json())

router.use("/imglist", imgListRouter)

router.post("/submit", (req, response) => {
  console.log(req.body)
  writeCsv(req.body).then((res) => {
    if (res) {
      response.status(200).json({ data: { success: true } })
    } else {
      response.status(400).json({ data: { success: false } })
    }
    response.end()
  })
})

export default router
