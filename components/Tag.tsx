interface TagProps {
  value: string;
}
const Tag = ({ value }: TagProps) => {
  return <div className="py-1 px-2 bg-emerald-100 rounded-xl">{value}</div>;
};

export default Tag;
