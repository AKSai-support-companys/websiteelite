import React, { useState } from 'react';
import './EngagementModels.css';

const EngagementModels: React.FC = () => {
  const [focusedModule, setFocusedModule] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      title: "Strategic Implementation",
      subtitle: "Enterprise Rollout Framework",
      description: "Phased deployment protocols designed to minimize operational disruption while maximizing system adoption across organizational hierarchies.",
      focusArea: "Implementation strategy aligned with enterprise change management protocols",
      metrics: ["Adoption Rate", "System Integration", "Risk Mitigation"]
    },
    {
      id: 2,
      title: "Performance Optimization",
      subtitle: "Operational Efficiency Systems",
      description: "Continuous monitoring and refinement processes that calibrate system performance against established KPIs and strategic objectives.",
      focusArea: "Data-driven optimization through predictive performance modeling",
      metrics: ["KPI Achievement", "Efficiency Gains", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Governance Framework",
      subtitle: "Compliance & Oversight",
      description: "Structured governance protocols ensuring system operations align with regulatory requirements and internal policy frameworks.",
      focusArea: "Regulatory compliance through automated oversight mechanisms",
      metrics: ["Compliance Score", "Audit Readiness", "Policy Adherence"]
    },
    {
      id: 4,
      title: "Scalability Architecture",
      subtitle: "Growth & Adaptation Systems",
      description: "Infrastructure designed for horizontal and vertical scaling, accommodating organizational growth and evolving operational requirements.",
      focusArea: "Adaptive architecture supporting enterprise expansion",
      metrics: ["Scalability Index", "Resource Utilization", "Growth Accommodation"]
    }
  ];

  return (
    <section className="section engagement-section perspective-container">
      <div className="engagement-content">
        <div className="section-header">
          <h2 className="strategic-headline engagement-headline">
            Enterprise Alignment Modules
          </h2>
          <p className="strategic-copy engagement-subhead">
            Operational frameworks engineered to align autonomous systems 
            with enterprise strategic objectives and governance requirements.
          </p>
        </div>
        
        <div className="focus-dim-container">
          {models.map((model, index) => (
            <div
              key={model.id}
              className={`engagement-module ${
                focusedModule === index ? 'focused' : 'dimmed'
              }`}
              onMouseEnter={() => setFocusedModule(index)}
              onMouseLeave={() => setFocusedModule(null)}
            >
              <div className="module-content depth-transform">
                <div className="module-header">
                  <h3 className="module-title">{model.title}</h3>
                  <span className="module-subtitle">{model.subtitle}</span>
                </div>
                
                <div className="module-body">
                  <p className="module-description">{model.description}</p>
                  <div className="focus-area">
                    <span className="focus-label">Focus Area:</span>
                    <span className="focus-description">{model.focusArea}</span>
                  </div>
                </div>
                
                <div className="module-metrics">
                  <h4 className="metrics-title">Key Metrics</h4>
                  <div className="metrics-list">
                    {model.metrics.map((metric, metricIndex) => (
                      <span key={metricIndex} className="metric-item">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
