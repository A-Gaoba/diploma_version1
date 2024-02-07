import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "http://localhost:5000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getStudents = async () => {
  return (await axiosInstance.get("students")).data.data;
};

export const useGetStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
};
