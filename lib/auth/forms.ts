import { z } from "zod";

export const signInSchema = z.object({
	email: z.email(),
	password: z.string().min(8, "Use at least 8 characters."),
	tenant: z
		.string()
		.min(2, "Tenant slug is required.")
		.regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens."),
});

export type SignInInput = z.infer<typeof signInSchema>;
