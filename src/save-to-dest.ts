import fs from 'fs'

export const saveToDest = (content: string | object, dest: string, {
  ext = 'json'
}: { ext?: 'json' }) => {
  return new Promise<void>((resolve, reject) => {
    if (ext === 'json') {
      content = JSON.stringify(content, null, 2)
    }

    return fs.writeFile(`${dest}.${ext}`, content as string, (err) => {
      if (err) reject(err)
      resolve()
    })
  })
}
