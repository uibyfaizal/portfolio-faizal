import profile from "../../data/profile";

import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaInstagram,
} from "react-icons/fa";

const socials = [
    {
        icon: FaGithub,
        link: profile.socials.github,
        label: "GitHub",
    },
    {
        icon: FaLinkedinIn,
        link: profile.socials.linkedin,
        label: "LinkedIn",
    },
    {
        icon: FaEnvelope,
        link: profile.socials.email,
        label: "Email",
    },
    {
        icon: FaInstagram,
        link: profile.socials.instagram,
        label: 'Instagram'
    }
];

const HeroSocials = () => {
    return (
        <div className="mt-10 flex justify-center gap-4 md:justify-start">
            {socials.map(({ icon: Icon, link, label }) => (
                <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                        group
                        flex h-12 w-12 items-center justify-center
                        rounded-xl
                        border border-slate-200
                        bg-white
                        text-slate-700
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-slate-900
                        hover:bg-slate-900
                        hover:text-white
                        hover:shadow-lg">
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                </a>
            ))}
        </div>
    );
};

export default HeroSocials;