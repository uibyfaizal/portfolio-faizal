import about from "../../data/about";

const AboutInfo = () => {
    return (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {about.info.map((item) => (
                <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-blue-600">
                        {item.label}
                    </p>

                    <h4 className="mt-2 font-semibold text-slate-900">
                        {item.value}
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default AboutInfo;