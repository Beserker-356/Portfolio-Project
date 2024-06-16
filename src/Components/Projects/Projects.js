import Project1 from "../../Images/project1.png";
import Project2 from "../../Images/project2.png";
import Project3 from "../../Images/project3.png";
import Project4 from "../../Images/project4.png";
import MusicApp from "../../Images/musicapp.png";
import HOC from "../../Images/hoc.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Projects.css";
import "swiper/css";
import "swiper/css/autoplay";

function Projects() {
  return (
    <div className="projects" id="projects">
      <p>
        Recent <span> Projects</span>
      </p>
      <div className="project-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          grabCursor={true}
          className="slider"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <a href="https://github.com/Beserker-356/Web-Game">
              <img src={Project1} alt="Web Game" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/Beserker-356/hackathon?tab=readme-ov-file">
              <img src={Project2} alt="HealthCare Project" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/Beserker-356/threeJS">
              <img src={Project3} alt="Three JS Website" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
