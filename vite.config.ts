import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        lib: {
            entry: "./src/index.tsx",
            name: "DevDanScheduleLib",
            fileName: "dev-dan-schedule-lib",
            formats: ["es","umd"],
        },

        rollupOptions: {
            external: ["react","react-dom",/^react\//,/^react-dom\//],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        cssCodeSplit: true,
    },


});