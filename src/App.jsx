import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
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
