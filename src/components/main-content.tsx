import CoupleProfile from "./couple-profile";
import Promise from "./promise";
import EventSchedule from "./event-schedule";
import CTA from "./cta";
import OurStory from "./our-story";
import OurGallery from "./our-gallery";

const MainContent = () => {
	return (
		<main>
			<Promise />
			<CoupleProfile />
			<EventSchedule />
			<CTA />
			<OurStory />
			<OurGallery />
		</main>
	);
};

export default MainContent;
