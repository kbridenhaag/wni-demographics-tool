import { extname } from 'path'
import { loadResource } from './load-resource'
import { parseCsv } from './parse-csv'

export const loadCsv = async (path: string) => {
  const ext = extname(path)

  if (ext !== '.csv') {
    throw new Error('The file must be a CSV file')
  }

  const file = await loadResource(path)

  return parseCsv(file)
}
