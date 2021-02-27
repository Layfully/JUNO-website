import HomeSection from "./HomeSection/HomeSection";
import StorySection from "./StorySection/StorySection";
import TeaserSection from "./TeaserSection/TeaserSection";
import ProgressSection from "./ProgressSection/ProgressSection";
import ContactForm from "./ContactForm/ContactForm";
import Slider from "./Slider/Slider";
import AffiliatesSection from "./AffiliatesSection/AffiliatesSection";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import BulletLinkList from "./Footer/BulletLinkList";
import OrangeLinkList from "./Footer/OrangeLinkList";

import Placeholder from "./Placeholder";

const Components = {
  homeSection: HomeSection,
  storySection: StorySection,
  teaserSection: TeaserSection,
  progressSection: ProgressSection,
  contactForm: ContactForm,
  slider: Slider,
  affiliatesSection: AffiliatesSection,
  menu: Menu,
  footer: Footer,
  bulletLinkList: BulletLinkList,
  orangeLinkList: OrangeLinkList,
};

const DynamicComponent = ({ blok, language, languageList }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return (
      <Component blok={blok} language={language} languageList={languageList} />
    );
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
