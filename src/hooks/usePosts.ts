import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePosts = () => {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10"
    );
    return data;
  });
};
