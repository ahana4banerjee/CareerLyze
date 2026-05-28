/**
 * Validates existence of crucial configuration keys locally.
 */
export function checkClientEnv() {
  if (process.env.NODE_ENV === "production") return;

  const required = [
    "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  ];

  required.forEach((key) => {
    if (!process.env[key]) {
      console.warn(
        `[CareerLyze Dev Warning] Missing client configuration environment key: ${key}. Some authentication routes might fail to build.`
      );
    }
  });
}
