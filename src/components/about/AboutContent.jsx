import about from "../../data/about";
import AboutInfo from "./AboutInfo";
import AboutSkills from "./AboutSkills";

import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fadeUp";

const AboutContent = () => {
    return (
        <motion.div className="mx-auto max-w-5xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >

            <div className="text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    About Me
                </span>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                    Get to know me better.
                </h2>

                <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
                    {about.description}
                </p>
            </div>

            <AboutInfo />

            <AboutSkills />

        </motion.div>
    );
};

export default AboutContent;