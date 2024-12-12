import CoupleProfile from "./couple-profile";
import Promise from "./promise";
import EventSchedule from "./event-schedule";

const MainContent = () => {
	return (
		<main>
			<Promise />
			<CoupleProfile />
			<EventSchedule />
		</main>
	);
};

export default MainContent;
