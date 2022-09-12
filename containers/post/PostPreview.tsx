import { VscChevronRight } from "react-icons/vsc";
import { useRouter } from "next/router";
import { DbPostInterface } from "../../firebase/database";

interface PostProps extends DbPostInterface {}

const PostPreview = ({ id, title, plain, date }: PostProps) => {
  const router = useRouter();
  const onClickReadMore = () => router.push("posts/" + id);
  return (
    <article className="my-4" id={id}>
      <div className="px-4">
        <dl>
          <dt className="sr-only"></dt>
          <dd className="text-gray-500">{date}</dd>
        </dl>
        <h3 className="py-1 pr-5 font-bold">{title}</h3>
        <p className="py-1 line text-ellipsis line-clamp-2">{plain}</p>
        <span
          className="flex items-center py-1 text-blue-500 cursor-pointer"
          onClick={onClickReadMore}
        >
          자세히 <VscChevronRight />
        </span>
      </div>
    </article>
  );
};

export default PostPreview;
