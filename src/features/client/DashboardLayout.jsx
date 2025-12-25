import { FaArrowLeft } from 'react-icons/fa6';
import { LuCircleCheckBig } from 'react-icons/lu';
import { FiTarget } from 'react-icons/fi';
import DashboardHeader from '../../ui/DashboardHeader';
import ClientStatics from './ClientStatics';

function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <ClientStatics />
    </div>
  );
}

export default DashboardLayout;
