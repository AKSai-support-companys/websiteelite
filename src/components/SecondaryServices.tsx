import React, { useState } from 'react';
import './SecondaryServices.css';

const SecondaryServices: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Predictive Analytics",
      description: "Historical data streams processed through machine learning models to forecast operational trajectories and identify emerging patterns before they manifest as critical variables.",
      position: { x: -300, y: -150 }
    },
    {
      id: 2,
      title: "Risk Assessment",
      description: "Continuous monitoring of operational parameters against threat matrices, generating probability assessments and recommending proactive mitigation strategies.",
      position: { x: 300, y: -100 }
    },
    {
      id: 3,
      title: "Resource Optimization",
      description: "Dynamic allocation algorithms that redistribute computational and human resources based on real-time demand analysis and efficiency metrics.",
      position: { x: -200, y: 150 }
    },
    {
      id: 4,
      title: "Compliance Monitoring",
      description: "Automated surveillance of regulatory frameworks and internal policies, ensuring operational adherence through continuous verification protocols.",
      position: { x: 200, y: 120 }
    }
  ];

  return (
    <section
      className="section secondary-services-section perspective-container"
      data-section="secondary-services"
      aria-label="Secondary services"
    >
      <div className="secondary-services-content">
        <div className="secondary__viz" data-secondary-viz aria-hidden="true">
          <svg
            className="secondary__svg"
            viewBox="0 0 820 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="data-line"
              data-data-line
              d="M20 190 C 180 70, 330 70, 480 150 S 710 220, 800 40"
            />
            <path
              className="data-line"
              data-data-line
              d="M20 60 C 180 200, 330 200, 480 110 S 690 10, 800 170"
            />
            <path
              className="data-line"
              data-data-line
              d="M120 210 C 200 120, 350 120, 430 180 S 650 240, 780 90"
            />
          </svg>
        </div>

        <div className="core-connection-point" aria-hidden="true">
          <div className="core-node"></div>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`floating-panel secondary-panel ${activePanel === index ? 'active' : ''}`}
            style={{
              transform: `translate(${service.position.x}px, ${service.position.y}px)`,
            }}
            onMouseEnter={() => setActivePanel(index)}
            onMouseLeave={() => setActivePanel(null)}
          >
            <div className="panel-header">
              <h3 className="strategic-headline panel-title">{service.title}</h3>
            </div>
            <div className="panel-content">
              <p className="strategic-copy panel-description">{service.description}</p>
            </div>
            <div className="connection-indicator"></div>
          </div>
        ))}

        <div className="secondary__labels" data-secondary-labels aria-label="Secondary service labels">
          {services.map((service) => (
            <div key={service.id} className="chip">
              {service.title}
            </div>
          ))}
        </div>

        <div className="section-headline">
          <h2 className="strategic-headline secondary-headline">Secondary Services Layer</h2>
          <p className="strategic-copy secondary-subhead">
            Auxiliary systems operating in parallel, extending core intelligence through specialized analytical
            frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondaryServices;
