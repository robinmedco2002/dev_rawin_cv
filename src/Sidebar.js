import SContactInfo from "./SContactInfo";
import SEducation from "./SEducation";
import TSEducation from "./TSEducation";
import SCourse from "./SCourse";
import SProfileText from "./SProfileText";
import SExpertise from "./SExpertise ";
import SLanguage from "./SLanguage";
import SAbout from "./SAbout";

const Sidebar = ({ Data }) => {
  const { Profile, ContactInfo, Education, TEducation, Course, Language, Expertise, About } = Data;
  return (
    <div className="left_Side">
      <SProfileText Profile={Profile} />
      <SContactInfo ContactInfo={ContactInfo} />
      <SEducation Education={Education} />
      <TSEducation TEducation={TEducation} />
      <SCourse Course={Course} />
      <SExpertise Expertise={Expertise} />
      <SLanguage Language={Language} />
      <SAbout About={About} />
    </div>
  );
};

export default Sidebar;
