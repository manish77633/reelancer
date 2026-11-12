import StudioHome from "@/components/StudioHome";
import { readFileSync } from "node:fs";
import path from "node:path";

export default function HomePage() {
  // Embed this small image so the toolkit never depends on a second network request.
  const toolkitImage = `data:image/webp;base64,${readFileSync(path.join(process.cwd(), "public/images/editorial/toolkit.webp")).toString("base64")}`;
  return <StudioHome toolkitImage={toolkitImage} />;
}
