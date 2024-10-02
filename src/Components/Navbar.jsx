import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false); 
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div>
            <header className="flex items-center justify-between py-2 bg-white shadow-md px-16 border-b-2">
                <Link to={"/"} className="flex items-center space-x-2">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
                        alt="Airbnb logo"
                        className="w-[150px] h-[70px]"
                    />
                </Link>

                <nav className="hidden md:flex space-x-6 text-gray-700">
                    <Link to="/" className="hover:underline text-xl font-bold">
                        Stays
                    </Link>
                    <Link to="/" className="hover:underline text-xl font-bold">
                        Experiences
                    </Link>
                </nav>

                <div className="relative">
                    <button
                        className="flex items-center space-x-2 bg-gray-200 p-2 rounded-full"
                        onClick={toggleDropdown}
                    >
                        <Menu />
                    </button>

                    {isDropdownOpen && (
                        <div
                            ref={dropdownRef} 
                            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                        >
                            <ul className="py-1">
                                <li>
                                    <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Sign up
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Log in
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
