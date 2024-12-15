"use client";

import { Dancing_Script } from "next/font/google";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "700",
});

const Footer = () => {
	return (
		<section className="relative bg-[url('/images/couple.jpg')] bg-cover bg-no-repeat bg-center md:bg-[0%_22%] inset-0">
			<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			<div className="h-[34rem] flex flex-col justify-center items-center md:gap-y-5 gap-y-3 relative z-10">
				<h1 className="md:text-3xl text-2xl font-bold text-white">See You on Our Big Day</h1>
				<h2 className={`md:text-4xl text-3xl font-bold text-white ${dancingScriptFont.className}`}>
					Hardicka & Didi
				</h2>
				<div className="flex items-center">
					<div className="flex-grow border-2 md:w-32 w-16 border-t border-gray-300"></div>
					<p className="px-4 text-white">Turut Mengundang</p>
					<div className="flex-grow border-2 md:w-32 w-16 border-t border-gray-300"></div>
				</div>
				<p className="text-white text-center">
					Dengan penuh rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara
					pernikahan kami.
				</p>
			</div>
		</section>
	);
};

export default Footer;
