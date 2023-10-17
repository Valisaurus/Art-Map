"use client"
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { createClient } from "next-sanity";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  title: "Art-Map",
  apiVersion: "2023-10-10",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-10-10', 
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN// Only if you want to update content with the client
})

export { config, client };
