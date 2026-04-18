import { http } from './httpService';

export function getCategoryApi() {
  return http.get('/category/list').then(({ data }) => data.data);
}

export function addCategoryApi(data) {
  return http.post(`/admin/category/add`, data).then(({ data }) => data.data);
}

export function deleteCategoryApi(id) {
  return http
    .delete(`admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}

export function updateCategoryApi(id, newCategory) {
  return http
    .patch(`admin/category/update/${id}`, newCategory)
    .then(({ data }) => data.data);
}

export function getOneCategoryApi() {
  return http.get(`category/${id}`).then(({ data }) => data.data);
}
