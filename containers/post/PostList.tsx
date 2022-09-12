import { useEffect, useState } from "react";
import DataService, { DbPostInterface } from "../../firebase/database/index";
import PostPreview from "./PostPreview";

const PostList = () => {
  const [docs, setDocs] = useState<DbPostInterface[]>([]);
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
