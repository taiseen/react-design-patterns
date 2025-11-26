import Button from "@/components/ui/Button";

const UserInfo = ({ user, onEditing }) => {
  return (
    <div className="flex flex-col justify-center flex-1 text-slate-300">
      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
      <p className="text-lg mb-4 font-medium">{user.email}</p>
      <p className="leading-relaxed mb-6">{user.bio}</p>

      <Button
        onClick={() => onEditing(true)}
        className="w-fit self-start bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:-translate-y-0.5 transform"
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default UserInfo;
