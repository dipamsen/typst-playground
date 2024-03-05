import { Container, Typography } from "@mui/material";
import TypstOutput from "./TypstOutput";
import TypstInput from "./TypstInput";

function App() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "20px" }}>
      <Typography variant="h3">Typst Playground</Typography>

      <TypstInput />
      <TypstOutput />
    </Container>
  );
}

export default App;
