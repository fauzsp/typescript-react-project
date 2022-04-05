import { ReactNode, ReactElement, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let num: number = 6;
  function Heading({ title }: { title: string }) {
    return <h1>{title}</h1>;
  }
  function HeadingWithContent({ children }: { children: ReactNode }) {
    return <h2>{children}</h2>;
  }
  const defaultContainerProps = {
    heading: <strong>My Heading</strong>,
  };
  type ContainerProps = {
    children: ReactNode;
  } & typeof defaultContainerProps;
  function Container({ heading, children }: ContainerProps): ReactElement {
    return (
      <>
        <div>{heading}</div>
        <h2>{children}</h2>
      </>
    );
  }
  Container.defaultProps = defaultContainerProps;
  function TextWithChildren({
    header,
    children,
  }: {
    header?: (num) => ReactNode;
    children: (num) => ReactNode;
  }) {
    const [state, setState] = useState<number | null>(1);
    return (
      <div>
        <div>{header && `This is the header ${header?.(state)}`}</div>
        <div>
          <p> Today's number is lucky number{children(state)}</p>
        </div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading title="hello world"></Heading>

        <HeadingWithContent>
          <strong> its children component</strong>
        </HeadingWithContent>
        <Container>Foo</Container>
        <TextWithChildren header={(num) => num}>
          {(num) => num}
        </TextWithChildren>
        <p>
          Edit <code>src/App.js</code> {num}and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
