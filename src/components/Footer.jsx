export default function Footer() {
    return (
        <footer className="mt-12 py-6 border-t border-gray-300 text-center text-gray-600 text-[16px] tracking-wide">
            <p className="text-[18px] font-light text-gray-600 tracking-wide fade-in-delayed">
                Контакты: <span className="font-medium text-gray-800">  +7 (999) 123-45-67 | email@example.com</span>
            </p>
            <p className="mt-2">
                © {new Date().getFullYear()} Drone Photography. All rights reserved.
            </p>
        </footer>
    );
}
