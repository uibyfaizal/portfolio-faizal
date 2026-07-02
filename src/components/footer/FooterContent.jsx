import profile from "../../data/profile";
import FooterSocials from "./FooterSocials";

const FooterContent = () => {
    return (
        <div className="text-center">

            <h3 className="text-2xl font-bold text-slate-900">
                {profile.name}
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                Building modern and responsive web applications using
                React, Laravel, JavaScript, Tailwind CSS, and MySQL.
            </p>

            <FooterSocials />

            <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default FooterContent;