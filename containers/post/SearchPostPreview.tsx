import { useRouter } from "next/router";
import { DbPostInterface } from "../../firebase/database";
import { PostInterface } from "../../firebase/database/post";

interface SearchPostPreviewProps extends DbPostInterface {}
const SearchPostPreview = ({
  id,
  title,
  body,
  date,
  plain,
}: SearchPostPreviewProps) => {
  const router = useRouter();
  return (
    <div
      className="p-4 cursor-pointer hover:bg-slate-200 transition"
      onClick={() => router.push("posts/" + id)}
    >
      <dl>
        <dt className="sr-only" />
        <dd className="text-gray-500">{date}</dd>
      </dl>
      <span className="text-blue-500">{title}</span>
      <div className="line-clamp-3">{plain}</div>
    </div>
  );
};

export default SearchPostPreview;
