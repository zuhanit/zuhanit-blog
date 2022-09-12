import React from "react";
import { MouseEvent, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { CSSTransition } from "react-transition-group";
import SearchBox from "./SearchBox";

const SearchButton = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button
        className="flex ml-auto w-8"
        onClick={() => setCollapsed(!collapsed)}
      >
        <VscSearch />
      </button>
      <CSSTransition
        in={collapsed}
        timeout={200}
        classNames="searchbox"
        unmountOnExit
      >
        <SearchBox onClick={(ev) => ev.stopPropagation()} />
      </CSSTransition>
    </>
  );
};

export default SearchButton;
