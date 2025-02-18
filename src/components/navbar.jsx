import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-gray-900 text-white p-4">
			<div className="container mx-auto flex justify-between">
				<h1 className="text-xl font-bold">Apratim Tripathi</h1>
				<div className="space-x-4">
					<Link to="/" className="hover:text-gray-300">Home</Link>
					<Link to="/about" className="hover:text-gray-300">About</Link>
					<Link to="/experience" className="hover:text-gray-300">Experience</Link>
					<Link to="/hobbies" className="hover:text-gray-300">Fun</Link>
					<Link to="/projects" className="hover:text-gray-300">Projects</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
