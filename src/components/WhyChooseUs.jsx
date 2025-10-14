import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Proven Expertise',
      description: 'Over 10 years of experience delivering successful business solutions across various industries.'
    },
    {
      icon: '⚡',
      title: 'Fast Implementation',
      description: 'Quick turnaround times without compromising on quality. Get results faster than traditional consulting.'
    },
    {
      icon: '🔧',
      title: 'Customized Solutions',
      description: 'Tailored strategies that fit your unique business needs and objectives.'
    },
    {
      icon: '📈',
      title: 'Measurable Results',
      description: 'Data-driven approach with clear KPIs and measurable outcomes for your investment.'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Continuous support and guidance throughout your business transformation journey.'
    },
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions leveraging the latest technologies and industry best practices.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Yashoda Edge?</h2>
        <p className="section-subtitle">
          We deliver exceptional value through our unique approach to business consulting
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;