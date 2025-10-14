import React from 'react';
import { 
  Headphones, 
  Building2, 
  Hotel, 
  HardHat, 
  Monitor, 
  ShoppingCart, 
  Store, 
  Shield, 
  Pill, 
  Smartphone,
  Factory,
  Truck
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <Headphones />, name: "BPO" },
    { icon: <Building2 />, name: "Banking" },
    { icon: <Hotel />, name: "Hospitality" },
    { icon: <HardHat />, name: "Construction" },
    { icon: <Monitor />, name: "IT Services" },
    { icon: <Factory />, name: "FMCG" },
    { icon: <Store />, name: "Retail" },
    { icon: <Shield />, name: "Insurance" },
    { icon: <Pill />, name: "Pharmaceutical" },
    { icon: <ShoppingCart />, name: "E-commerce" },
    { icon: <Truck />, name: "Logistics" },
    { icon: <Smartphone />, name: "Telecom" }
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card fade-in">
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h4>{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;