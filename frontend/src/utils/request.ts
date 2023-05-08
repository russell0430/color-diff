const URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5174"
export async function getImgList({
  test = false,
  exp = 1,
}: {
  test?: boolean
  exp?: 1 | 2 | 3
}): Promise<{ data: string[]; status: number }> {
  if (test) {
    return (await fetch(`${URL}/api/imglist/test`)).json()
  } else {
    return (await fetch(`${URL}/api/imglist/${exp}`)).json()
  }
}

export async function submitData(
  name: string,
  exp: 1 | 2 | 3,
  data: { url: string; choice: 0 | 1 }[]
) {
  return await fetch(`${URL}/api/submit`, {
    method: "post",
    body: JSON.stringify({ name, exp, result: data }),
    headers: { "Content-Type": "application/json" },
  })
}
