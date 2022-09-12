const BlogHeader = () => {
  return (
    <header className="px-4 my-20">
      <h1 className="font-bold text-4xl mb-4">Zuhanit</h1>
      <p className="text-lg mb-4">
        웹 프론트엔드와 스타크래프트 맵 제작에 관심있는 블로그.
      </p>
      <input
        className="w-full my-4 p-4 shadow"
        placeholder="구독할 이메일 주소"
      ></input>
      <button className="w-full py-4 bg-sky-500 shadow text-white font-bold rounded-lg">
        이메일로 소식 받기
      </button>
    </header>
  );
};

export default BlogHeader;
