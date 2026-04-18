import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';

import CreateProject from './pages/CreateProject';
import Project from './pages/Project';
import AllProjects from './pages/AllProjects';
import ClientLayout from './features/client/ClientLayout';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import FreelancerLayout from './features/freelancer/FreelancerLayout';
import FreelancerDashboard from './features/freelancer/FreelancerDashboardLayout';
import SubmittedProjects from './pages/SubmittedProjects';
import ProjectFr from './pages/ProjectFr';
import FreelancerProposals from './pages/FreelancerProposals';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import ProtectedRoute from './ui/ProtectedRoute';
import NotAccess from './pages/NotAccess';
import AdminLayout from './features/admin/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminProjects from './pages/AdminProjects';
import ManageCategories from './pages/ManageCategories';
import ManageUsers from './pages/ManageUsers';
import Profile from './pages/Profile';
import ClientProjects from './pages/ClientProjects';
import AdminProposals from './pages/AdminProposals';

const queryClient = new QueryClient();

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <Theme
      appearance={isDarkMode ? 'dark' : 'light'}
      hasBackground={false}
      accentColor='iris'
      grayColor='slate'
      radius='large'
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />

        <Routes>
          {/* ------------------------------------------------------------- */}
          {/* ------------------------ Home Layout ------------------------ */}
          {/* ------------------------------------------------------------- */}

          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/not-access' element={<NotAccess />} />

          {/* ------------------------------------------------------------- */}
          {/* ------------------------ Admin Layout ----------------------- */}
          {/* ------------------------------------------------------------- */}

          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='dashboard/:id' element={<Project />} />

            <Route path='projects' element={<AllProjects />} />
            <Route path='projects/:id' element={<ProjectFr />} />

            <Route path='admin-projects' element={<AdminProjects />} />
            <Route path='admin-projects/:id' element={<Project />} />

            <Route path='admin-proposals' element={<AdminProposals />} />

            <Route path='create-project' element={<CreateProject />} />

            <Route path='manage-categories' element={<ManageCategories />} />
            <Route
              path='manage-categories/:id'
              element={<ManageCategories />}
            />

            <Route path='manage-users' element={<ManageUsers />} />

            <Route path='profile' element={<Profile />} />
          </Route>

          {/* ------------------------------------------------------------- */}
          {/* ----------------------- Client Layout ----------------------- */}
          {/* ------------------------------------------------------------- */}

          <Route
            path='/client'
            element={
              <ProtectedRoute>
                <ClientLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<ClientDashboard />} />
            <Route path='dashboard/:id' element={<Project />} />

            <Route path='projects' element={<AllProjects />} />
            <Route path='projects/:id' element={<Project />} />

            <Route path='client-projects' element={<ClientProjects />} />
            <Route path='client-projects/:id' element={<Project />} />

            <Route path='create-project' element={<CreateProject />} />

            <Route path='profile' element={<Profile />} />
          </Route>

          {/* ------------------------------------------------------------- */}
          {/* --------------------- Freelancer Layout --------------------- */}
          {/* ------------------------------------------------------------- */}

          <Route
            path='/freelancer'
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={'dashboard'} replace />} />
            <Route path='dashboard' element={<FreelancerDashboard />} />
            <Route path='dashboard/:id' element={<ProjectFr />} />

            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='projects/:id' element={<ProjectFr />} />

            <Route path='proposals' element={<FreelancerProposals />} />

            <Route path='profile' element={<Profile />} />
          </Route>

          {/* ------------------------------------------------------------- */}
          {/* ------------------- Authentication Layout ------------------- */}
          {/* ------------------------------------------------------------- */}

          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
        </Routes>
      </QueryClientProvider>
    </Theme>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}
