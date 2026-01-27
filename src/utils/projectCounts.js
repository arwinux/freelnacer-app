export default function projectCounts(projects = []) {
  let allproject = projects.length;
  let OPEN = projects.filter((p) => p.status === "OPEN").length;
  let CLOSED = projects.filter((p) => p.status === "CLOSED").length;

  return { allproject, OPEN, CLOSED };
}
