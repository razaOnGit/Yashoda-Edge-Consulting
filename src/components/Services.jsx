import React from 'react';
import { Users, Clock, TrendingUp, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users />,
      title: "Permanent Hiring",
      description: "Full-time recruitment solutions with comprehensive candidate screening and perfect job matching for long-term success."
    },
    {
      icon: <Clock />,
      title: "Contract Staffing", 
      description: "Flexible workforce solutions for project-based requirements with skilled professionals ready to deliver results."
    },
    {
      icon: <TrendingUp />,
      title: "Bulk Hiring",
      description: "Large-scale recruitment drives for rapid team expansion with streamlined processes and quality assurance."
    },
    {
      icon: <Target />,
      title: "Specialized Recruitment",
      description: "Industry-specific talent sourcing with deep domain expertise and extensive professional networks."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card slide-in-left">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="btn btn-primary">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;