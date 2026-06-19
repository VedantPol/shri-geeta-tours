import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-sand-50 px-6 text-center">
      <div>
        <p className="kicker justify-center">Lost your way?</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,12vw,7rem)] font-semibold leading-none text-ink">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-muted">
          The page you&apos;re looking for has wandered off the map. Let&apos;s get you back to
          planning your next trip.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back home
        </Link>
      </div>
    </main>
  );
}
