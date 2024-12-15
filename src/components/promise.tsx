import Image from "next/image";
import BackgroundImage from "./background-image";

const Promise = () => {
	return (
		<section>
			<div className="grid lg:grid-cols-3 relative z-10 h-[180vh] md:h-[80vh] lg:h-[79vh] xl:h-[83vh] lg:px-16 px-5 lg:space-x-10">
				<figure className="lg:col-span-1 relative flex items-center">
					<Image
						className="lg:relative lg:-top-24 drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]"
						src={"/images/korean-people.png"}
						alt="asset-img"
						width={500}
						height={500}
					/>
				</figure>
				<div className="md:col-span-2 md:py-8 space-y-5">
					<div className="flex flex-col lg:items-start lg:justify-start mb-9 text-center space-y-5">
						<h1 className="md:text-4xl text-3xl font-bold text-[#e0bb7f]">Promise</h1>
						<p className="w-full text-center lg:text-justify break-words hyphens-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis adipisci
							nobis praesentium iste ipsam sint dolore assumenda blanditiis id, ex quisquam saepe
							tenetur aspernatur consectetur optio dignissimos! Accusantium, reiciendis. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Omnis, cupiditate.
						</p>
					</div>
					<div className="grid md:grid-cols-2 md:gap-x-6 gap-y-6 lg:gap-y-0">
						<div className="w-full">
							<Image
								src={"/images/wedding-image-1.jpg"}
								alt="asset-img"
								width={500}
								height={500}
								className="h-52 object-cover rounded-md"></Image>
						</div>
						<div className="w-full">
							<Image
								src={"/images/wedding-image-2.jpg"}
								alt="asset-img"
								width={500}
								height={500}
								className="h-52 object-cover object-top rounded-md "></Image>
						</div>
					</div>
					<div className="text-center pb-36">
						<blockquote className="italic text-lg text-gray-600 space-y-3">
							<p>
								&ldquo;Love does not consist in gazing at each other, but in looking outward
								together in the same direction.&rdquo;
							</p>
							<p>
								&quot;사랑은 서로를 바라보는 것이 아니라 같은 방향을 향해 함께 바라보는
								것입니다.&quot;
							</p>
							<cite className="block mt-2 font-semibold">- Antoine de Saint-Exupéry</cite>
						</blockquote>
					</div>
				</div>
			</div>
			<BackgroundImage />
		</section>
	);
};

export default Promise;
