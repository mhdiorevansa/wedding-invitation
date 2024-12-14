"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAos = (options?: AOS.AosOptions) => {
	useEffect(() => {
		AOS.init(options);
		return () => AOS.refresh();
	}, [options]);
};

export default useAos;
