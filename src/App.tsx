import { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";

import RobotsList from "@components/RobotsList";
import SearchBox from "@components/SearchBox";

import { store } from "@/redux/store";

function App() {
  return (
    <Provider store={store}>
      <header className="text-center py-16">
        <h1 className="font-sega lg:text-7xl text-5xl">robofriends</h1>
        <SearchBox />
      </header>
      <main>
        <RobotsList />
      </main>
    </Provider>
  );
}

export default App;
