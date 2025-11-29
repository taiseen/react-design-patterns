import Button from "../../components/ui/Button";
import Toggle from "./Toggle";

const MenuToggle = () => {
  return (
    <Toggle>
      {({ isOpen, toggle }) => (
        <div className="space-y-2">
          <Button className="w-fit! px-2 py-1" variant="caution" onClick={toggle}>
            {isOpen ? "🔽" : "▶️"} Menu
          </Button>

          {isOpen && (
            <ul className="space-y-3 pl-2 border-l-2 border-gray-600">
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  key={index}
                  className="px-3 py-1 w-64 border border-slate-500 rounded-2xl bg-transparent hover:bg-slate-700 cursor-pointer duration-300 hover:text-yellow-500 font-medium"
                >
                  Option {index + 1}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Toggle>
  );
};

export default MenuToggle;
