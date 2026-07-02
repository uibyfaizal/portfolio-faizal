import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroSkills from "./HeroSkills";
import HeroSocials from "./HeroSocials";
import profile from "../../data/profile";

import { motion } from "framer-motion";
import { fadeLeft } from "../../animations/fadeLeft";

function HeroContent() {
    return (
        <motion.div className="mt-6 order-2 text-center md:order-1 md:text-left mb-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >
            <HeroBadge />

            <div>
                <span className='text-blue-600 font-semibold'>👋 Yo, I'm</span>

                <h1 className='mt-3 text-5xl font-bold text-slate-900 md:text-7xl'>{profile.name}</h1>

                <h2 className='mt-3 text-xl font-bold text-cyan-600 md:text-2xl'>{profile.role}</h2>

                <p className='mt-2 max-w-xl leading-6 text-slate-600'>{profile.description}</p>

            </div>

            <HeroSkills />

            <HeroButtons />

            <HeroSocials />
        </motion.div>
    );
}

export default HeroContent;