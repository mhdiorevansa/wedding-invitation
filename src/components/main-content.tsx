import CoupleProfile from "./couple-profile";
import Promise from "./promise";
import EventSchedule from "./event-schedule";
import CTA from "./cta";

const MainContent = () => {
	return (
		<main>
			<Promise />
			<CoupleProfile />
			<EventSchedule />
			<CTA />
		</main>
	);
};

export default MainContent;
