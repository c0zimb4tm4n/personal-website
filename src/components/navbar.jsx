import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-sky-900 text-white p-4">
			<div className="container mx-auto flex justify-between">
				<h1 className="text-xl font-bold">Apratim Tripathi</h1>
				<div className="space-x-4">
					<a href="#home" className="hover:text-gray-300">Home</a>
					<a href="#about" className="hover:text-gray-300">About</a>
					<a href="#experience" className="hover:text-gray-300">Experience</a>
					<a href="#projects" className="hover:text-gray-300">Projects</a>
					<a href="#hobbies" className="hover:text-gray-300">Fun</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
