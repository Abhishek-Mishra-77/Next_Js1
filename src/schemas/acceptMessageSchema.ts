import { z } from "zod";

export const accestMessageSchema = z.object({
  accestMessages: z.boolean(),
});
