import DataService from "../../firebase/database/index";
import { GetServerSideProps } from "next";
import Post from "../../containers/post/Post";
import MainHeader from "../../containers/header/MainHeader";
import { PostInterface } from "../../firebase/database/post";
import Comment from "../../containers/Comment";

interface PostPageProps {
  post: PostInterface;
}

const PostPage = ({ post: ServerPostData }: PostPageProps) => {
  return (
    <div>
      <MainHeader />
      <div className="p-4 mx-auto max-w-4xl">
        <Post
          id={ServerPostData.id}
          body={ServerPostData.body}
          date={ServerPostData.date}
          title={ServerPostData.title}
          tags={ServerPostData.tags}
        />
        <Comment />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pid = ctx.params?.pid as string;
  const postData = await DataService.getPost(pid);

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postData,
    },
  };
};

export default PostPage;
