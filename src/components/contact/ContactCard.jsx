import { motion } from "framer-motion";
import { zoomIn } from "../../animations/zoomIn";

const ContactCard = ({
    icon,
    title,
    value,
    href,
}) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            whileHover={{
                y: -8,
            }}>

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-2xl text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                {icon}
            </div>

            <div>
                <p className="text-sm text-slate-500">
                    {title}
                </p>

                <h3 className="font-semibold text-slate-900">
                    {value}
                </h3>
            </div>
        </motion.a>
    );
};

export default ContactCard;