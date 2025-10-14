import React, { useState, useEffect, useRef } from 'react';

const StatisticsCounter = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'projects', label: 'Projects Completed', target: 250, suffix: '+' },
    { key: 'clients', label: 'Happy Clients', target: 150, suffix: '+' },
    { key: 'experience', label: 'Years Experience', target: 10, suffix: '+' },
    { key: 'satisfaction', label: 'Client Satisfaction', target: 98, suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 40);
    });
  };

  return (
    <section className="statistics-counter" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.key} className="stat-card">
              <div className="stat-number">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;