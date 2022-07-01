import fs from 'fs'

export const saveToDest = (content: string, dest: string, {
  ext = 'json'
}: { ext?: 'json' }) => {
  return new Promise<void>((resolve, reject) => {
    if (ext === 'json') {
      content = JSON.stringify(content, null, 2)
    }

    return fs.writeFile(`${dest}.${ext}`, content, (err) => {
      if (err) reject(err)
    })
  })
}
