import contact from "../../data/contact";

import ContactCard from "./ContactCard";

import {
    HiEnvelope,
    HiPhone,
} from "react-icons/hi2";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const ContactContent = () => {
    return (
        <div className="mx-auto max-w-3xl">

            <div className="text-center">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Contact
                </span>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                    {contact.title}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
                    {contact.description}
                </p>

            </div>

            <div className="mt-14 space-y-5">

                <ContactCard
                    icon={<HiEnvelope />}
                    title="Email"
                    value={contact.email}
                    href={`mailto:${contact.email}`}
                />

                <ContactCard
                    icon={<HiPhone />}
                    title="Phone"
                    value={contact.phone}
                    href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                />

                <ContactCard
                    icon={<FaGithub />}
                    title="GitHub"
                    value="github.com/uibyfaizal"
                    href={contact.github}
                />

                <ContactCard
                    icon={<FaLinkedin />}
                    title="LinkedIn"
                    value="linkedin.com/in/uibyfaizal"
                    href={contact.linkedin}
                />

            </div>

        </div>
    );
};

export default ContactContent;