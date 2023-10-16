import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "z4x2zjsw",
  dataset: "production",
  title: "Art-Map",
  apiVersion: "2023-10-10",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
