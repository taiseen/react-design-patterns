import Button from "../../../../../components/ui/Button";
import Users from "./Users";
import { useState } from "react";

function getUsers() {
  const usernames = [];
  const count = 16;

  for (let i = 0; i < count; i++) {
    const firstName = "Jon";
    const lastName = "Doe";

    const username = `${firstName} ${lastName}`;
    usernames.push(username);
  }

  return usernames;
}

const UserSorting = () => {
  const [count, setCount] = useState(0);

  const [users] = useState(() => getUsers()); // assume it returns 10,000 users

  const handleCountIncrement = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="space-y-1">
      <h1 className="text-lg font-semibold">useMemo:-</h1>

      <div className="space-y-2 borderV1 p-2">
        <div className="flex items-center gap-4">
          <Button onClick={handleCountIncrement} className="w-fit" size="sm">
            Increment
          </Button>

          <p className="borderV1 px-2.5 py-0.5">{count}</p>
        </div>

        <Users list={users} />
      </div>
    </div>
  );
};

export default UserSorting;
