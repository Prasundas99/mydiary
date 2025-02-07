import { atom } from "jotai";

// Initial dummy posts
export const postsAtom = atom([
  {
    title: "First Post",
    desc: "This is the first post description.",
    createdOn: new Date().toISOString(),
  },
  {
    title: "Second Post",
    desc: "Here's another post with some details.",
    createdOn: new Date().toISOString(),
  },
]);
