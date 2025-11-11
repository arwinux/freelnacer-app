import { useQuery } from "@tanstack/react-query";
import { getClientProjectsApi } from "../../services/projectServices";

export default function useClientProjects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["client-projects"],
    queryFn: getClientProjectsApi,
  });

  const { projects } = data || {};
  return { isLoading, projects, isError };
}
