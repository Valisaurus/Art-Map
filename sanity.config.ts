import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "z4x2zjsw",
  dataset: "production",
  title: "Art-Map",
  apiVersion: "2023-10-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
