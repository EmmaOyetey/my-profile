import Carousel from "../../components/Carousel/Carousel";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";
import organisations from "../../data/Experience";
import { ExperienceType } from "../../types/experienceTypes";
import "../OrganisationsCarousel/OrganisationCarousel.scss";

const renderOrganisation = (organisation: ExperienceType) => (
  <OrganisationCard
    organisation={organisation.organisation}
    roles={organisation.roles}
  />
);

const OrganisationsCarousel = () => (
  <Carousel
    items={organisations}
    renderItem={renderOrganisation}
    itemsToShow={3}
    itemsToChange={3}
    className="carousel__organisation"
  />
);

export default OrganisationsCarousel;
