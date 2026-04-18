import { useLocation } from 'react-router-dom';

export default function useRole() {
  const { pathname } = useLocation();
  const role = pathname.split('/').at(1);
  return role;
}
