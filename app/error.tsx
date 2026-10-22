"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="shell not-found">
      <h1>That page couldn’t load.</h1>
      <p>
        Please try again. Your unsaved message may need to be rewritten if you
        reload.
      </p>
      <button className="button" onClick={reset}>
        Try again
      </button>
      <a className="text-link" href="/">
        Return to the guide
      </a>
    </div>
  );
}
