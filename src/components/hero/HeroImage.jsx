import profileImage from "../../assets/images/foto-profil.png";

import FloatingBadge from "./FloatingBadge";

import { motion } from "framer-motion";
import { fadeRight } from "../../animations/fadeRight";

import {
    FaReact,
    FaLaravel,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMysql,
} from "react-icons/si";

const HeroImage = () => {
    return (
        <motion.div className="order-1 flex justify-center md:order-2"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.3,
            }}
        >
            <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 -z-20 rounded-full bg-blue-500/20 blur-3xl"></div>

                <div className="absolute inset-6 -z-10 rounded-full bg-purple-400/20 blur-3xl"></div>

                {/* Image */}
                <div
                    className="
            aspect-square
            w-64
            sm:w-72
            md:w-[380px]
            lg:w-[430px]

            overflow-hidden
            rounded-full
            border-4
            border-white
            bg-slate-100
            shadow-2xl
        "
                >
                    <img
                        src={profileImage}
                        alt="Faizal"
                        className="block h-full w-full object-cover"
                    />
                </div>

                {/* Floating Badge */}

                <FloatingBadge
                    label="React"
                    icon={<FaReact className="text-sky-500" />}
                    className="-top-5 left-10"
                />

                <FloatingBadge
                    label="Laravel"
                    icon={<FaLaravel className="text-red-500" />}
                    className="top-1/2 -left-14"
                />

                <FloatingBadge
                    label="Tailwind"
                    icon={<SiTailwindcss className="text-cyan-500" />}
                    className="top-16 -right-10"
                />

                <FloatingBadge
                    label="MySQL"
                    icon={<SiMysql className="text-blue-600" />}
                    className="bottom-6 right-4"
                />
            </div>
        </motion.div>
    );
};

export default HeroImage;