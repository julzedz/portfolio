import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas';
import { visionTool } from '@sanity/vision';
const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string,
  title: 'Portfolio',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION as string,
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});
export default config;