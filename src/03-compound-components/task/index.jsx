import DisplaySelect from "./select";
import DisplayTable from "./table";
import DisplayCard from "./card";
import DisplayTab from "./tab";

const CompoundTask = () => {
  return (
    <div>
      <DisplayTable />

      <DisplayTab />

      <DisplaySelect />
      
      <DisplayCard />
    </div>
  );
};

export default CompoundTask;
