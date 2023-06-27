import { useCallback, useEffect } from "react";

import RobotItem from "./RobotItem";

import { useAppDispatch, useAppSelector } from "@/hooks/useDispatch";
import {
  fetchRobots,
  selectFilteredRobots,
  selectRobots,
} from "@/redux/robotsSlice";

function RobotsList() {
  const dispatch = useAppDispatch();

  const robots = useAppSelector(selectRobots);
  const filteredRobots = useAppSelector(selectFilteredRobots);

  const renderRobots = useCallback(() => {
    const data = filteredRobots.length ? filteredRobots : robots;

    return data.map((robot) => <RobotItem robot={robot} key={robot.id} />);
  }, [filteredRobots, robots]);

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  return (
    <ul className="flex flex-wrap gap-4 px-3 justify-center">
      {renderRobots()}
    </ul>
  );
}

export default RobotsList;
