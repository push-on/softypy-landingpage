import companyLogo from '../assets/logo.png'
import { BsSearch } from "react-icons/bs";

export const Navbar = () => {
	return (
		<div className="h-20 flex justify-center items-center space-x-20 bg-sky-100 w-screen shadow">
			<div className="flex space-x-10 justify-center items-center">
				<div className="w-36 flex justify-center items-center ">
					<img src={companyLogo} alt="" className=''/>
				</div>
				<div className="font-semibold text-lg whitespace-nowrap">About Us</div>
			</div>
			<div className="h-10 border-green-500 border w-1/4 flex items-center  rounded-md overflow-clip">
				{/* Input */}
				<input className="h-full flex-grow px-6 py-1 rounded-l-md outline-none border-none" type="text" name="" id="" placeholder="Search Flight, Hotel, Visa" />
				<button className="bg-green-100 px-5 text-2xl text-gray-500">
					<BsSearch/>
				</button>
			</div>
			{/* Login & SignUp button */}
			<div className="space-x-2 whitespace-nowrap">
				<button className="bg-green-500 py-2 px-6 rounded-md text-white font-medium">Login</button>
				<button className="bg-sky-500 py-2 px-6 rounded-md text-white font-medium">Sign Up</button>
			</div>
		</div>
	)
}
