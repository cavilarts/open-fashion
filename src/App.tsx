import { FC } from "react";

import { Header } from "./components/Header";

const App: FC = () => {
  return (
    <main>
      <Header />
      <h1 className="underline text-violet-600">hello</h1>
    </main>
  );
};

export default App;
