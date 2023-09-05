import "./globals.css";
import * as Typography from "./components/Typography";

function App() {
  return (
    <>
      <div className="flex w-screen">
        <div className="h-screen w-1/2 flex gap-5 flex-col items-center justify-center pt-10 bg-background text-foreground">
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

        <div className=" h-screen dark w-1/2 flex gap-5 flex-col items-center justify-center pt-10 bg-background text-foreground">
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
      </div>
      <span className="w-screen absolute bottom-1 text-center ">
        <Typography.ExternalLink
          className=" text-xl p-2 rounded bg-slate-400"
          href="https://github.com/timobickmann/timos-typography"
        >
          GitHub Repository
        </Typography.ExternalLink>
      </span>
    </>
  );
}

export default App;
