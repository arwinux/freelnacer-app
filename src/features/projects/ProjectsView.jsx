import useClientProjects from "./useClientProjects";

function ProjectsView() {
  const { isPending, projects } = useClientProjects();

  // Pending => Pending ...
  // projects.length = 0 => empty

  return <div>ProjectsView</div>;
}

export default ProjectsView;
