import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqList } from '../data';

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState(faqList[0]?.question ?? '');

  const toggle = (question: string) => setOpen(prev => (prev === question ? '' : question));

  return (
    <section className="service-faq">
      <div className="service-shell">
        <p className="service-kicker">FAQ</p>
        <h3 className="service-section__title">Everything You Need to Know</h3>

        <div className="service-faq__list">
          {faqList.map(item => {
            const isOpen = open === item.question;
            return (
              <div key={item.question} className={`service-faq__item ${isOpen ? 'is-open' : ''}`}>
                <button className="service-faq__button" onClick={() => toggle(item.question)}>
                  <span>{item.question}</span>
                  <ChevronDown className="service-faq__chevron" />
                </button>
                {isOpen && <p className="service-faq__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
