import CodeMirror from "@uiw/react-codemirror";
import { useStoreActions, useStoreState } from "./code";
import { vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
// import { tags } from "@lezer/highlight";

const vscode = vscodeDarkInit({
  // styles: [{ color: "#b2b2b2", tag: tags.name }],
});
function TypstInput() {
  const code = useStoreState((state) => state.code);
  const setCode = useStoreActions((actions) => actions.setCode);

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
