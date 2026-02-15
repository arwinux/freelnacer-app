export default function filteredProjects(projects=[], projectsStatus) {
  const allProjects = [...projects];
  const openProjects = [...projects].filter((p) => p.status === 'OPEN');
  const closedProjects = [...projects].filter((p) => p.status === 'CLOSED');

  if (projectsStatus === 'Open') return openProjects;
  else if (projectsStatus === 'Closed') return closedProjects;
  else return allProjects;
}
