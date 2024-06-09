// PricingPage.tsx

import React from "react";
import styles from "../app/css/PricingPage.module.css"; // Import your CSS module for styling

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
}

interface PricingPageProps {
  plans: PricingPlan[];
}

const PricingPage: React.FC<PricingPageProps> = ({ plans }) => {
  return (
    <div className={styles.pricingPage}>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Choose the Right Plan for You</h1>
      </div>

      <div className={styles.pricingPlans}>
        <div>
          <br /> <br />
          <p className={styles.price}>Features</p>
          <ul>
            <li className="m-3 p-4">1. Credit Department</li>
            <li className="m-3 p-4">2. Operation Department</li>
            <li className="m-3 p-4">3. Internal Audit Department</li>
            <li className="m-3 p-4">4. IT Department</li>
            <li className="m-3 p-4">5. Enterprise Wide Risk Department</li>
            <li className="m-3 p-4">6. Administration Department</li>
            <li className="m-3 p-4">7. Dashboard Report Analytics</li>
            <li className="m-3 p-4">8. AI-Powered Report Generation</li>
            <li className="m-3 p-4">9. Advanced AI Features</li>
            <li className="m-3 p-4">10. Integrated Financial Analytics</li>
            <li className="m-3 p-4">11. Customizable Reporting</li>
          </ul>
        </div>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.pricingPlan}>
            <h2>{plan.name}</h2>
            <p className={styles.price}>N{plan.price}/month</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li className="m-3 p-4" key={index}>
                  {feature === "No" ? (
                    <p className="text-red-500">{feature}</p>
                  ) : (
                    <p className="text-green-500">{feature}</p>
                  )}
                </li>
              ))}
            </ul>

            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
