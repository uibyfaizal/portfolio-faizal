function HeroBadge() {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

            <span className="text-sm font-medium text-emerald-700">
                Available for Work
            </span>
        </div>
    );
}

export default HeroBadge;