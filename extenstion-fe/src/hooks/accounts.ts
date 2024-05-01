import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

export const useUserAccount = (userId: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user-account", userId],
    queryFn: async () => {
      const response = await fetch(BASE_URL + "/api/users/account/" + userId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("getting user id", userId);
      return response.json();
    },
    enabled: true,
  });
  return { data, error, isLoading };
};
