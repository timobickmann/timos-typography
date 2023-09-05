import "./globals.css";
import * as Typography from "./components/Typography";

function App() {
  return (
    <>
      <div className="min-h-screen flex gap-5 flex-col items-center justify-center">
        <Typography.H1>This is an H1 Heading</Typography.H1>
        <Typography.H2>This is an H2 Heading</Typography.H2>
        <Typography.H3>This is an H3 Heading</Typography.H3>
        <Typography.H4>This is an H4 Heading</Typography.H4>
        <Typography.P>
          This is a paragraph of text. It can be customized with different
          styles.
        </Typography.P>
        <Typography.Lead>
          This is a lead paragraph with a larger font size.
        </Typography.Lead>
        <Typography.Large>This is a large text.</Typography.Large>
        <Typography.Small>This is small text.</Typography.Small>
        <Typography.Muted>This text is muted.</Typography.Muted>
        <Typography.ExternalLink href="https://example.com">
          Visit Example.com
        </Typography.ExternalLink>
        <Typography.Blockquote>
          This is a blockquote. It can be used for quoting text.
        </Typography.Blockquote>
        <Typography.Code>const message = "Hello, World!";</Typography.Code>
      </div>
    </>
  );
}

export default App;
