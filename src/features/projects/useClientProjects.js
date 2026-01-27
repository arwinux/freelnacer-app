import { useQuery } from "@tanstack/react-query";
import { getClientProjectsApi } from "../../services/projectService";

export default function useClientProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["client-projects"],
    queryFn: getClientProjectsApi,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
