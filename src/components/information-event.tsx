import { GiPositionMarker } from "react-icons/gi";
import { Dancing_Script } from "next/font/google";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "700",
});

const InformationEvent = () => {
	return (
		<div className="grid md:grid-cols-2 max-w-3xl md:mx-auto gap-7 px-10">
			<div className="md:p-10 p-5 rounded-md bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-lg border border-slate-300 mx-auto relative z-10 w-full">
				<div className="space-y-4 flex flex-col items-center justify-center">
					<h1 className={`text-4xl font-semibold text-[#d3ad5c] ${dancingScriptFont.className}`}>
						Resepsi
					</h1>
					<p>Senin, 17 Agustus 1945</p>
					<p>08:00 WIB - Selesai</p>
					<p className="font-semibold">Gedung Daerah</p>
					<p>Jalan Maharaja Indra</p>
					<button className="p-3 rounded-md bg-[#d3ad5c] text-white flex justify-center items-center gap-x-1">
						<GiPositionMarker className="text-xl" />
						<span>Open Maps</span>
					</button>
				</div>
			</div>
			<div className="md:p-10 p-5 rounded-md bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-lg border border-slate-300 mx-auto relative z-10 w-full">
				<div className="space-y-4 flex flex-col items-center justify-center">
					<h1 className={`text-4xl font-semibold text-[#d3ad5c] ${dancingScriptFont.className}`}>
						Akad Nikah
					</h1>
					<p>Senin, 17 Agustus 1945</p>
					<p>08:00 WIB - Selesai</p>
					<p className="font-semibold">Gedung Daerah</p>
					<p>Jalan Maharaja Indra</p>
					<button className="p-3 rounded-md bg-[#d3ad5c] text-white flex justify-center items-center gap-x-1">
						<GiPositionMarker className="text-xl" />
						<span>Open Maps</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default InformationEvent;
