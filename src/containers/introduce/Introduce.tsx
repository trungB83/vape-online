import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { useSelector } from "react-redux";
import { get } from "lodash";
import IntroduceContent from "components/introduceContent/IntroduceContent";

function Introduce() {
  const configApp = useSelector((state: any) => state.config);
  const config = get(configApp, "list.result.data");

  return (
    <>
      <Header appConfig={config} />
      <IntroduceContent />
      <Footer />
    </>
  );
}

export default Introduce;
