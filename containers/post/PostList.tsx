import { setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import DataService from "../../firebase/database/index";
import { PostInterface } from "../../firebase/database/post";
import PostPreview from "./PostPreview";

const PostList = () => {
  const [docs, setDocs] = useState<PostInterface[]>([]);
  useEffect(() => {
    const getPostList = async () => {
      const docs = await DataService.getPosts();
      if (docs) {
        setDocs(docs);
      }
    };
    getPostList();
  }, []);
  return (
    <div className="m-auto">
      {docs.map((doc) => (
        <PostPreview {...doc} key={doc.id} />
      ))}
    </div>
  );
};

export default PostList;
