import { IRobot } from "robots";

import RobotItem from "./RobotItem";

interface Props {
  robots: IRobot[];
}

function RobotsList({ robots }: Props) {
  return (
    <ul className="flex flex-wrap gap-4 px-3 justify-center">
      {robots.map((robot) => (
        <RobotItem robot={robot} key={robot.id} />
      ))}
    </ul>
  );
}

export default RobotsList;
