import React from "react";

function FAQ() {
  return (
    <div className="container mt-5 mb-5">

      <h2 className="text-center fw-bold">
        Frequently Asked Questions
      </h2>

      <div className="accordion mt-5" id="faqAccordion">

        {/* 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">

            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              Is account opening free?
            </button>

          </h2>

          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, account opening is completely free with StockFlow.
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              What documents are required?
            </button>

          </h2>

          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              PAN card, Aadhaar card, and bank account are required.
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              How long does activation take?
            </button>

          </h2>

          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Account activation usually takes less than 24 hours.
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              Is StockFlow safe to use?
            </button>

          </h2>

          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, StockFlow follows secure and regulated investment standards.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQ;