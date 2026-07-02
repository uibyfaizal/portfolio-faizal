import { motion } from "framer-motion";
import { zoomIn } from "../../animations/zoomIn";

import {
    FaGithub
} from "react-icons/fa6";

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            whileHover={{
                y: -8,
            }}
        >
            {/* Thumbnail */}
            <div className="overflow-hidden bg-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">

                <div>
                    <h3 className="text-xl font-bold text-slate-900">
                        {project.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Button */}

                <div className="flex items-center gap-3 pt-2">

                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                        <FaGithub />

                        Github
                    </a>

                </div>

            </div>
        </motion.div>
    );
};

export default ProjectCard;