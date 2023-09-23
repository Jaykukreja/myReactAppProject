import { useState } from "react";
const Section = ({title,description,isVisible,setIsVisible}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-2 m-2 border border-black shadow-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      {isVisible ? (
        <button
          className="text-sm underline from-indigo-100"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="text-sm underline from-indigo-100"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection,setVisibleSection] = useState("about")
  return (
    <>
      <h1 className="text-2xl font-bold p-2 m-2">Instamart Page</h1>
      <Section
        title={"About Instamart"}
        description={
          "Instamart is a provider of grocery pickup and delivery solutions. Users can search for different products on the platform, compare their prices, and place an online order. It provides next-day home delivery of the ordered products at the customer's location."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection("about")
        }}
      ></Section>
      <Section
        title={"About Team"}
        description={
          "Jim Smith, Founder & CEO - Jim has 15 years of experience in online software development, having co-founded two previous successful online businesses. His first company specialized in developing workflow automation software for government agencies and was sold to a public company in 2003. Jim’s second company developed a mobile app for parents to manage their children’s activities, which was sold to a large public company in 2014. Jim has a B.S. in computer science from MIT and an M.B.A from the University of Chicago Bill Jones, COO -Bill has 20 years of sales and business development experience from working with several startups that he helped grow into large businesses. He has a B.S. in mechanical engineering from M.I.T., where he also played Division I lacrosse for four years."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection("team")
        }}
      ></Section>
      <Section
        title={"Careers at Instamart"}
        description={
          "We are not just a technology company full of people, we're a people company full of technology. It is people like you who make us what we are today. Welcome to our world: Our people, our culture, our voices, and our passions."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => {
          setVisibleSection("careers")
        }}
      ></Section>
    </>
  );
};

export default Instamart;
