import { z } from "zod"

export const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "must contain at least 8 character(s)" }),
    username: z.string().max(10, { message: "must not exceed 10 character(s)" }).min(8, { message: "must contain at least 8 character(s)" })
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "must contain at least 8 character(s)" }),
})