import about from "../../data/about";
import SkillCategory from "./SkillCategory";

const AboutSkills = () => {
    return (
        <div className="mt-12 space-y-10">

            <p className="text-teal-950">Below are the technologies and tools I use throughout the development process, from building user interfaces and developing backend systems to designing UI and supporting collaboration and productivity.</p>
            <SkillCategory
                title="💻 Frontend Development"
                skills={about.skills.frontend}
            />

            <SkillCategory
                title="⚙ Backend Development"
                skills={about.skills.backend}
            />

            <SkillCategory
                title="🎨 UI & Design"
                skills={about.skills.design}
            />

            <SkillCategory
                title="🛠 Tools & Productivity"
                skills={about.skills.tools}
            />

        </div>
    );
};

export default AboutSkills;