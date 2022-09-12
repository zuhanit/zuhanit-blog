import { useEffect } from "react";

const useUtterances = (nodeID: string) => {
  useEffect(() => {
    const scriptParentNode = document.getElementById(nodeID);
    if (!scriptParentNode) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "zuhanit/zuhanit-blog-utterances");
    script.setAttribute("theme", "github-light");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("crossorigin", "anonymous");

    scriptParentNode.appendChild(script);

    return () => {
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node);
    };
  }, [nodeID]);
};

export default useUtterances;
