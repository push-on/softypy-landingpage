import { useState } from "react"

// import Hajj from "../assets/Hajj.png"
// import Tour from "../assets/Tour.png"
// import Hotel from "../assets/Hotel.png"
// import Plane from "../assets/Plane.png"
// import Train from "../assets/Train.png"
// import Bus from "../assets/Bus.png"
// import Visa from "../assets/Visa.png"

export const FlightBooking = () => {
	const [section, setSection] = useState('haji')
	const [selectedButton, setSelectedButton] = useState(2)

	const handleSectionChange = (selectedSection: string) => {
		setSection(selectedSection)
	}

	const handleButtonClick = (button: number) => {
		setSelectedButton(button)
	}

	return (
		<div className="rounded-3xl pb-10 bg-white/10 border-white/50 border backdrop-blur-sm shadow-lg">
			{/* Flight Selector */}
			<div className="h-full">
				<div className="flex justify-between rounded-t-3xl bg-white text-xl font-semibold">
					<button
						className={section === 'haji' ? "py-5 px-5 bg-sky-100 rounded-tl-3xl rounded-bl-none rounded-lg border-2 border-green-600 " : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('haji')}
					>
						<span className="flex items-center">
							{/* <img src={Hajj} className="mr-2 align-middle	" /> */}
							Haji & Ummah
						</span>

					</button>
					<button
						className={section === 'flight' ? "py-5 px-5 bg-sky-100 rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('flight')}
					>
						<span className="flex items-center ">
							{/* <img src={Plane} className="mr-2 align-middle	" /> */}

							Flight
						</span>
					</button>
					<button
						className={section === 'hotel' ? "py-5 px-5 bg-sky-100 rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('hotel')}
					>
						<span className="flex items-center">
							{/* <img src={Hotel} className="mr-2 align-middle	" /> */}

							Hotel
						</span>

					</button>
					<button
						className={section === 'visa' ? "py-5 px-5 bg-sky-100 rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('visa')}
					>
						<span className="flex items-center">
							{/* <img src={Visa} className="mr-2 align-middle	" /> */}

							Visa
						</span>

					</button>
					<button
						className={section === 'tours' ? "py-5 px-5 bg-sky-100 rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('tours')}
					>
						<span className="flex items-center">
							{/* <img src={Tour} className="mr-2 align-middle	" /> */}
							Tours
						</span>

					</button>
					<button
						className={section === 'busses' ? "py-5 px-5 bg-sky-100 rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('busses')}
					>
						<span className="flex items-center ">
							{/* <img src={Bus} className="mr-2 align-middle	" /> */}

							Buses
						</span>

					</button>
					<button
						className={section === 'trains' ? "py-5 px-5 bg-sky-100 rounded-tr-3xl rounded-br-none rounded-lg  border-2 border-green-600" : "py-5 px-5 border-2 border-transparent"}
						onClick={() => handleSectionChange('trains')}
					>
						<span className="flex items-center ">
							{/* <img src={Train} className="mr-2 align-middle	" /> */}
							Trains
						</span>

					</button>
				</div>
				<div className="flex flex-col items-center w-full h-full space-y-5 mt-5">
					<div className="h-10 space-x-10 border flex justify-center items-center text-lg font-medium bg-white  decoration-4 underline-offset-8 border-green-400 rounded-lg">
						<button
							className={`px-5 py-2 ${selectedButton === 1 ? 'underline  decoration-green-500 ' : ''}`}
							onClick={() => handleButtonClick(1)}
						>
							One Way
						</button>
						<button
							className={`px-5 py-2 ${selectedButton === 2 ? 'underline decoration-green-500' : ''}`}
							onClick={() => handleButtonClick(2)}
						>
							Round Trip
						</button>
						<button
							className={`px-5 py-2 ${selectedButton === 3 ? 'underline decoration-green-500' : ''}`}
							onClick={() => handleButtonClick(3)}
						>
							Multi City
						</button>
					</div>
					<div className="w-full grid grid-cols-2 gap-4 px-20">
						<div className="bg-white flex flex-col px-5 py-2 border border-green-400 rounded-lg ">
							<label className="font-semibold text-lg"> Flaying From</label>
							<input type="text" placeholder="City or Airport" className="w-full outline-none border-none" />
						</div>
						<div className="bg-white flex flex-col px-5 py-2  border border-green-400 rounded-lg">
							<label className="font-semibold text-lg"> Flaying To</label>
							<input type="text" placeholder="City or Airport" className="w-full outline-none border-none" />
						</div>
						<div className="flex">
							<div className="bg-white flex flex-col px-5 py-2  border border-green-400 rounded-lg">
								<label className="font-semibold text-lg"> Depart Form</label>
								<input type="text" placeholder="25 March 2023" className="w-full outline-none border-none" />
							</div>
							<div className="bg-white flex flex-col px-5 py-2  border border-green-400 rounded-lg">
								<label className="font-semibold text-lg"> Depart To</label>
								<input type="text" placeholder="25 March 2023" className="w-full outline-none border-none" />
							</div>
						</div>
						<div className="bg-white flex flex-col px-5 py-2  border border-green-400 rounded-lg">
							<label className="font-semibold text-lg"> Passenger Cabin Class</label>
							<input type="text" placeholder="1 Person" className="w-full outline-none border-none" />
						</div>
					</div>
					<button className="px-10 py-3 bg-sky-500 text-lg rounded-xl text-white font-semibold">Search Flight</button>
				</div>
			</div>
		</div>
	)
}
