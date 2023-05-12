import { IoCallOutline, IoLocationOutline } from "react-icons/io5"

export const Footer = () => {
	const PhoneNo = "+88-01885-XXX-XXX"
	const USPhoneNo = "+88-01885-XXX-XXX"

	return (
		<div className="bg-sky-500 text-white flex justify-between py-14 px-32 capitalize">

			{/* BD office Address */}

			<div className="space-y-2">
				<h2>BD office Address</h2>
				<div className="flex items-center whitespace-nowrap">
					<span className=""><IoCallOutline /></span>
					<span className="">
						{PhoneNo}
					</span>
				</div>
				<div className="flex items-center whitespace-nowrap">
					<span className=""><IoCallOutline /></span>
					<span className="">
						{PhoneNo}
					</span>
				</div>
				<div className="flex">
					<p><IoLocationOutline className="inline-block" /> Dhaka Tower, LXX, XX Topkhana BD,<br />
						Purana Paltan, Dhaka</p>
				</div>

			</div>

			{/* Us Office Address */}

			<div className="space-y-2">
				<h2>USA office Address</h2>
				<div className="flex items-center whitespace-nowrap">
					<span className=""><IoCallOutline /></span>
					<span className="">
						{USPhoneNo}
					</span>
				</div>
				<div className="flex items-center whitespace-nowrap">
					<span className=""><IoCallOutline /></span>
					<span className="">
						{USPhoneNo}
					</span>
				</div>
				<p><IoLocationOutline className="inline-block" />USA Address: XXX Arbor Creek Ln, <br /> Doraville, GA XXXX</p>
			</div>

			{/* Social Media */}

			<div className="space-y-2">
				<h2>Social Media</h2>
				<p>xyz@gmail.com</p>
				<p>www.xyz.com</p>
			</div>

			{/* Help */}

			<div className="space-y-2">
				<h2>Help</h2>
				<p>FAQ</p>
				<p>Privacy Policy</p>
				<p>Terms & condition</p>
			</div>
		</div>
	)
}
