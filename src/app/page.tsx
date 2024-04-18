import { getSdk } from 'balena-sdk';

const balenaToken = process.env.BALENA_TOKEN;

export default async function Home() {

  if (!balenaToken) {
    throw new Error("BALENA_TOKEN env var is required");
  }

  const balena = getSdk({ apiUrl: "https://api.balena-cloud.com" });
  await balena.auth.loginWithToken(balenaToken);

  const device = await balena.models.device.get("17fabed");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test page</h1>
      <div>{device && JSON.stringify(device)}</div>
    </main>
  );
}
