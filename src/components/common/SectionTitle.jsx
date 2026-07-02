// -- Design System
// Primary     : slate-900
// Secondary   : slate-600
// Accent      : blue-600
// Background  : white
// Section Alt : slate-50

function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;