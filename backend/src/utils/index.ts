import { createObjectCsvStringifier as createCsvStringifier } from "csv-writer"
import fs from "fs"
import path from "path"

// TODO : need to fix this relative path
let resultFolder = "./result"
if (process.env.RESULT_FOLDER) {
  resultFolder = process.env.RESULT_FOLDER
} else {
  console.warn(`no specific result folder found, using ${resultFolder}`)
}

const resolve = (filename: string) => {
  return path.resolve(__dirname, "../../", resultFolder, filename)
}
const regex = /\/(\d{1,3})\.png|jpg$/
// const res = regex.exec("http://localhost:5174/img/l/2.png")
function processD(
  data: { url: string; choice: 0 | 1 }[]
): { url: string; choice: 0 | 1 }[] {
  return data.map((d) => ({ ...d, url: regex.exec(d.url)?.[1] as string }))
}
export async function writeCsv(options: {
  name: string
  result: { url: string; choice: 0 | 1 }[]
  exp: 1 | 2 | 3
}) {
  let filename = `${options.exp}/${options.name}.csv`
  if (fs.existsSync(resolve(filename))) {
    let index = 0
    do {
      filename = `${options.exp}/${options.name}_${index++}.csv`
    } while (fs.existsSync(resolve(filename)))
  }

  try {
    const stringifier = createCsvStringifier({
      header: [
        { id: "url", title: "pic" },
        { id: "choice", title: "Choice" },
      ],
    })
    const processResult = processD(options.result).sort(
      (a, b) => Number(a.url) - Number(b.url)
    )
    const result = stringifier.stringifyRecords(processResult)
    filename = resolve(filename)
    // filename = "F:/Code/Proj/color-diff/backend/result/1/zs.csv"
    fs.writeFile(
      filename,
      stringifier.getHeaderString() + result,
      {},
      (err) => {
        console.log(err)
      }
    )
  } catch (err) {
    console.log(`fail to write csv ${filename},${err}`)
    return false
  }
  return true
}

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5)
}

let port = 5174
if (Number(process.env.PORT)) {
  port = Number(process.env.PORT)
} else {
  console.warn(`no specific port found, using ${port}`)
}

// usage of concating public url
let domain = "http://localhost"
if (process.env.DOMAIN) {
  domain = process.env.DOMAIN
} else {
  console.warn(`no specific domain founding, using ${domain}`)
}

const l_folderName = "/img/l"
const a_folderName = "/img/a"
const b_folderName = "/img/b"
const prefixArray = [l_folderName, a_folderName, b_folderName]
export function getTestImgList() {
  return [0, 1, 44, 45, 112, 113].map(
    (v) => `${domain}:${port}${l_folderName}/${v + 1}.png`
  )
}
export function getImgList(exp: 1 | 2 | 3) {
  const array = [
    ...shuffle(
      Array(36)
        .fill(0)
        .map((_, index) => index + 1)
    ),
    ...shuffle(
      Array(72)
        .fill(0)
        .map((_, index) => index + 37)
    ),
    ...shuffle(
      Array(36)
        .fill(0)
        .map((_, index) => index + 109)
    ),
  ]
  const prefix = prefixArray[exp - 1]
  return array.map((v) => `${domain}:${port}${prefix}/${v}.png`)
}

export function mockGetImgList(exp: 1 | 2 | 3) {
  const array = [
    ...shuffle(
      Array(2)
        .fill(0)
        .map((_, index) => index + 1)
    ),
    ...shuffle(
      Array(2)
        .fill(0)
        .map((_, index) => index + 37)
    ),
    ...shuffle(
      Array(2)
        .fill(0)
        .map((_, index) => index + 109)
    ),
  ]
  const prefix = prefixArray[exp - 1]
  return array.map((v) => `${domain}:${port}${prefix}/${v}.png`)
}
