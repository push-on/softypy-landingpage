import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { ImQuotesLeft } from 'react-icons/im'


export const Testimonial = () => {
	return (
		<div className="text-center mx-24 space-y-5 flex flex-col items-center mb-10">
			<h1 className="text-4xl font-bold">
				Customer satisfaction is our top priority
			</h1>
			<p>Our clients praise us for our great results,
				personable service, <br />
				expert knowledge.
				Here are what just a few of them had to say
			</p>

			<div className="bg-sky-100 px-20 py-10 relative w-3/4">
				<p>
					Your thoughtfulness and support of Ghuronti is very much appreciated.<br /> You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.
				</p>
				<ImQuotesLeft className="absolute bottom-24 left-10  text-9xl text-green-400/50" />
				<button className="text-3xl h-fit border-none ouutline-none absolute top-0 bottom-0 my-auto left-0"> <BsArrowLeftCircle /> </button>
				<button className="text-3xl h-fit border-none outline-none absolute top-0 bottom-0 my-auto right-0"> <BsArrowRightCircle /> </button>
			</div>

		</div>
	)
}
