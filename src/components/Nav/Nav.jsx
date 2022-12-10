import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import icon_menu from "../../assets/icon-menu.svg";
import icon_menu_close from "../../assets/icon-close-menu.svg";
import icon_arrow_up from "../../assets/icon-arrow-up.svg";
import icon_arrow_down from "../../assets/icon-arrow-down.svg";
import icon_todo from "../../assets/icon-todo.svg";
import icon_calendar from "../../assets/icon-calendar.svg";
import icon_reminder from "../../assets/icon-reminders.svg";
import icon_planning from "../../assets/icon-planning.svg";

const features = [
	{
		name: "Todo List",
		icon: icon_todo,
	},
	{
		name: "Calendar",
		icon: icon_calendar,
	},
	{
		name: "Reminders",
		icon: icon_reminder,
	},
	{
		name: "Planning",
		icon: icon_planning,
	},
];

const company = [
	{
		name: "History",
	},
	{
		name: "Our Team",
	},
	{
		name: "Blog",
	},
];

const List = ({ screen }) => {
	const [dropdownStatus, setDropdownStatus] = useState({
		first: false,
		second: false,
	});

	return (
		<ul
			className={
				screen === "mobile"
					? "mt-24 w-auto"
					: "ml-20 flex items-center gap-10 text-grayTheme"
			}
		>
			<li
				className={`py-2 cursor-pointer ${
					screen === "desktop" && "group relative"
				}`}
			>
				<button
					className={`flex items-center hover:text-blackTheme ${
						screen === "desktop" ? "gap-5" : "gap-3"
					}`}
					onClick={() => {
						if (screen === "mobile")
							setDropdownStatus((state) => ({
								...state,
								first: !state.first,
							}));
					}}
					onMouseOver={() => {
						if (screen === "desktop")
							setDropdownStatus((state) => ({
								...state,
								first: true,
							}));
					}}
					onMouseOut={() => {
						if (screen === "desktop")
							setDropdownStatus((state) => ({
								...state,
								first: false,
							}));
					}}
				>
					Features{" "}
					<img
						src={
							dropdownStatus.first
								? icon_arrow_up
								: icon_arrow_down
						}
					/>
				</button>
				<Dropdown
					data={features}
					isUsingIcon={true}
					isShown={dropdownStatus.first}
					screen={screen}
				/>
			</li>
			<li
				className={`py-2 cursor-pointer ${
					screen === "desktop" && "group relative"
				}`}
			>
				<button
					className={`flex items-center hover:text-blackTheme ${
						screen === "desktop" ? "gap-5" : "gap-3"
					}`}
					onClick={() => {
						if (screen === "mobile")
							setDropdownStatus((state) => ({
								...state,
								second: !state.second,
							}));
					}}
					onMouseOver={() => {
						if (screen === "desktop")
							setDropdownStatus((state) => ({
								...state,
								second: true,
							}));
					}}
					onMouseOut={() => {
						if (screen === "desktop")
							setDropdownStatus((state) => ({
								...state,
								second: false,
							}));
					}}
				>
					Company{" "}
					<img
						src={
							dropdownStatus.second
								? icon_arrow_up
								: icon_arrow_down
						}
					/>
				</button>
				<Dropdown
					data={company}
					isUsingIcon={false}
					isShown={dropdownStatus.second}
					screen={screen}
				/>
			</li>
			<li className="py-2 cursor-pointer hover:text-blackTheme">
				Careers
			</li>
			<li className="py-2 cursor-pointer hover:text-blackTheme">About</li>
		</ul>
	);
};

const Dropdown = ({ data, isUsingIcon, isShown, screen }) => {
	return (
		<ul
			className={
				screen === "mobile"
					? `${
							isShown ? "pt-2 h-auto" : "pt-0 h-0"
					  } pl-5 overflow-y-hidden ease-in-out duration-300`
					: "group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 opacity-0 pointer-events-none translate-y-10 absolute right-0 top-10 bg-white py-4 px-8 rounded-xl shadow-2xl w-max ease-in-out duration-300"
			}
		>
			{data.map((element, index) => (
				<li className="py-2" key={index}>
					<span className="flex items-center gap-2 hover:text-blackTheme">
						{isUsingIcon && <img src={element.icon} />}{" "}
						{element.name}
					</span>
				</li>
			))}
		</ul>
	);
};

const MobileNav = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<button
				className="grid place-content-center relative z-10"
				onClick={() => setActive((state) => !state)}
			>
				<img src={active ? icon_menu_close : icon_menu} />
			</button>
			<div
				className={`${
					active
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				} fixed w-screen h-screen inset-0 bg-blackTheme bg-opacity-60 text-[14px] ease-in-out duration-700`}
			>
				<div
					className={`${
						active ? "translate-x-0" : "translate-x-full"
					} absolute w-[60%] inset-y-0 right-0 bg-[#fff] px-5 ease-in-out duration-500 delay-500`}
				>
					<List screen="mobile" />
					<button className="block w-full py-3 mt-2 text-center hover:text-blackTheme">
						Login
					</button>
					<button className="block w-full py-2 text-center border border-grayTheme rounded-xl hover:text-blackTheme hover:border-blackTheme">
						Register
					</button>
				</div>
			</div>
		</>
	);
};

const DesktopNav = () => {
	return (
		<>
			<List screen="desktop" />
			<div className="grow flex justify-end gap-8 ">
				<button className="py-3 text-center hover:text-blackTheme">
					Login
				</button>
				<button className="py-2 px-6 text-center border border-grayTheme rounded-xl hover:text-blackTheme hover:border-blackTheme">
					Register
				</button>
			</div>
		</>
	);
};

const Nav = () => {
	const screenWidth = window.innerWidth;

	return (
		<nav className={` ${screenWidth > 640 && "fixed w-full bg-whiteTheme"} flex justify-between md:justify-start items-center px-5 py-6 md:py-8 md:px-10 text-grayTheme`}>
			<img src={logo} alt="logo" />
			{screenWidth < 640 ? <MobileNav /> : <DesktopNav />}
		</nav>
	);
};

export default Nav;
