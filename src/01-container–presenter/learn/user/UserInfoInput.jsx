import Button from "@/components/ui/Button";

const UserInfoInput = ({
  onInputChange,
  onSaveProfile,
  onCancelEdit,
  userInfo,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={userInfo?.name || ""}
        onChange={(e) => onInputChange("name", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <input
        type="email"
        placeholder="Email"
        value={userInfo?.email || ""}
        onChange={(e) => onInputChange("email", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />
      <textarea
        placeholder="Bio"
        value={userInfo?.bio || ""}
        onChange={(e) => onInputChange("bio", e.target.value)}
        className="w-2/3 px-4 py-3 border-2 border-gray-300 rounded-lg min-h-[100px] resize-vertical focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
      />

      <div className="flex gap-4 mt-2">
        <Button onClick={onCancelEdit} className="w-fit" variant="ghost">
          Cancel
        </Button>

        <Button onClick={onSaveProfile} className="w-fit" variant="confirm">
          Save
        </Button>
      </div>
    </div>
  );
};

export default UserInfoInput;
