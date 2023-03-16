
import Header from "@/components/Header";
import Variants from "@/components/bateman/Variants/Variants";
import Catch from "@/components/bateman/catchphrase/Catch";

const Home = () => {
  return (
    <div className="batman">
      <Header characterName="batman"/>
      <Variants />
      <Catch />
    </div>
  );
};

export default Home;
