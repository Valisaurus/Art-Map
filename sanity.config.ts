"use client";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { createClient } from "next-sanity";
import { visionTool } from "@sanity/vision";
const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  title: "Art-Map",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_PUBLIC_SANITY_NEW_API_TOKEN,
  basePath: "/admin/sanity-studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-10-10",
  token: process.env.NEXT_PUBLIC_SANITY_NEW_API_TOKEN, // Only if you want to update content with the client
});

export { config, client };
