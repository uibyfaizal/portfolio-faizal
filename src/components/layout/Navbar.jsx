import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Container from "../common/Container";
import navLinks from "../../data/navLink";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <Container>
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl font-bold tracking-tight text-slate-900"
                    >
                        UIBYFAIZAL
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className="font-medium text-slate-600 transition hover:text-slate-900"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Button */}
                    <a
                        href="#contact"
                        className="hidden rounded-lg bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-700 md:block"
                    >
                        Contact Me
                    </a>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl text-slate-900 md:hidden"
                    >
                        {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="border-t border-slate-200 py-5 md:hidden">
                        <ul className="flex flex-col gap-5">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className="block font-medium text-slate-700"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-white"
                        >
                            Contact Me
                        </a>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Navbar;