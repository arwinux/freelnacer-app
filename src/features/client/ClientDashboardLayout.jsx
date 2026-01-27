import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from './ClientStatics';
import ClientQuickAction from './ClientQuickAction';
import RecentProjects from '../../ui/RecentProjects';
import RecentProjectsProposals from '../../ui/RecentProjectsProposals';
import useClientProjects from '../projects/useClientProjects';

function ClientDashboardLayout() {
  const { isLoading, projects } = useClientProjects();
  return (
    <div>
      <DashboardHeader />
      <ClientStatics projects={projects} isLoading={isLoading} />
      <ClientQuickAction projects={projects} />
      <RecentProjectsProposals projects={projects} isLoading={isLoading} />
    </div>
  );
}

export default ClientDashboardLayout;
