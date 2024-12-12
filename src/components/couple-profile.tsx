import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "700",
});

const CoupleProfile = () => {
	return (
		<section className="relative">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
				<path
					fill="#d3ad5c"
					fillOpacity="1"
					d="M0,64L120,74.7C240,85,480,107,720,117.3C960,128,1200,128,1320,128L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
			</svg>
			<div className="bg-[#d3ad5c] relative w-full md:top-[-0.4rem] px-10 pt-9 pb-20 md:pb-9 z-10">
				<h1 className="md:text-4xl text-3xl font-semibold text-center md:mb-20 mb-10 text-white">
					Couple Profile
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8">
					<div className="md:col-span-1 lg:col-span-1 shadow-lg rounded-lg">
						<Image
							src={"/images/woman-with-wedding-dress.jpg"}
							alt="asset-img"
							width={500}
							height={500}
							className="object-cover object-top rounded-lg h-[27rem]"></Image>
					</div>
					<div className="lg:col-span-2 md:col-span-1 space-y-5 flex flex-col justify-center text-center md:text-left">
						<h2
							className={`md:text-4xl text-3xl text-white font-semibold mt-5 md:mt-0 ${dancingScriptFont.className}`}>
							Reynaldy Putra Efendi
						</h2>
						<p className="text-xl text-white">Putri Pertama Dari :</p>
						<p className="text-xl text-white">Bapak Saipul & Ibu Lesto</p>
						<p className="text-xl text-white">Jalan Yudha Karya, Pekanbaru, Riau</p>
						<Link
							href={"https://www.instagram.com/reynaldyputraefendi/"}
							className="mx-auto md:mx-0"
							target="_blank">
							<FaInstagram className="text-3xl text-white text-center md:text-left" />
						</Link>
					</div>
				</div>
				<div className="w-full md:py-14 py-10 text-white text-7xl text-center font-semibold">&</div>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8">
					<div className="md:col-span-1 lg:col-span-2 space-y-5 flex flex-col justify-center md:text-right  text-center">
						<h2
							className={`md:text-4xl text-3xl text-white font-semibold ${dancingScriptFont.className}`}>
							Hardicka Geubrina Rahman
						</h2>
						<p className="text-xl text-white">Putra Pertama Dari :</p>
						<p className="text-xl text-white">Bapak Abdel & Ibu Patrick</p>
						<p className="text-xl text-white">Jalan Yudha Karya, Pekanbaru, Riau</p>
						<div className="md:flex md:justify-end mx-auto md:mx-0">
							<Link href={"https://www.instagram.com/reynaldyputraefendi/"} target="_blank">
								<FaInstagram className="text-3xl text-white mb-7 md:mb-0" />
							</Link>
						</div>
					</div>
					<div className="md:col-span-2 lg:col-span-1 shadow-lg rounded-lg">
						<Image
							src={"/images/men-with-wedding-dress.jpg"}
							alt="asset-img"
							width={500}
							height={500}
							className="object-cover object-top rounded-lg h-[27rem]"></Image>
					</div>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className="absolute md:bottom-[-7rem] bottom-[-3rem]">
				<path
					fill="#d3ad5c"
					fillOpacity="1"
					d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,272C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
			</svg>
		</section>
	);
};

export default CoupleProfile;
