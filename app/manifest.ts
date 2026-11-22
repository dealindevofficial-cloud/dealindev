import type { MetadataRoute } from "next";
import { siteBrand } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteBrand.name,
    short_name: "dealindev",
    description: siteBrand.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#04120d",
    theme_color: "#04120d",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
