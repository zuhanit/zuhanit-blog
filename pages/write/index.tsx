import Editor from "../../containers/editor/Editor";
import MainHeader from "../../containers/header/MainHeader";

const WritePage = () => {
  return (
    <div>
      <MainHeader />
      <div className="p-4 max-w-4xl mx-auto">
        <Editor className="min-h-full grow" />
      </div>
    </div>
  );
};

export default WritePage;
