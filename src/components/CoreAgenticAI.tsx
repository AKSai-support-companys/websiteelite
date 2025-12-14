import React from 'react';
import './CoreAgenticAI.css';

const CoreAgenticAI: React.FC = () => {
  return (
    <section className="section core-ai-section perspective-container">
      <div className="depth-transform">
        <div className="core-ai-content">
          <h1 className="strategic-headline core-headline">
            Autonomous Operational Intelligence
          </h1>
          <div className="core-copy-container">
            <p className="strategic-copy core-copy">
              The infrastructure operates independently. Decisions propagate through 
              analytical frameworks that function without human oversight, processing 
              operational data into strategic directives.
            </p>
            <p className="strategic-copy core-copy">
              Each system component self-optimizes against predefined parameters. 
              The network adapts to operational demands through predictive modeling, 
              executing protocols based on observed patterns rather than reactive measures.
            </p>
            <p className="strategic-copy core-copy">
              This is not automation. This is operational autonomy engineered to function 
              at strategic tempo, making calculated decisions that align with enterprise 
              objectives while maintaining operational security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreAgenticAI;
