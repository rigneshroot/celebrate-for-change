export default function Icon({
  name,
  className = "",
}: {
  name:
    | "arrow"
    | "external"
    | "leaf"
    | "book"
    | "heart"
    | "child"
    | "bowl"
    | "gift"
    | "copy"
    | "check"
    | "globe";
  className?: string;
}) {
  const paths = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9M10 4H4v16h16v-6" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 3C9 2 3 6 4 13c1 6 9 7 13 2 3-4 3-8 3-12ZM4 21 15 10" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M12 5C8 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1Z" />
      </>
    ),
    heart: (
      <path d="M20 5c-3-3-7-1-8 1-2-3-6-4-9-1-5 5 3 12 9 16 6-4 13-11 8-16Z" />
    ),
    child: (
      <>
        <circle cx="12" cy="5" r="3" />
        <path d="m3 10 9 3 9-3M12 13v4m-5 5 5-5 5 5" />
      </>
    ),
    bowl: (
      <>
        <path d="M3 12h18c0 6-4 9-9 9s-9-3-9-9ZM8 3c-3 3 3 4 0 7M15 2c-3 3 3 4 0 7" />
      </>
    ),
    gift: (
      <>
        <path d="M3 10h18v4H3zM5 14v7h14v-7M12 10v11" />
        <path d="M12 10C0 10 6-2 12 10c6-12 12 0 0 0Z" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M15 8V3H3v13h5" />
      </>
    ),
    check: <path d="m4 12 5 5L20 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
