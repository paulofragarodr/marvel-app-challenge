import { QueryClient } from "@tanstack/react-query";
import axiosInstance from './axiosConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await axiosInstance.get(String(queryKey[0]));
        return data;
      },
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default queryClient;
