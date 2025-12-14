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
    <section className="section secondary-services-section perspective-container">
      <div className="secondary-services-content">
        <div className="core-connection-point">
          <div className="core-node"></div>
        </div>
        
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`floating-panel secondary-panel ${
              activePanel === index ? 'active' : ''
            }`}
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
        
        <div className="section-headline">
          <h2 className="strategic-headline secondary-headline">
            Secondary Services Layer
          </h2>
          <p className="strategic-copy secondary-subhead">
            Auxiliary systems operating in parallel, extending core intelligence 
            through specialized analytical frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondaryServices;
