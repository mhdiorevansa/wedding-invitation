"use client";

import { GiPositionMarker } from "react-icons/gi";
import { Dancing_Script } from "next/font/google";
import useAos from "@/hooks/useAos";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "700",
});

const InformationEvent = () => {
	useAos({
		duration: 1000,
		easing: "ease-in-sine",
		offset: 100,
		once: true,
	});
	return (
		<div className="grid md:grid-cols-2 max-w-3xl md:mx-auto gap-7 px-5">
			<div
				data-aos="fade-left"
				className="relative z-50 md:p-10 p-5 rounded-md bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-lg border border-slate-300 mx-auto w-full">
				<div className="space-y-4 flex flex-col items-center justify-center">
					<h1 className={`text-4xl font-semibold text-[#e0bb7f] ${dancingScriptFont.className}`}>
						Resepsi
					</h1>
					<p>Senin, 17 Agustus 1945</p>
					<p>08:00 WIB - Selesai</p>
					<p className="font-semibold">Gedung Daerah</p>
					<p>Jalan Maharaja Indra</p>
					<button className="p-3 rounded-md bg-[#e0bb7f] text-white flex justify-center items-center gap-x-1">
						<GiPositionMarker className="text-xl" />
						<span>Open Maps</span>
					</button>
				</div>
			</div>
			<div
				data-aos="fade-right"
				className="relative z-50 md:p-10 p-5 rounded-md bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-lg border border-slate-300 mx-auto w-full">
				<div className="space-y-4 flex flex-col items-center justify-center">
					<h1 className={`text-4xl font-semibold text-[#e0bb7f] ${dancingScriptFont.className}`}>
						Akad Nikah
					</h1>
					<p>Senin, 17 Agustus 1945</p>
					<p>08:00 WIB - Selesai</p>
					<p className="font-semibold">Gedung Daerah</p>
					<p>Jalan Maharaja Indra</p>
					<button className="p-3 rounded-md bg-[#e0bb7f] text-white flex justify-center items-center gap-x-1">
						<GiPositionMarker className="text-xl" />
						<span>Open Maps</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default InformationEvent;
