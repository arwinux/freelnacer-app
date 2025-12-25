import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from './ClientStatics';
import ClientQuickAction from './ClientQuickAction';

function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <ClientStatics />
      <ClientQuickAction />
    </div>
  );
}

export default DashboardLayout;
