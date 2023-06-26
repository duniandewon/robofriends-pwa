import { IRobot } from "robots";

interface Props {
  robot: IRobot;
}

function RobotItem({ robot: { email, name, id } }: Props) {
  return (
    <li>
      <div className="bg-slate-300 rounded-md px-5 py-2 text-center shadow-md hover:shadow-xl hover:scale-105 hover:cursor-pointer">
        <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </li>
  );
}

export default RobotItem;
