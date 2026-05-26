import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  // Для GitHub Pages base автоматически станет /имя-репозитория/.
  // Локально остается /, поэтому npm run dev и npm run preview работают нормально.
  base: repositoryName ? `/${repositoryName}/` : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
