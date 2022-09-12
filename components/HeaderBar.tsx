import GithubButton from "../containers/GithubButton";
import MenuButton from "../containers/MenuButton";
import SearchButton from "../containers/SearchButton";

const HeaderBar = () => {
  return (
    <div className="flex grow">
      <SearchButton />
      <GithubButton />

      <MenuButton />
    </div>
  );
};

export default HeaderBar;
