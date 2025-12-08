import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export async function getCourses() {
  const res = await API.get("/courses");
  return res.data;
}

export async function getCourse(id) {
  const res = await API.get(`/courses/${id}`);
  return res.data;
}

export async function createCourse(payload) {
  const res = await API.post("/courses", payload);
  return res.data;
}

export async function updateCourse(id, payload) {
  const res = await API.put(`/courses/${id}`, payload);
  return res.data;
}

export async function deleteCourse(id) {
  const res = await API.delete(`/courses/${id}`);
  return res.data;
}

export async function sendContact(payload) {
  const res = await API.post("/contacts", payload);
  return res.data;
}
