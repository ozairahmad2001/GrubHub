import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button className="cursor-pointer underline" onClick={setIsVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Integer in lectus sagittis, pharetra ante ut, volutpat est. Suspendisse in interdum velit. Curabitur dictum sit amet elit vitae posuere. Sed consectetur nunc non lorem iaculis viverra. Sed et ligula efficitur, bibendum ipsum vitae, aliquam odio. Phasellus convallis euismod turpis vel tempor. Integer suscipit odio id ipsum pharetra, in viverra diam hendrerit. Nunc nulla diam, pharetra ut dui in, porta tempor sapien. Aenean vitae arcu vel arcu cursus hendrerit. Maecenas pellentesque risus sed arcu accumsan sodales. Ut ex nisi, congue tristique metus interdum, sollicitudin posuere sapien. In vel elit eu felis laoreet imperdiet sed vel ipsum. Ut pellentesque est vitae leo finibus, sed finibus quam bibendum. Pellentesque maximus eu ipsum vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Integer in lectus sagittis, pharetra ante ut, volutpat est. Suspendisse in interdum velit. Curabitur dictum sit amet elit vitae posuere. Sed consectetur nunc non lorem iaculis viverra. Sed et ligula efficitur, bibendum ipsum vitae, aliquam odio. Phasellus convallis euismod turpis vel tempor. Integer suscipit odio id ipsum pharetra, in viverra diam hendrerit. Nunc nulla diam, pharetra ut dui in, porta tempor sapien. Aenean vitae arcu vel arcu cursus hendrerit. Maecenas pellentesque risus sed arcu accumsan sodales. Ut ex nisi, congue tristique metus interdum, sollicitudin posuere sapien. In vel elit eu felis laoreet imperdiet sed vel ipsum. Ut pellentesque est vitae leo finibus, sed finibus quam bibendum. Pellentesque maximus eu ipsum vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
      <Section
        title={"Careers at Instamart"}
        description={
          "Integer in lectus sagittis, pharetra ante ut, volutpat est. Suspendisse in interdum velit. Curabitur dictum sit amet elit vitae posuere. Sed consectetur nunc non lorem iaculis viverra. Sed et ligula efficitur, bibendum ipsum vitae, aliquam odio. Phasellus convallis euismod turpis vel tempor. Integer suscipit odio id ipsum pharetra, in viverra diam hendrerit. Nunc nulla diam, pharetra ut dui in, porta tempor sapien. Aenean vitae arcu vel arcu cursus hendrerit. Maecenas pellentesque risus sed arcu accumsan sodales. Ut ex nisi, congue tristique metus interdum, sollicitudin posuere sapien. In vel elit eu felis laoreet imperdiet sed vel ipsum. Ut pellentesque est vitae leo finibus, sed finibus quam bibendum. Pellentesque maximus eu ipsum vel volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
      />
    </div>
  );
};

export default Instamart;
