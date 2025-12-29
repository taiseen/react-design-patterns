import { memo } from "react";

const ProfileCard = ({ name }) => {
  console.log("➡️ child value change \nRendered <ProfileCard />");

  return (
    <div className="flex gap-2">
      <h2>Child Component:-</h2>

      <p>
        PROP VALUE ➡️{" "}
        <span className="px-2 py-1 bg-orange-200 text-slate-800 rounded">
          {name}
        </span>
      </p>
    </div>
  );
};

const MemoizedCard = memo(ProfileCard);

export default MemoizedCard;
