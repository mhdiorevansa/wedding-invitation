"use client";

import useAos from "@/hooks/useAos";
import BackgroundImage from "./background-image";

const OurStory = () => {
	useAos({
		duration: 1000,
		easing: "ease-in-sine",
		offset: 100,
		once: true,
	});
	return (
		<section className="relative">
			<div className="relative w-full md:px-32 px-5 py-14 md:py-24 z-10">
				<h1
					data-aos="fade-up"
					className="md:text-4xl text-3xl font-bold text-center md:mb-16 mb-10 text-[#e0bb7f]">
					Our Story
				</h1>
				<div className="flex flex-col md:gap-y-3 gap-y-8">
					<div
						className="flex flex-col gap-y-3 md:w-1/2 md:self-start self-center text-center md:text-left relative z-10"
						data-aos="fade-left">
						<h1 className="text-xl font-semibold">November 2022</h1>
						<hr className="border-2 border-[#e0bb7f] md:w-1/2 w-44 mx-auto md:mx-0" />
						<p className="text-lg font-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis neque
							voluptatibus accusantium nobis dolor asperiores voluptatum, vero sint quo!
						</p>
					</div>
					<div
						className="flex flex-col gap-y-3 md:w-1/2 md:self-end self-center text-center md:text-left relative z-10"
						data-aos="fade-right">
						<h1 className="text-xl font-semibold">Desember 2022</h1>
						<hr className="border-2 border-[#e0bb7f] md:w-1/2 w-44 mx-auto md:mx-0" />
						<p className="text-lg font-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis neque
							voluptatibus accusantium nobis dolor asperiores voluptatum, vero sint quo!
						</p>
					</div>
					<div
						className="flex flex-col gap-y-3 md:w-1/2 md:self-start self-center text-center md:text-left relative z-10"
						data-aos="fade-left">
						<h1 className="text-xl font-semibold">April 2023</h1>
						<hr className="border-2 border-[#e0bb7f] md:w-1/2 w-44 mx-auto md:mx-0" />
						<p className="text-lg font-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis neque
							voluptatibus accusantium nobis dolor asperiores voluptatum, vero sint quo!
						</p>
					</div>
					<div
						className="flex flex-col gap-y-3 md:w-1/2 md:self-end self-center text-center md:text-left relative z-10"
						data-aos="fade-right">
						<h1 className="text-xl font-semibold">Oktober 2023</h1>
						<hr className="border-2 border-[#e0bb7f] md:w-1/2 w-44 mx-auto md:mx-0" />
						<p className="text-lg font-normal">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis neque
							voluptatibus accusantium nobis dolor asperiores voluptatum, vero sint quo!
						</p>
					</div>
				</div>
			</div>
			<BackgroundImage />
		</section>
	);
};

export default OurStory;
