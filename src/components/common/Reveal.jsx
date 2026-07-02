import { motion } from "framer-motion";

const Reveal = ({
    children,
    variant,
    delay = 0,
    duration = 0.6,
    once = true,
    amount = 0.3,
    className = "",
}) => {
    const variants = {
        hidden: variant.hidden,

        visible: {
            ...variant.visible,

            transition: {
                ...variant.visible.transition,
                delay,
                duration,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once,
                amount,
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;