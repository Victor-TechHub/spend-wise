import { z } from "zod"

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "must contain at least 8 character(s)" }),
    username: z.string().max(15, { message: "must not exceed 15 character(s)" }).min(5, { message: "must contain at least 5 character(s)" })
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "must contain at least 8 character(s)" }),
})