import React from 'react';
import './Stabilization.css';

const Stabilization: React.FC = () => {
  return (
    <section className="section stabilization-section perspective-container">
      <div className="depth-transform stabilization-content">
        <div className="stabilization-header">
          <h2 className="strategic-headline stabilization-headline">
            System Integration Protocol
          </h2>
        </div>
        
        <div className="stabilization-body">
          <div className="primary-copy">
            <p className="strategic-copy stabilization-text">
              The operational framework achieves equilibrium when autonomous systems 
              align with organizational imperatives through structured integration protocols.
            </p>
            <p className="strategic-copy stabilization-text">
              Each component operates within defined parameters, generating outputs that 
              contribute to strategic objectives without requiring constant human intervention.
            </p>
          </div>
          
          <div className="secondary-copy">
            <p className="strategic-copy stabilization-subtext">
              Implementation occurs through systematic deployment, monitored performance 
              evaluation, and iterative refinement based on operational metrics.
            </p>
            <p className="strategic-copy stabilization-subtext">
              The infrastructure is designed for sustained operation with minimal 
              oversight requirements.
            </p>
          </div>
        </div>
        
        <div className="stabilization-footer">
          <div className="final-statement">
            <p className="strategic-copy final-copy">
              Strategic autonomous systems. Operational intelligence at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stabilization;
