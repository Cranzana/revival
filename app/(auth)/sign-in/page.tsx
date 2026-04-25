import styles from "@components/omniedu.module.css";
import { SignInForm } from "@components/auth/sign-in-form";

export default function SignInPage() {
	return (
		<main className={styles.authShell}>
			<section className={styles.authCard}>
				<div className={styles.heroCard}>
					<p className={styles.kicker}>Access OmniEdu</p>
					<h1>Sign in to your tenant workspace.</h1>
					<p>
						This screen is wired for React Hook Form and Zod validation so you
						can connect it to JWT issuance, refresh rotation, MFA, and audit
						logging next.
					</p>
				</div>
				<SignInForm />
			</section>
		</main>
	);
}
