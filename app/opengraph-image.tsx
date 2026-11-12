import { ImageResponse } from "next/og";

export const alt = "Halim Choukani — Software Engineer & Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#050810",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,245,196,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#00f5c4",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>&lt;halim.choukani /&gt;</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(0,245,196,0.3)",
              color: "#00f5c4",
              fontSize: 16,
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#00f5c4",
              }}
            />
            Available for opportunities
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Halim Choukani
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#00f5c4",
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer &amp; Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            Building robust backend APIs and modern reactive frontends with Next.js, React, Spring Boot &amp; TypeScript.
          </div>
        </div>

        {/* Footer Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {["React / Next.js", "Spring Boot", "TypeScript", "REST & WebSockets", "Docker"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.03)",
                fontSize: 16,
                color: "#cbd5e1",
                fontFamily: "monospace",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
