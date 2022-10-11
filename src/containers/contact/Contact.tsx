import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import ContactContent from "components/contactContent/ContactContent";
import { useSelector } from "react-redux";
import { get } from "lodash";

function Contact() {
  const configApp = useSelector((state: any) => state.config);
  const config = get(configApp, "list.result.data");

  return (
    <>
      <Header appConfig={config} />
      <ContactContent />
      <Footer />
    </>
  );
}

export default Contact;
