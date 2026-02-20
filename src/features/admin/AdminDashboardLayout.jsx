import React from 'react';
import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from '../client/ClientStatics';
import ClientQuickAction from '../client/ClientQuickAction';
import RecentProjectsProposals from '../../ui/RecentProjectsProposals';
import { FiPlus } from 'react-icons/fi';
import useProposals from '../proposals/useProposals';
import useAllProjects from '../projects/useAllProjects';
import FreelancerStatics from '../freelancer/FreelancerStatics';
import FreelancerQuickAction from '../freelancer/FreelancerQuickAction';

function AdminDashboardLayout() {
  const { isLoading: proposalsIsLoading, proposals } = useProposals();
  const { isLoading: projectsIsLoading, projects } = useAllProjects();
  return (
    <div>
      <DashboardHeader
        slogen='🚀 Manage your platform with ease and efficiency'
        controlBtnText='Create New Project'
        controlBtnIcon={<FiPlus />}
        controlBtnLinkTo='/admin/create-project'
      />

      {/* <FreelancerStatics
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
      /> */}

      <RecentProjectsProposals
        projects={projects}
        isLoading={projectsIsLoading}
      />
    </div>
  );
}

export default AdminDashboardLayout;
