const Button = ({
    children,
    href = "#",
    variant = "primary",
    icon,
    className = "",
}) => {
    const baseStyle =
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95";

    const variants = {
        primary:
            "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl",

        secondary:
            "border border-slate-300 bg-white text-slate-900 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white",

        outline:
            "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

        ghost:
            "text-slate-700 hover:bg-slate-100",
    };

    return (
        <a
            href={href}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {icon && <span>{icon}</span>}
            <span>{children}</span>
        </a>
    );
};

export default Button;