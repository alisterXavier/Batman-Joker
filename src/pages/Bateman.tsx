import Header from "@/components/bateman/Header/Header";
import Variants from "@/components/bateman/Variants/variants";
import Catch from "@/components/bateman/catchphrase/Catch";

const Home = () => {
  return (
    <div className="batman">
      <Catch />
      <Header />
      <Variants />
    </div>
  );
};

export default Home;
