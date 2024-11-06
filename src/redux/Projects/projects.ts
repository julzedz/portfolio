import { createSlice } from "@reduxjs/toolkit";
import type { Project } from "../../../types/Project";
// Define the initial state using that type
const initialState: Project = {
  _id: "",
  _createdAt: new Date(),
  title: "",
  slug: "",
  tagline: "",
  description: "",
  liveUrl: "",
  githubUrl: "",
  techStack: [],
  image: "",
  content: [],
};
export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});
export const {} = projectSlice.actions;
export default projectSlice.reducer;