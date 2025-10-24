import React from 'react';

const Team = () => {
    const leaders = [
        {
            id: 1,
            name: 'Mr. Ritesh Kumar Bharti',
            position: 'Founder & CEO',
            phone: '+91 9625120724',
            email: 'bhartiritesh256@gmail.com',
            linkedin: 'https://www.linkedin.com/in/ritesh-bharti-40367a244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            image: '/ritesh.jpg',
            description: 'Visionary leader with 10+ years of expertise in recruitment and workforce solutions across India.'
        },
        {
            id: 2,
            name: 'Mr. Nihal Srivastava',
            position: 'Managing Director',
            phone: '+91 9006943294',
            email: 'nihalsrivastava.ns@gmail.com',
            linkedin: 'https://www.linkedin.com/in/nihal-srivastava-017357301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            image: '/Nihal.jpg',
            description: 'Strategic director driving innovation in comprehensive staffing and recruitment solutions.'
        }
    ];

    return (
        <section className="team">
            <div className="container">
                <h2 className="section-title">Meet Our Leadership</h2>
                <p className="section-subtitle">
                    Our experienced leaders drive innovation in recruitment and workforce solutions across India.
                </p>

                <div className="team-grid">
                    {leaders.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-image-container">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                                <div className="team-overlay">
                                    <div className="team-social">
                                        <a href={`tel:${member.phone}`} className="social-link phone-link">
                                            📞
                                        </a>
                                        <a href={`mailto:${member.email}`} className="social-link">
                                            ✉️
                                        </a>
                                        <a href={member.linkedin} className="social-link">
                                            💼
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-position">{member.position}</p>
                                <p className="team-bio">{member.description}</p>

                                <div className="team-contact">
                                    <a href={`tel:${member.phone}`} className="contact-phone">
                                        {member.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;