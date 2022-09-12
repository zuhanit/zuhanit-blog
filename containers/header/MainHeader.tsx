import HeaderBar from "../../components/HeaderBar";
import SearchButton from "../SearchButton";
import ThemeButton from "../../components/ThemeButton";
import { useRouter } from "next/router";

const MainHeader = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <header className="flex items-center px-8 border-b sticky w-full top-0 bg-white">
      <div className="logo flex py-4 w-8">
        <button className="" onClick={onClickLogo}>
          HAM
        </button>
      </div>
      <HeaderBar />
    </header>
  );
};

export default MainHeader;
