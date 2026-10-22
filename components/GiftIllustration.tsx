export default function GiftIllustration() {
  return (
    <div className="gift-art" aria-hidden="true">
      <div className="art-caption">
        Good things
        <br />
        start with giving.
      </div>
      <svg viewBox="0 0 420 300" fill="none">
        <ellipse cx="210" cy="265" rx="133" ry="13" fill="#d2d3c7" />
        <path
          d="M103 154h214v102H103z"
          fill="#bdda7b"
          stroke="#205744"
          strokeWidth="2"
        />
        <path d="M103 154h214v30H103z" fill="#a9c96a" />
        <path
          d="M92 133h236v36H92z"
          fill="#d1e7a1"
          stroke="#205744"
          strokeWidth="2"
        />
        <path d="M194 133h32v123h-32z" fill="#205744" />
        <path
          d="M208 132c-88-12-103-66-66-67 28-1 51 33 66 67Z"
          fill="#d4c3ef"
          stroke="#205744"
          strokeWidth="2"
        />
        <path
          d="M211 132c86-13 102-65 65-67-27-2-52 34-65 67Z"
          fill="#d4c3ef"
          stroke="#205744"
          strokeWidth="2"
        />
        <path d="M212 130c5-50 4-64 14-94" stroke="#205744" strokeWidth="3" />
        <path
          d="M217 86c-37-1-45-19-44-38 28 0 43 12 44 38ZM223 62c29 0 43-18 41-38-28 1-43 15-41 38Z"
          fill="#205744"
        />
        <path
          d="m307 191 28 30-32 27-28-31 32-26Z"
          fill="#fff"
          stroke="#205744"
          strokeWidth="2"
        />
        <circle cx="303" cy="204" r="3" fill="#205744" />
        <path d="m307 192-49-28" stroke="#205744" strokeWidth="2" />
        <path
          d="m56 102 9-15M350 72l12 8M349 159h16M65 205l-9 11"
          stroke="#205744"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="84" cy="63" r="5" fill="#b497d4" />
        <circle cx="353" cy="218" r="6" fill="#b497d4" />
      </svg>
      <div className="art-note">Less stuff. More meaning.</div>
    </div>
  );
}
