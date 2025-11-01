import { useQuery } from "@tanstack/react-query";
import getClientProjects from "../../services/projectServices";

export default function useClientProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["client-projects"],
    queryFn: getClientProjects,
  });

  const { projects } = data || {};
  return { isPending, projects };
}
