import { loadCsv } from '../load-csv'
import { wniParser } from './wni-parser'
import * as z from 'zod'
import { saveToDest } from '../save-to-dest'

export const parseWniData = async (path: string, dest?: string) => {
  const file = await loadCsv(path)

  const results = file.data.reduce((acc: { right: z.TypeOf<typeof wniParser>[], left: unknown[] }, current, idx) => {
    console.log(`Validating data... [${idx + 1}/${file.data.length}]`)

    const validated = wniParser.safeParse(current)

    if (validated.success) {
      acc.right.push(validated.data)

      return acc
    }

    acc.left.push({ ...current as object, context: validated.error.formErrors.fieldErrors })

    return acc
  }, { right: [], left: [] })

  console.log('Data validation complete.')
  console.log('Successfully parsed: ' + results.right.length)
  console.log('Unsuccessfully parsed: ' + results.left.length)

  if (dest) {
    await saveToDest(results.left, dest + '-error', { ext: 'json' })
    await saveToDest(results.right, dest + '-success', { ext: 'json' })
  }
}
