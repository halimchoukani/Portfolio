import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Halim Choukani — Software Engineer",
    short_name: "Halim Choukani",
    description: "Portfolio of Halim Choukani, Software Engineer & Full-Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#050810",
    theme_color: "#00f5c4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

