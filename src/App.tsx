import "./styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { usePosts } from "./hooks/usePosts";

const PostCollection = () => {
  const { data: posts } = usePosts();
  console.log({ posts });
  return <>PostCollection</>;
};

export default function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>React + Webpack5 + Jest</h1>
        <PostCollection />
      </QueryClientProvider>
    </div>
  );
}
