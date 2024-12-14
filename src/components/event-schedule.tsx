import Countdown from "./countdown";
import BackgroundImage from "./background-image";
import InformationEvent from "./information-event";

const EventSchedule = () => {
	return (
		<section className="relative top-3 md:gap-x-7 md:pt-40 pt-20 md:pb-28 pb-14 space-y-10">
			<InformationEvent />
			<Countdown />
			<BackgroundImage />
		</section>
	);
};

export default EventSchedule;
