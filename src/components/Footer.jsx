export default function Footer() {
    return (
        <footer className="mt-12 py-6 border-t border-gray-300 text-center text-gray-600 text-[16px] tracking-wide">
            <p className="mt-2">
                © {new Date().getFullYear()} Drone Photography. All rights reserved.
            </p>
        </footer>
    );
}
