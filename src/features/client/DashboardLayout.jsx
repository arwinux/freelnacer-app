import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from './ClientStatics';
import ClientQuickAction from './ClientQuickAction';
import RecentProjects from '../../ui/RecentProjects';
import RecentProjectsProposals from '../../ui/RecentProjectsProposals';

function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <ClientStatics />
      <ClientQuickAction />
      <RecentProjectsProposals />
    </div>
  );
}

export default DashboardLayout;
