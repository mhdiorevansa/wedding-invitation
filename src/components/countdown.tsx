"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useAos from "@/hooks/useAos";

type CountDownTime = {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
};

const Countdown = () => {
	const [countDownTime, setCountDownTime] = useState<CountDownTime>({
		days: "00",
		hours: "00",
		minutes: "00",
		seconds: "00",
	});
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const getTimeDifference = (countDownDate: number) => {
		const currentTime = new Date().getTime();
		const timeDifference = countDownDate - currentTime;

		if (timeDifference < 0) {
			setCountDownTime({
				days: "00",
				hours: "00",
				minutes: "00",
				seconds: "00",
			});
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			return;
		}

		const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
			.toString()
			.padStart(2, "0");
		const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
			.toString()
			.padStart(2, "0");
		const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))
			.toString()
			.padStart(2, "0");
		const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000)
			.toString()
			.padStart(2, "0");

		setCountDownTime({ days, hours, minutes, seconds });
	};

	const startCountDown = useCallback(() => {
		const countDownDate = new Date(2025, 3, 1, 0, 0, 0).getTime();
		intervalRef.current = setInterval(() => {
			getTimeDifference(countDownDate);
		}, 1000);
	}, []);

	useEffect(() => {
		startCountDown();
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [startCountDown]);

	useAos({
		duration: 1000,
		easing: "ease-in-sine",
		offset: 100,
		once: true,
	});

	return (
		<div className="grid md:max-w-3xl md:mx-auto px-5 overflow-hidden">
			<div
				data-aos="fade-up"
				className="relative z-10 md:p-10 py-5 px-2 rounded-md bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-lg border border-slate-300">
				<div className="mb-10 space-y-5 text-center">
					<h1 className="md:text-4xl text-3xl font-semibold text-[#e0bb7f]">Upcoming Event</h1>
					<p>
						Kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji suci
						kami di hari yang bahagia.
					</p>
				</div>
				<div className="flex justify-center md:gap-x-8 gap-x-6 px-4">
					<div className="flex flex-col justify-center items-center gap-3">
						<span className="p-3 flex justify-center items-center bg-[#e0bb7f] text-white md:text-2xl font-semibold rounded-md">
							{countDownTime?.days}
						</span>
						<span className="text-sm font-bold">
							{countDownTime?.days === "01" ? "Hari" : "Hari"}
						</span>
					</div>
					<div className="flex flex-col justify-center items-center gap-3">
						<span className="p-3 bg-[#e0bb7f] text-white md:text-2xl font-semibold rounded-md">
							{countDownTime?.hours}
						</span>
						<span className="text-sm font-bold">
							{countDownTime?.hours === "01" ? "Jam" : "Jam"}
						</span>
					</div>
					<div className="flex flex-col justify-center items-center gap-3">
						<span className="p-3 bg-[#e0bb7f] text-white md:text-2xl font-semibold rounded-md">
							{countDownTime?.minutes}
						</span>
						<span className="text-sm font-bold">
							{countDownTime?.minutes === "01" ? "Menit" : "Menit"}
						</span>
					</div>
					<div className="flex flex-col justify-center items-center gap-3">
						<span className="p-3 bg-[#e0bb7f] text-white md:text-2xl font-semibold rounded-md">
							{countDownTime?.seconds}
						</span>
						<span className="text-sm font-bold">
							{countDownTime?.seconds === "01" ? "Detik" : "Detik"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
