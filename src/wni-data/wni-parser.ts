import * as z from 'zod'
import { commonParsers } from '../common/common-parsers'

export const wniParser = z.object({
  id: z.number(),
  date_of_birth: z.nullable(commonParsers.date),
  gemeente_code: z.nullable(z.string().superRefine((val, ctx) => {
    if (val.length !== 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'A gemeente code must consist of 6 characters'
      })
    }

    if (val.substring(0, 2).toLocaleLowerCase() !== 'gm') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'A gemeente code must start with "GM"'
      })
    }
  })),
  sex: z.nullable(z.union([z.literal('P'), z.literal('L')]))
})
