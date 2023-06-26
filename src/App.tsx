import { useCallback, useEffect, useState } from "react";

import RobotsList from "@components/RobotsList";
import SearchBox from "@components/SearchBox";

import { IRobot } from "robots";

function App() {
  const [robots, setRobots] = useState<IRobot[]>([]);
  const [filteredRobots, setFilteredRobots] = useState<IRobot[]>([]);

  const handleSearchRobots = useCallback(
    (text: string) => {
      setFilteredRobots(() =>
        robots.filter((robot) =>
          robot.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    },
    [robots]
  );

  useEffect(() => {
    const getRobots = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await res.json();

      setRobots(robots);
    };

    getRobots();
  }, []);

  return (
    <>
      <header className="text-center py-16">
        <h1 className="font-sega lg:text-7xl text-5xl">robofriends</h1>
        <SearchBox onChange={handleSearchRobots} />
      </header>
      <main>
        <RobotsList robots={filteredRobots.length ? filteredRobots : robots} />
      </main>
    </>
  );
}

export default App;
