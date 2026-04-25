"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from "@components/omniedu.module.css";
import { signInSchema, type SignInInput } from "@lib/auth/forms";

export function SignInForm() {
	const [submitted, setSubmitted] = useState<SignInInput | null>(null);
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
	} = useForm<SignInInput>({
		defaultValues: {
			email: "admin@omniedu.dev",
			password: "omniedu-demo",
			tenant: "demo",
		},
		resolver: zodResolver(signInSchema),
	});

	return (
		<form
			className={styles.formCard}
			onSubmit={handleSubmit(async (values) => {
				await new Promise((resolve) => setTimeout(resolve, 300));
				setSubmitted(values);
			})}
		>
			<div className={styles.formGrid}>
				<label className={styles.field}>
					<span>Email</span>
					<input {...register("email")} type="email" />
					{errors.email ? (
						<small className={styles.fieldError}>{errors.email.message}</small>
					) : null}
				</label>
				<label className={styles.field}>
					<span>Password</span>
					<input {...register("password")} type="password" />
					{errors.password ? (
						<small className={styles.fieldError}>
							{errors.password.message}
						</small>
					) : null}
				</label>
				<label className={styles.field}>
					<span>Tenant</span>
					<input {...register("tenant")} />
					{errors.tenant ? (
						<small className={styles.fieldError}>{errors.tenant.message}</small>
					) : null}
				</label>
			</div>
			<button className={styles.button} type="submit" disabled={isSubmitting}>
				{isSubmitting ? "Authenticating..." : "Enter OmniEdu"}
			</button>
			{submitted ? (
				<div className={styles.inlineNotice}>
					Demo sign-in validated for tenant <strong>{submitted.tenant}</strong>.
					Wire this form to your JWT/session route when backend auth is ready.
				</div>
			) : null}
		</form>
	);
}
