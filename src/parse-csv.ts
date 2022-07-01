import Papa from 'papaparse'

export const parseCsv = (str: string) => {
  return Papa.parse(str, {
    skipEmptyLines: true,
    dynamicTyping: true,
    header: true
  })
}
