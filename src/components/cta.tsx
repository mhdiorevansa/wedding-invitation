import { FaCalendarAlt } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "700",
});

const CTA = () => {
	return (
		<section className="relative bg-[url('/images/couple.jpg')] bg-cover bg-no-repeat bg-[0%_22%] inset-0">
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="h-[18rem] flex flex-col justify-center items-center md:gap-y-5 gap-y-3 relative z-10">
				<h1 className="md:text-3xl text-2xl font-bold text-white">We Are Going To</h1>
				<h2 className={`md:text-4xl text-3xl font-bold text-white ${dancingScriptFont.className}`}>
					Celebrate Our Love
				</h2>
				<button className="border-2 border-white rounded-full p-3 text-white flex gap-x-2 items-center">
					<FaCalendarAlt />
					<span>Save The Date</span>
				</button>
			</div>
		</section>
	);
};

export default CTA;
