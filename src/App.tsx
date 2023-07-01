import { Button } from "./components/Button";
import { Hero } from "./components/Hero";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";

const alignCenterProps = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 4,
};

const primaryBgColorHero = `
  <Hero _backgroundColor={'primary'}>
    <Button>
      With primary bgColor in hero
    </Button>
  </Hero>
  `;

const secondaryBgColorHero = `
  <Hero _backgroundColor={'secondary'}>
    <Button>
      With secondary bgColor in hero
    </Button>
  </Hero>
`;

const whiteBgColorHero = `
  <Hero _backgroundColor={'white'}>
    <Button>
      With white bgColor in hero
    </Button>
  </Hero>
`;

export const App = () => {
  return (
    <>
      <Hero {...alignCenterProps}>
        <Button>primary color hero</Button>
        <SyntaxHighlighter language="javascript" style={shadesOfPurple}>
          {primaryBgColorHero}
        </SyntaxHighlighter>
      </Hero>
      <Hero {...alignCenterProps} _backgroundColor={"secondary"}>
        <SyntaxHighlighter language="javascript" style={shadesOfPurple}>
          {secondaryBgColorHero}
        </SyntaxHighlighter>
        <Button>With secondary bgColor in hero</Button>
      </Hero>
      <Hero {...alignCenterProps} _backgroundColor={"white"}>
        <Button>With white bgColor in hero</Button>
        <SyntaxHighlighter language="javascript" style={shadesOfPurple}>
          {whiteBgColorHero}
        </SyntaxHighlighter>
      </Hero>
    </>
  );
};
