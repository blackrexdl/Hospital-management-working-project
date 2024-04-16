import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          In this website doctor give the advise  and treatment for you . You can find here all kind of services that we provide.
          At Dental Dreams, we offer a wide range of services to ensure your
          smile is healthy and beautiful. Our team consists of highly trained.
        </p>
      </div>
      
      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Prescription"
          description="At HealthCare, we provide comprehensive prescription services to ensure you receive the medications you need for your health and well-being. Our experienced healthcare team works closely with you and your doctor to fulfill your prescriptions accurately and efficiently."
          icon={faTooth}
        />
         <InformationCard
          title="Insights for doctors"
          description="Collaborative Environment: Our hospital fosters a collaborative environment where doctors work together across specialties to provide comprehensive care for our patients. Through teamwork and shared expertise, we ensure the best outcomes for every individual we serve."
          icon={faTooth}
        />
          <InformationCard
           title="Gernal Info"
           description="Welcome to Healthcare, your trusted online healthcare platform. Our mission is to provide accessible and personalized healthcare services to individuals seeking expert medical advice and treatment. By using our platform."
           icon={faTooth}
         />
         <InformationCard
          title="How it Works"
          description="Healthcare App is designed to simplify healthcare access. You can choose a specialist, schedule an appointment, and engage in a virtual consultation. Our specialists offer personalized advice and treatment plans tailored to your needs. "
          icon={faTooth}
        />
        
      </div>
    </div>
  );
}

export default Info;
