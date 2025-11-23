import { http } from './httpService';

export function getAllProjectsApi() {
  return http.get('/project/list').then(({ data }) => data.data);
}

export function getClientProjectsApi() {
  return http.get('/project/owner-projects').then(({ data }) => data.data);
}

export function removeProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
