import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';
import ClientProjects from './pages/ClientProjects';
import CreateProject from './pages/CreateProject';
import Project from './pages/Project';
import AllProjects from './pages/AllProjects';
import ClientLayout from './features/client/ClientLayout';
import { DarkModeProvider } from './context/DarkModeContext';
import FreelancerLayout from './features/freelancer/FreelancerLayout';
import FreelancerDashboard from './features/freelancer/FreelancerDashboardLayout';
import ClientProposals from './pages/ClientProposals';
import SubmittedProjects from './pages/SubmittedProjects';
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />

        <Routes>
          {/* ------------------------ Home Layout ------------------------ */}
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />

          {/* ----------------------- Client Layout ----------------------- */}
          <Route path='/client' element={<ClientLayout />}>
            <Route index element={<Navigate to='dashboard' replace />} />
            <Route path='dashboard' element={<ClientDashboard />} />
            <Route path='dashboard/:id' element={<Project />} />

            <Route path='projects' element={<AllProjects />} />
            <Route path='projects/:id' element={<Project />} />

            <Route path='client-projects' element={<ClientProjects />} />
            <Route path='client-projects/:id' element={<Project />} />

            <Route path='create-project' element={<CreateProject />} />
          </Route>

          {/* --------------------- Freelancer Layout --------------------- */}
          <Route path='/freelancer' element={<FreelancerLayout />}>
            <Route index element={<Navigate to={'dashboard'} replace />} />
            <Route path='dashboard' element={<FreelancerDashboard />} />
            <Route path='dashboard/:id' element={<Project />} />

            <Route path='projects' element={<SubmittedProjects />} />
            <Route path='projects/:id' element={<Project />} />

            <Route path='proposals' element={<ClientProposals />} />
          </Route>

          {/* ------------------- Authentication Layout ------------------- */}
          <Route path='/auth' element={<Auth />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// auth
// Tasks #1 : authenticate user via OTP : One-Time-Password
//? 1. form -> getOTP -> input + button => phoneNumber => send OTP
//? 2. form checkOTP -> request -> (otp, phoneNumber)

// request
//? 1. axios (useState, useEffect)
//? 2. useFetch (data, loading, error)
//? 3. react-query => redux alternative (remote states), fetch (get), mutate (post)
