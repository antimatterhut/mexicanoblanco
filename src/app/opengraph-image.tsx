import { ImageResponse } from "next/og";
import { business, seoCopy } from "@/content/site";

export const dynamic = "force-static";
export const alt = seoCopy.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og cannot read Tailwind tokens, so these mirror the palette in globals.css.
const colors = {
  background: "#b42318", // primary
  text: "#fff6e5", // light
  stripe: "#f5a524", // accent
};

export default function OpengraphImage() {
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
          background: colors.background,
          color: colors.text,
        }}
      >
        <div
          style={{
            width: 160,
            height: 12,
            background: colors.stripe,
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 120, fontWeight: 900, letterSpacing: -2 }}>
          {business.name}
        </div>
        <div
          style={{
            width: 160,
            height: 12,
            background: colors.stripe,
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
