import Header from "@/components/Header";
import Variants from "@/components/harley/Variants/Variants";

const Harley = () => {
  return (
    <div className="harley">
      <Header characterName="harley" secondName="Quinn"/>
      <Variants />
    </div>
  );
};

export default Harley;
