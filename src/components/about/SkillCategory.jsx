import { div, span } from "framer-motion/client"

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span key={skill} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hvoer:border-slate-900 hover:bg-slate-900 hover:text-white">{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default SkillCategory;