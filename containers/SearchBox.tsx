import React, { ChangeEvent, useEffect, useState } from "react";
import DataService, { DbPostInterface } from "../firebase/database/index";
import PostPreview from "./post/PostPreview";
import SearchPostPreview from "./post/SearchPostPreview";

interface SearchBoxProps extends React.HTMLAttributes<HTMLDivElement> {}
const SearchBox = ({ onClick }: SearchBoxProps) => {
  const onClickEvent = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(ev);
    }
  };
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<
    DbPostInterface[] | undefined
  >([]);
  useEffect(() => {
    const doSearch = async () => {
      const results = await DataService.searchPost(searchValue);
      setSearchResult(results);
    };
    doSearch();
  }, [searchValue]);
  return (
    <div
      className="fixed left-0 top-search w-full bg-white origin-top border-b p-3 shadow-lg"
      onClick={onClickEvent}
    >
      <input
        type="search"
        placeholder="검색하기..."
        className="shadow w-full p-4 rounded"
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {searchResult && (
        <div className="">
          <p className="my-4 px-4">
            총 <strong>{searchResult.length}</strong>개의 게시글을 찾았습니다.
          </p>
          <ul>
            {searchResult.map((doc) => (
              <SearchPostPreview {...doc} key={doc.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
