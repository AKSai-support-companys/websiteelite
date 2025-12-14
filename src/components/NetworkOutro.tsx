export function NetworkOutro() {
  return (
    <section className="section network" data-section="network" aria-label="Network outro">
      <header className="section__header">
        <h2>Network</h2>
        <p>Final slow-down and fade is mapped to scroll.</p>
      </header>
      <div className="network__frame" data-network-frame>
        <div className="network__nodes" data-network-nodes aria-hidden="true">
          {new Array(12).fill(0).map((_, index) => (
            <span key={index} className="node" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetworkOutro;
