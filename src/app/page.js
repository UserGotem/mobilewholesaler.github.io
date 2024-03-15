// PROJECT IMPORTS
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
import Free from 'sections/landing/Free';
import Testimonial from 'sections/landing/Testimonial';
import Partner from 'sections/landing/Partner';
import ContactUs from 'sections/landing/ContactUs';
import SimpleLayout from 'layout/SimpleLayout';

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => (
  <SimpleLayout>
    <Hero />
    <Technologies />
    <Combo />
    <Apps />
    <Free />
    <Testimonial />
    <Partner />
    <ContactUs />
  </SimpleLayout>
);

export default Landing;
