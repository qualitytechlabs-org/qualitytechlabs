import React from 'react';
import { serviceTiles } from '../data';

const ServicesGrid: React.FC = () => {
  return (
    <section className="service-grid">
      <div className="service-shell">
        <p className="service-kicker">Our Services</p>
        <h3 className="service-section__title">Services that drive results</h3>
        <p className="service-body service-body--muted">
          Native, hybrid, or cross-platform. We make them fast, functional, and user-friendly.
        </p>

        <div className="service-grid__wrap">
          {serviceTiles.map((tile, idx) => (
            <div
              key={tile.title}
              className={`service-grid__card ${idx === 0 ? 'service-grid__card--featured' : ''}`}
            >
              <div className="service-grid__icon">
                <img src={tile.icon} alt="" />
              </div>
              <p className="service-grid__badge">{tile.badge}</p>
              <h5>{tile.title}</h5>
              <p className="service-grid__desc">{tile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
