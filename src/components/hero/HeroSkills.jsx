const skills = [
    "React",
    "Laravel",
    "JavaScript",
    "Tailwind CSS",
];

function HeroSkills() {
    return (
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                    {skill}
                </span>
            ))}
        </div>
    );
}

export default HeroSkills;