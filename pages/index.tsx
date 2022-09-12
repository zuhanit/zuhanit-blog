import type { NextPage } from "next";
import MainFooter from "../containers/footer/MainFooter";
import BlogHeader from "../containers/header/BlogHeader";
import MainHeader from "../containers/header/MainHeader";
import PostList from "../containers/post/PostList";
import { RandomPost } from "../containers/post/PostPreview";

const Home: NextPage = () => {
  return (
    <div>
      <MainHeader />
      <main className="columns-1 w-full mx-auto max-w-5xl ">
        <BlogHeader />
        <PostList />
      </main>
      <MainFooter />
    </div>
  );
};

export default Home;
