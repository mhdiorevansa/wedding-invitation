import { FaCopy } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";

const WeddingGift = () => {
	return (
		<section>
			<div className="relative w-full md:top-[-0.4rem] md:px-32 px-5 pt-16 pb-28 z-10">
				<div className="grid md:grid-cols-2 md:gap-x-20 gap-y-8">
					<div className="flex flex-col gap-y-8">
						<div className="flex flex-col gap-y-4 text-center" data-aos="fade-up">
							<h1 className="md:text-4xl text-3xl font-bold text-[#e0bb7f]">Wedding Gift</h1>
							<p>
								Apabila memberi adalah tanda kasih Anda, Anda bisa memberikan kado secara cashless /
								amplop digital ke rekening mempelai .
							</p>
						</div>
						<div
							data-aos="fade-right"
							className="relative z-50 md:p-10 p-5 rounded-md shadow-md border border-slate-300 w-full">
							<div className="gap-y-3 flex flex-col justify-center">
								<h1 className={`text-4xl font-semibold text-[#e0bb7f]`}>BNI</h1>
								<hr className="border-2" />
								<FcSimCardChip className="text-5xl" />
								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-y-1">
										<p className="font-semibold">12345678910</p>
										<p>a.n Abdel</p>
									</div>
									<div className="py-2 px-3 rounded-md bg-slate-500 flex gap-x-2 items-center">
										<FaCopy className="text-white text-lg" />
										<p className="text-white">Salin No. Rek</p>
									</div>
								</div>
							</div>
						</div>
						<div
							data-aos="fade-right"
							className="relative z-10 md:p-10 p-5 rounded-md shadow-lg border border-slate-300 w-full">
							<div className="gap-y-3 flex flex-col justify-center">
								<h1 className={`text-4xl font-semibold text-[#e0bb7f]`}>Mandiri</h1>
								<hr className="border-2" />
								<FcSimCardChip className="text-5xl" />
								<div className="flex items-center justify-between">
									<div className="flex flex-col gap-y-1">
										<p className="font-semibold">12345678910</p>
										<p>a.n Abdel</p>
									</div>
									<div className="py-2 px-3 rounded-md bg-slate-500 flex gap-x-2 items-center">
										<FaCopy className="text-white text-lg" />
										<p className="text-white">Salin No. Rek</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col md:gap-y-6 gap-y-8 text-center">
							<h1 data-aos="fade-up" className="md:text-4xl text-3xl font-bold text-[#e0bb7f]">
								Wishes
							</h1>
							<div
								data-aos="fade-right"
								className="w-full border border-slate-300 rounded-md shadow-md p-5 md:p-10 flex flex-col gap-y-5">
								<div className="flex flex-col gap-y-4 items-center">
									<h1>0 Comments</h1>
									{/* <div className="flex gap-x-5">
										<div className="py-3 rounded-md bg-slate-500 w-32">
											<p className="text-white">0</p>
											<p className="text-white">Hadir</p>
										</div>
										<div className="py-3 rounded-md bg-slate-300 w-32">
											<p className="text-white">0</p>
											<p className="text-white">Tidak Hadir</p>
										</div>
									</div> */}
								</div>
								<div className="flex flex-col gap-y-4">
									<input
										type="text"
										name=""
										className="border border-slate-300 py-1 px-3 rounded-md w-full"
										id=""
										placeholder="Masukkan nama anda"
									/>
									<textarea
										name=""
										className="border border-slate-300 py-2 px-3 rounded-md w-full h-24"
										id=""
										placeholder="Masukkan komentar anda"
									/>
									<button className="py-2 px-3 rounded-md bg-slate-500 text-white w-20">
										Kirim
									</button>
								</div>
								<hr className="border border-slate-300" />
								<h2 className="font-semibold text-xl text-start">Komentar</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeddingGift;
