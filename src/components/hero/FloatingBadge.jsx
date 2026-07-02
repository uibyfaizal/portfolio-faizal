import { div } from "framer-motion/client"

const FloatingBadge = ({
    label,
    icon,
    className = "",
}) => {
    return (
        <div className={`absolute hidden md:flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm ${className}`}>
            <span className="text-lg">{icon}</span>

            <span className="text-sm font-semibold text-slate-700">{label}</span>
        </div>
    )
};

export default FloatingBadge;