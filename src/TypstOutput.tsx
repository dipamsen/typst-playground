import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import renderUrl from "@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm?url";
import compileUrl from "@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm?url";
import { $typst } from "@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs";
import { useStoreState } from "./code.ts";

$typst.setRendererInitOptions({
  getModule: () => new URL(renderUrl, import.meta.url),
});

$typst.setCompilerInitOptions({
  getModule: () => new URL(compileUrl, import.meta.url),
});

function TypstOutput() {
  const [svg, setSvg] = useState<string | null>(null);

  const input = useStoreState((state) => state.code);

  useEffect(() => {
    $typst.svg({ mainContent: input }).then((svg) => {
      svg = svg.replace(/<svg /, '<svg width="100%" height="100%" ');
      setSvg(svg);
    });
  }, [input]);

  return (
    <Box>
      <Typography variant="h4">Output</Typography>
      <Box
        sx={{
          border: "1px solid #c4c4c4",
          borderRadius: "5px",
          marginTop: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={{ __html: svg! }}
        />
      </Box>
    </Box>
  );
}

export default TypstOutput;
