import HeroBG from '../assets/heroBG.webp'
import { FlightBooking } from './FlightBooking'
export const Hero = () => {
	const Place = 'Ghuronti'

	return (
		<div className="relative mb-40">
			<div className='absolute w-full h-full  flex flex-col items-center z-10 '>
				<h1 className='text-4xl font-bold py-10  text-gray-800'>
					Welcome to {Place}! Find Flights, Hotels & Tour Packages
				</h1>
				<div className=''>
					<FlightBooking />
				</div>
			</div>
			{/* Hero Background */}
			<div className="h-96 overflow-hidden">
				<div
					className="absolute inset-0 bg-sky-300/50 backdrop-saturate-50 backdrop-contrast-75"
				></div>
				<img
					src={HeroBG}
					alt="Hero Background"
					className="object-cover object-center w-full h-full "
				/>
			</div>
		</div>
	)
}
