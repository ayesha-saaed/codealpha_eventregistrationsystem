import { z } from "zod";

export const registrationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  event: z.string().min(1, "Please select an event"),
});
