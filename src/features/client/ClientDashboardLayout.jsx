import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from './ClientStatics';
import ClientQuickAction from './ClientQuickAction';
import RecentProjects from '../../ui/RecentProjects';
import RecentProjectsProposals from '../../ui/RecentProjectsProposals';
import useClientProjects from '../projects/useClientProjects';
import { FiPlus } from 'react-icons/fi';

function ClientDashboardLayout() {
  const { isLoading, projects } = useClientProjects();
  return (
    <div>
      <DashboardHeader
        slogen='🚀 Ready to find the perfect talent for your project?'
        controlBtnText='Create New Project'
        controlBtnIcon={<FiPlus />}
        controlBtnLinkTo='/client/create-project'
      />
      <ClientStatics projects={projects} isLoading={isLoading} />
      <ClientQuickAction projects={projects} />
      <RecentProjectsProposals projects={projects} isLoading={isLoading} />
    </div>
  );
}

export default ClientDashboardLayout;
