import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import img_1 from '../assets/img_1.webp'
import img_2 from '../assets/img_2.webp'
import img_3 from '../assets/img_3.webp'
import img_4 from '../assets/img_4.webp'


export const Trending = () => {

	const destinations = [
		{
			image: img_4,
			title: 'Dubai: The City of life',
			days: 4,
			price: '27,500',
		},
		{
			image: img_2,
			title: 'Cinnamon Dhonveli',
			days: 4,
			price: '69,300',
		},
		{
			image: img_1,
			title: 'Egypt: Mysteries Desert',
			days: 4,
			price: '35,000',
		},
		{
			image: img_3,
			title: 'Europe: The dream tour!',
			days: 4,
			price: '67,000',
		},
	]

	return (
		<div className="mb-20">
			<div>
				<h1 className="text-4xl font-bold text-center mb-5">
					Trending International Destinations
				</h1>
				<p className="text-center">
					The world is now just a hop, skip and jump away and here's how
					<br /> you can make your travel easier and better.{' '}
				</p>
			</div>
			<div className="flex items-center justify-center mt-5">
				<button className="mr-2" >
					<IoIosArrowBack size={30} />
				</button>
				<div
					id="card-container"
					className="flex space-x-5"
				>
					{destinations.map((destination, index) => (
						<div key={index} className="flex flex-col items-center px-2 pt-2 py-4 rounded-lg max-w-xs  shadow-xl">
							<img src={destination.image} alt="Destination" className=" object-cover object-center h-52 w-64" />
							<div className='self-start flex items-center w-full justify-between mt-2'>
								<h2 className="text-lg font-medium ">{destination.title}</h2>
								<p className="text-gray-500 bg-sky-100 px-2 rounded-md ">{destination.days} days</p>
							</div>
							<p className="mt-1 mb-2 self-start">
								<span className='mr-2 text-green-500'>
									Starts from
								</span>{destination.price} TK</p>
							<button className="bg-green-500 text-white py-2 px-6 mt-2 rounded">
								View Details
							</button>
						</div>
					))}
				</div>
				<button className="ml-2" >
					<IoIosArrowForward size={30} />
				</button>
			</div>
		</div>
	)
}
