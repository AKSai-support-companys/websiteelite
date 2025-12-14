import React from 'react';
import './EngagementModels.css';

const EngagementModels: React.FC = () => {
  const models = [
    {
      id: 1,
      title: 'Strategic Implementation',
      subtitle: 'Enterprise Rollout Framework',
      description:
        'Phased deployment protocols designed to minimize operational disruption while maximizing system adoption across organizational hierarchies.',
      focusArea: 'Implementation strategy aligned with enterprise change management protocols',
      metrics: ['Adoption Rate', 'System Integration', 'Risk Mitigation'],
    },
    {
      id: 2,
      title: 'Performance Optimization',
      subtitle: 'Operational Efficiency Systems',
      description:
        'Continuous monitoring and refinement processes that calibrate system performance against established KPIs and strategic objectives.',
      focusArea: 'Data-driven optimization through predictive performance modeling',
      metrics: ['KPI Achievement', 'Efficiency Gains', 'Cost Optimization'],
    },
    {
      id: 3,
      title: 'Governance Framework',
      subtitle: 'Compliance & Oversight',
      description:
        'Structured governance protocols ensuring system operations align with regulatory requirements and internal policy frameworks.',
      focusArea: 'Regulatory compliance through automated oversight mechanisms',
      metrics: ['Compliance Score', 'Audit Readiness', 'Policy Adherence'],
    },
    {
      id: 4,
      title: 'Scalability Architecture',
      subtitle: 'Growth & Adaptation Systems',
      description:
        'Infrastructure designed for horizontal and vertical scaling, accommodating organizational growth and evolving operational requirements.',
      focusArea: 'Adaptive architecture supporting enterprise expansion',
      metrics: ['Scalability Index', 'Resource Utilization', 'Growth Accommodation'],
    },
  ];

  return (
    <section
      className="section engagement-section perspective-container"
      data-section="engagement"
      aria-label="Engagement models"
    >
      <div className="engagement-content">
        <header className="section__header">
          <h2 className="strategic-headline engagement-headline">Enterprise Alignment Modules</h2>
          <p className="strategic-copy engagement-subhead">
            Operational frameworks engineered to align autonomous systems with enterprise strategic objectives and governance
            requirements.
          </p>
        </header>

        <div className="engagement__stack" data-engagement-stack>
          {models.map((model) => (
            <article key={model.id} className="engagement-module" data-engagement-module>
              <h3>{model.title}</h3>
              <p>{model.subtitle}</p>
              <p>{model.description}</p>
              <p>
                <strong>Focus Area:</strong> {model.focusArea}
              </p>
              <div className="metrics" aria-label="Key metrics">
                {model.metrics.map((metric) => (
                  <span key={metric} className="metric">
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
