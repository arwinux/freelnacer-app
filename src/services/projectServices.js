import { http } from "./httpService";

export default function getClientProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
