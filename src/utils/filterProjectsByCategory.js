export function filterProjectsByCategory(projects=[], categorySlug) {
  if (!categorySlug || categorySlug === 'All') return projects;

  return projects.filter(
    (project) => project?.category?.englishTitle === categorySlug,
  );
}
