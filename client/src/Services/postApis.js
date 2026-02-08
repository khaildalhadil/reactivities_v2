import axios from "axios";

// get All
export async function getAllPost() {
  const res = await fetch("https://localhost:7291/api/post");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
  
}

// add one
export async function addPost(post) {
  const res = await axios.post("https://localhost:7291/api/post", post);
  if (res.status != 201) throw new Error("Network response was not ok");
  return res.data;
}

export async function deletePost(id) {
  console.log(id);
  const res = await axios.delete(`https://localhost:7291/api/post/${id}`);
  console.log(res);
  if (res.status != 200) throw new Error("Network response was not ok");
  return res.data;
}