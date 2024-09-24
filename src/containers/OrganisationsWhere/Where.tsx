import React from 'react';
import "./Where.scss";
import organisations from '../../Data/Experience'; 
import OrganisationCard from '../../components/OrganisationCard/OrganisationCard';

const Where: React.FC = () => {
  return (
    <>
    <h2 className = "where__title">Where I've worked</h2>
    <div className="where__content">
      {organisations.map((organisation, index) => (
        <OrganisationCard 
        key={index} 
        organisation={organisation.organisation}
        roles={organisation.roles} />
      ))}
    </div>
    </>
  );
};

export default Where;