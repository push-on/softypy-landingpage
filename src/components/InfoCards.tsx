import img_1 from '../assets/1.jpg'
import img_2 from '../assets/2.jpg'
import img_3 from '../assets/3.png'
import img_4 from '../assets/4.jpg'

export const InfoCards = () => {
	// Array of image details
	const images = [
		{
			name: 'Image 1',
			location: 'Saint Martin',
			price: '7500TK',
			src: img_1,
			description: 'Description for Image 1',
		},
		{
			name: 'Image 2',
			location: 'Shylet',
			price: '3000TK',
			src: img_2,
			description: 'Description for Image 2',
		},
		{
			name: 'Image 3',
			location: 'Sundarban',
			price: '7500TK',
			src: img_3,
			description: 'Description for Image 3',
		},
		{
			name: 'Image 4',
			location: "Cox's Bazar",
			price: '15000TK',
			src: img_4,
			description: 'Description for Image 4',
		},
		// Add more images as needed
	]




	return (
		<div className=' pt-10 mt-10 px-10'>

			<h1 className='text-4xl font-bold text-center mb-10'>Best Places To Visit In Bangladesh</h1>
			<div className="flex flex-row justify-center space-x-4 overflow-x-scroll">
				{images.map((image, index) => (
					<div className='rounded-lg shadow-lg'>
						<img src={image.src} key={index} alt="" className='object-cover object-center h-52 w-64 rounded-t-lg' />
						<div className='flex items-center justify-between px-2 py-2 bg-blue-100 rounded-b-lg'>
							<h2 className=''>{image.location}</h2>
							<h2 className=''>{image.price}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default InfoCards
