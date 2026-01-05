import useClientProjects from "./useClientProjects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import Empty from "../../ui/Empty";
import { PiPlusCircleBold } from "react-icons/pi";
import LoadingPage from "../../ui/LoadingPage";
import toDateShort from "../../utils/toDateShort";
import toNumbersWithComma from "../../utils/toNumbersWithComma";
import truncateText from "../../utils/truncateText";
import useNavigateCreateProject from "../../hooks/useNavigateCreateProject";
import filteredProjects from "../../utils/filterProjectsByStatus";
import AnimatedListItem from "../../ui/FrameMotion";
import { AnimatePresence } from "framer-motion";
import FilterProjects from "../../ui/FilterProjects";
import PageHeader from "../../ui/PageHeader";
import projectCounts from "../../utils/projectCounts";

function ProjectsViewGrid() {
  const { projects, isLoading } = useClientProjects();
  const [status, setStatus] = useState("allproject");

  const navigateCreateProject = useNavigateCreateProject();

  if (isLoading) return <LoadingPage />;
  if (!projects.length)
    return (
      <Empty
        resourceName="No projects found"
        iconbtn={<PiPlusCircleBold className="size-6" />}
        textbtn="Create your first Project"
        onClick={navigateCreateProject}
      />
    );

  return (
    <div className="flex flex-col mt-12">
      <PageHeader
        badge="Client Projects"
        title="My Projects"
        description={"Manage and track your projects"}
        color="red"
      />

      <FilterProjects
        status={status}
        setStatus={setStatus}
        counts={projectCounts(projects)}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 gap-x-8 gap-y-12">
        <AnimatePresence mode="sync">
          {filteredProjects(projects, status).map((project, index) => (
            <AnimatedListItem key={project._id}>
              <ProjectCard
                projectAll={project}
                key={project._id}
                id={project._id}
                number={index + 1}
                title={truncateText(project.title, 60)}
                status={project.status}
                description={truncateText(project.description, 100)}
                category={project.category.title}
                budget={toNumbersWithComma(project.budget)}
                deadline={toDateShort(project.deadline)}
                tags={project.tags}
                client={project.owner?.name || "-"}
              />
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectsViewGrid;
