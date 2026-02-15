export default function projectCounts(projects = []) {
  let All_Project = projects.length;
  let Open = projects.filter((p) => p.status === 'OPEN').length;
  let Closed = projects.filter((p) => p.status === 'CLOSED').length;

  return { All_Project, Open, Closed };
}
