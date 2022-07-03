import * as z from 'zod'
import * as dateFns from 'date-fns'

export const commonParsers = {
  date: z.string().transform((val, ctx) => {
    const parsed = dateFns.parse(val, 'd-M-yyyy', new Date())

    if (!dateFns.isValid(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'The date format must be d-M-yyyy'
      })
    }

    return parsed
  })
}
