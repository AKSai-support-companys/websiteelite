import React from 'react';

const PANELS = [
  {
    title: 'Identity',
    description: 'Auth, permissions, and policy enforcement at the perimeter.',
  },
  {
    title: 'Telemetry',
    description: 'Signals, traces, and live reliability metrics mapped to intent.',
  },
  {
    title: 'Orchestration',
    description: 'Flow control across tools, services, and autonomous agents.',
  },
  {
    title: 'Edge',
    description: 'Fast decisions close to the user, with secure synchronization upstream.',
  },
] as const;

export function SystemPanels() {
  return (
    <section className="section system" data-section="system" aria-label="System panels">
      <header className="section__header">
        <h2>System Panels</h2>
        <p>Panels emerge from depth as you scroll into view.</p>
      </header>
      <div className="system__grid" data-system-panels>
        {PANELS.map((panel) => (
          <article key={panel.title} className="system-panel" data-system-panel>
            <h3>{panel.title}</h3>
            <p>{panel.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SystemPanels;
