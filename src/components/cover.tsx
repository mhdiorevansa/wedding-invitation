"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import "animate.css";
import MainContent from "./main-content";

const dancingScriptFont = Dancing_Script({
	subsets: ["latin"],
	weight: "400",
});

const Cover = () => {
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const [coverVisible, setCoverVisible] = useState<boolean>(true);
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

	const handleButtonClick = () => {
		if (!audio) {
			const newAudio = new Audio("/audio/music.mp3");
			setAudio(newAudio);
			newAudio.play().catch((error) => {
				console.error("Audio playback failed:", error);
			});
		} else {
			audio.currentTime = 0;
			audio.play().catch((error) => {
				console.error("Audio playback failed:", error);
			});
		}
		setIsAnimating(true);
		setTimeout(() => {
			setCoverVisible(false);
		}, 1000);
	};

	return (
		<>
			<div
				className={`absolute inset-0 ${
					isAnimating ? "z-0 opacity-100 transition-opacity duration-1000" : "opacity-0"
				}`}>
				<MainContent />
			</div>
			{coverVisible && (
				<section
					className={`fixed top-0 w-full h-full overflow-hidden ${
						isAnimating ? "animate__animated animate__fadeOutUp" : ""
					}`}>
					<div className="absolute inset-0 bg-[url('/images/cover-wedding.png')] bg-cover bg-no-repeat bg-center"></div>
					<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					<div className="relative z-20 flex flex-col items-center justify-between h-full py-12 gap-y-6 px-3 md:px-0">
						<div className="text-center space-y-4">
							<h3 className={`text-white text-3xl font-bold ${dancingScriptFont.className}`}>
								The Wedding Of
							</h3>
							<h1 className="text-white md:text-6xl text-4xl font-bold">Hardika & Didi</h1>
							<h3 className="text-white text-2xl">16 April 2025</h3>
						</div>
						<div className="text-center text-white space-y-4">
							<h3 className="text-xl text-white">Undangan Spesial Untuk Anda</h3>
							<button
								className="p-2 mx-auto rounded-lg space-x-2 bg-[#e0bb7f] flex items-center transition duration-200 ease-in-out hover:scale-105"
								onClick={handleButtonClick}>
								<CiMail className="text-xl" />
								<span>Open Invitation</span>
							</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Cover;
