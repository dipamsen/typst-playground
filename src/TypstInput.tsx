import CodeMirror from "@uiw/react-codemirror";
import { useStoreActions, useStoreState } from "./code";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import { useEffect } from "react";
// import { tags } from "@lezer/highlight";

const vscode = vscodeDarkInit({
  // styles: [{ color: "#b2b2b2", tag: tags.name }],
});
function TypstInput() {
  const code = useStoreState((state) => state.code);
  const setCode = useStoreActions((actions) => actions.setCode);

  useEffect(() => {
    // get from local storage
    const code = localStorage.getItem("typst-code");
    if (code) {
      setCode(code);
    }
  }, []);

  useEffect(() => {
    // save to local storage
    localStorage.setItem("typst-code", code);
  }, [code]);

  return (
    <CodeMirror
      value={code}
      theme={vscode}
      height="300px"
      onChange={(val) => setCode(val)}
    />
  );
}

export default TypstInput;
