export const clientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_PROJECT_API_VERSION as string,
  useCdn: false,
};