import { ImageResponse } from "next/og"
import { SITE_TITLE } from "./site-config"
import { profile, locationLabel } from "./data/profile"

export const alt = SITE_TITLE
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0f",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            fontWeight: 600,
            color: "#818cf8",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {locationLabel}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#f4f4f5",
            marginBottom: 16,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            color: "#818cf8",
            marginBottom: 40,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["React", "Next.js", "TypeScript"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 600,
                color: "#a1a1aa",
                border: "2px solid #27272a",
                borderRadius: 999,
                padding: "10px 26px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
