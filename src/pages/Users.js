import { Link, Outlet } from "react-router-dom";

const Users = () => {
	return (
		<div>
			<h1>Users Page</h1>
			<nav>
				<Link to="me">My Profile </Link>
                <Link to=":id">User Profile</Link>
			</nav>

			<Outlet />
		</div>
	);
};

export default Users;
