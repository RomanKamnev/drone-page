export default function DroneServices() {
    return (
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto fade-in">
            <p className="text-[20px] leading-relaxed mb-6 font-light text-gray-700 tracking-wide">
                High-quality drone photography and videography for any occasion.
            </p>

            <ul className="text-[18px] leading-relaxed space-y-4 text-left mx-auto max-w-md slide-up">
                {[
                    "4K Ultra HD Video & High-Resolution Photography",
                    "Licensed & Experienced Drone Pilots",
                    "Tailored Solutions for Your Specific Needs",
                    "Fast & Reliable Service",
                ].map((text, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-3 border-l-4 border-gray-800 pl-4 py-2 transition hover:border-gray-600"
                    >
                        <span className="text-gray-800 font-semibold">{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

