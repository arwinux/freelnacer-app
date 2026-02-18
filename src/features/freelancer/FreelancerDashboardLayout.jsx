import React from 'react';
import DashboardHeader from '../../ui/DashboardHeader';
import { FiBriefcase } from 'react-icons/fi';
import FreelancerStatics from './FreelancerStatics';
import useProposals from '../proposals/useProposals';
import useAllProjects from '../projects/useAllProjects';
import FreelancerQuickAction from './FreelancerQuickAction';
import RecentProjectsProposals from '../../ui/RecentProjectsProposals';

function FreelancerDashboardLayout() {
  const { isLoading: proposalsIsLoading, proposals } = useProposals();
  const { isLoading: projectsIsLoading, projects } = useAllProjects();

  return (
    <div>
      <DashboardHeader
        slogen="✨ Let's find your next exciting opportunity today"
        controlBtnText='Browse Projects'
        controlBtnIcon={<FiBriefcase />}
        controlBtnLinkTo='/freelancer/projects'
      />
      <FreelancerStatics
        proposals={proposals}
        proposalsIsLoading={proposalsIsLoading}
        projects={projects}
        projectsIsLoading={projectsIsLoading}
      />

      <FreelancerQuickAction
        proposals={proposals}
        proposalsIsLoading={proposalsIsLoading}
        projects={projects}
        projectsIsLoading={projectsIsLoading}
      />
      <RecentProjectsProposals projects={projects} isLoading={projectsIsLoading} />
    </div>
  );
}

export default FreelancerDashboardLayout;
