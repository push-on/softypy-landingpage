import { IoCallOutline } from "react-icons/io5"

export const Banner = () => {
	const PhoneNo = "+88-01885-XXX-XXX"
	return (
		<div className="h-16 flex justify-center items-center bg-green-50 space-x-4 text-lg font-semibold">

			<div className="flex whitespace-nowrap">
				<span className="text-green-600 text-3xl"><IoCallOutline /></span>
				<span className="">
					{PhoneNo}
				</span>
			</div>
			<div className="text-lg">
				Contact Us
			</div>
		</div>
	)
}
