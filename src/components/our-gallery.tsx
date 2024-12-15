"use client";

import useAos from "@/hooks/useAos";
import Image from "next/image";

const OurGallery = () => {
	useAos({
		duration: 1000,
		easing: "ease-in-sine",
		offset: 100,
		once: true,
	});
	return (
		<section className="relative z-50 md:bottom-28 w-full overflow-hidden">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
				<path
					fill="#e0bb7f"
					fillOpacity="1"
					d="M0,64L120,74.7C240,85,480,107,720,117.3C960,128,1200,128,1320,128L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
			</svg>
			<div className="bg-[#e0bb7f] relative w-full md:top-[-0.4rem] md:px-32 px-5 pt-14 pb-20 md:pb-24 z-10">
				<h1
					data-aos="fade-up"
					className="md:text-4xl text-3xl font-bold text-center md:mb-16 mb-10 text-white">
					Our Gallery
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
					<div
						data-aos="fade-left"
						className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
						<a
							href=""
							className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
							<Image
								src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
								width={500}
								height={500}
								className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"></Image>
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						</a>
					</div>
					<div data-aos="fade-up" className="col-span-2 sm:col-span-1 md:col-span-2">
						<a
							href=""
							className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
							<Image
								src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
								width={500}
								height={500}
								className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"></Image>
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						</a>
						<div
							data-aos="fade-up"
							className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
							<a
								href=""
								className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
								<Image
									src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt=""
									width={500}
									height={500}
									className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"></Image>
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
							</a>
							<a
								href=""
								className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
								<Image
									src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt=""
									width={500}
									height={500}
									className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"></Image>
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
							</a>
						</div>
					</div>
					<div
						data-aos="fade-right"
						className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
						<a
							href=""
							className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
							<Image
								src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
								width={500}
								height={500}
								className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"></Image>
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						</a>
					</div>
				</div>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				className="absolute md:bottom-[-7rem] bottom-[-3rem]">
				<path
					fill="#e0bb7f"
					fillOpacity="1"
					d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,272C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
			</svg>
		</section>
	);
};

export default OurGallery;
