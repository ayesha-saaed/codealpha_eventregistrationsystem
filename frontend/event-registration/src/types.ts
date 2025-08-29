import { z } from "zod";
import { registrationSchema } from "@/lib/validation";

export type FormData = z.infer<typeof registrationSchema>;
