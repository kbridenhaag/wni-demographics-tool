import fs from 'fs'

export const loadResource = (
  file: string
) => {
  return new Promise<string>((resolve, reject) => {
    return fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
