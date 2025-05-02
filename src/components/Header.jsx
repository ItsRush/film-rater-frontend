import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle search bar visibility

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        if (queryTerm.trim() !== "") {
            navigate(`/search?q=${queryTerm}`);
        }
        setIsSearchOpen(false);
    };

    const handleSearchIconClick = () => {
        if (!isSearchOpen) {
            setIsSearchOpen(true); // Open the input field
        }
    };

    return (
        <div className="">
            <nav className="bg-linear-to-b/srgb from-[#051b44] to-[#111111] text-gray-500 p-5 md:h-70">
                <div className="grid grid-cols-3 md:m-10 mb-5 place-items-center relative">
                    {/* Left Section */}
                    <div className="md:p-2 ml-5 md:ml-0 p-1 md:h-full flex w-fit  items-center md:auto-cols-auto md:place-items-center bg-white/5 rounded-2xl">
                        <div className="row-start-1">
                            <NavLink
                                className={({ isActive }) =>
                                    `flex md:px-3 px-2 py-1.5 md:py-2 rounded-xl md:text-sm text-[10px] md:font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-gray-900 text-white shadow-md/20"
                                            : "text-gray hover:text-white"
                                    }`
                                }
                                end
                                to="/movies"
                            >
                                Movies
                            </NavLink>
                        </div>

                        <div className="row-start-2">
                            <NavLink
                                className={({ isActive }) =>
                                    `flex whitespace-nowrap md:px-3 px-2 py-1.5 md:py-2 rounded-xl md:text-sm text-[10px] md:font-medium transition-all duration-300 ${
                                        isActive
                                            ? "bg-gray-900 text-white shadow-md/20"
                                            : "text-gray hover:text-white"
                                    }`
                                }
                                to="/mylibrary"
                            >
                                My Library
                            </NavLink>
                        </div>
                    </div>

                    {/* Search bar */}
                    <form
                        onSubmit={handleSubmit}
                        className={`${
                            isSearchOpen ? "block" : "hidden"
                        } md:block h-fit w-35 -mr-25 md:static md:w-auto  md:px-0`}
                    >
                        <div className="relative md:w-md w-full md:p-0">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search Movies"
                                className="text-white md:text-[13px] text-[10px] w-full md:h-12 rounded-xl md:rounded-2xl bg-white/5 p-2.5 focus:outline-none focus:border-b-2 focus:border-[#16498C]"
                            />
                            <button type="submit" className="absolute right-4.5 md:right-6 top-1.5 md:top-2">
                                <svg
                                    className="opacity-50 h-fit bg-white/10  rounded-md md:rounded-xl p-1.5 md:p-2 hover:bg-white/20 hover:stroke-white cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="gray"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>

                    {/* Search Icon for Mobile */}
                    {!isSearchOpen && (
                        <button
                            className="block md:hidden -mr-45"
                            onClick={handleSearchIconClick}
                        >
                            <svg
                                className=" bg-white/5 rounded-xl p-2 hover:bg-white/20 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    )}

                    {/* User Profile */}
                    <button className="cursor-pointer ml-15 md:ml-0" type="button">
                        <svg
                            className="md:w-12 bg-white/5 md:rounded-2xl md:h-full rounded-xl md:p-3 p-2 md:border-b-2 hover:border-b-2 border-transparent hover:border-[#16498C] hover:stroke-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;