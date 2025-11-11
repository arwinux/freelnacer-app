import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ClientDashboard from './pages/ClientDashboard';
import ClientProjects from './pages/Projects';
import CreateProject from './features/projects/CreateProject';
import Project from './pages/Project';
import AllProjects from './pages/AllProjects';
import SingleClientProject from "./ui/SingleClientProject";
import SingleProject from "./ui/SingleProject";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/client" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<ClientDashboard />} />

          <Route path="projects" element={<AllProjects />} />
          <Route path="projects/:id" element={<Project />} />

          <Route path="client-projects" element={<ClientProjects />} />
          <Route path="client-projects/:id" element={<Project />} />

          <Route path="create-project" element={<CreateProject />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </QueryClientProvider>
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
