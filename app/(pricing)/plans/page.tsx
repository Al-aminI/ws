// pages/pricing.tsx

import React from "react";
import PricingPage from "../../../components/pricing"; // Adjust the path accordingly

export default function Pricing() {
  // Mock data for pricing plans
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "29,900",
      features: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "No", "No", "No", "No"],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "49,900",
      features: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "No", "No", "Yes"],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "79,900",
      features: ["Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
    },
  ];

  return (
    <div>
      {/* Your other page content */}
      <section className="relative mt-44">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            {/* CTA box */}
            <div
              className="relative bg-purple-100 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
              data-aos="zoom-y-out"
            >
              <PricingPage plans={pricingPlans} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
