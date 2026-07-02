import profile from "../../data/profile";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

const socials = [
    {
        icon: FaGithub,
        href: profile.socials.github,
    },
    {
        icon: FaLinkedin,
        href: profile.socials.linkedin,
    },
    {
        icon: FaEnvelope,
        href: profile.socials.email,
    },
];

const FooterSocials = () => {
    return (
        <div className="mt-6 flex justify-center gap-4">
            {socials.map(({ icon: Icon, href }, index) => (
                <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            text-slate-600
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-slate-900
            hover:bg-slate-900
            hover:text-white
          "
                >
                    <Icon />
                </a>
            ))}
        </div>
    );
};

export default FooterSocials;