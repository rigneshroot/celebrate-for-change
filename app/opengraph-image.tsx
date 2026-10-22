import { ImageResponse } from "next/og";
export const alt =
  "Celebrate for Change — find a cause, choose an organisation, give on its own website.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px",
        background: "#edf2e9",
        color: "#214e3c",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30 }}>Celebrate for Change.</div>
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: -4,
          lineHeight: 1.05,
          maxWidth: 950,
        }}
      >
        Your birthday. A little more good.
      </div>
      <div style={{ display: "flex", fontSize: 27 }}>
        Find an organisation. Give on its own website.
      </div>
      <div style={{ display: "flex", fontSize: 20 }}>
        A student-built guide. We don’t collect or process donations.
      </div>
    </div>,
    size,
  );
}
