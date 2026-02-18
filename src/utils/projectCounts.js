export default function projectCounts(projects = []) {
  let ALL = projects.length;
  let OPEN = projects.filter((p) => p.status === 'OPEN').length;
  let CLOSED = projects.filter((p) => p.status === 'CLOSED').length;

  return { ALL, OPEN, CLOSED };
}
