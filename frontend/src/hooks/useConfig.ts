import { useState, useRef, useCallback } from "react"
import { getImgList } from "../utils/request"
const useConfigs = () => {
  // 获取当前填写情况
  const filledArrayRef = useRef<boolean[]>([])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgList, setImgList] = useState<string[]>([])
  const initilize = useCallback(
    async (exp: 1 | 2 | 3): Promise<boolean> => {
      try {
        const resp = await getImgList({ exp })
        if (resp.status !== 200) {
          return false
        }
        setImgList(resp.data)
        filledArrayRef.current = Array(resp.data.length).fill(false)

        setCurrentIndex(0)
        console.log("initilize")
        return true
      } catch (err) {
        console.log("something wrong happened", err)
        return false
      }
    },
    [setImgList, filledArrayRef]
  )

  const next = useCallback(
    (res: boolean): boolean => {
      console.log(currentIndex)
      filledArrayRef.current[currentIndex] = res
      if (currentIndex + 1 >= imgList.length) {
        console.log("finished")
        setCurrentIndex((v) => v + 1)
        return false
      } else {
        setCurrentIndex((v) => v + 1)
        return true
      }
    },
    [imgList, filledArrayRef, currentIndex]
  )

  return {
    currentIndex,
    imgList,
    filledArray: filledArrayRef.current,
    initilize,
    next,
  }
}

export default useConfigs
