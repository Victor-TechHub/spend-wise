import { z } from "zod"

export const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "must contain at least 8 character(s)" })
})