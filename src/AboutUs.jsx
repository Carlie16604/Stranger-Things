import { Route, Routes, Link } from 'react-router-dom'
import Contact from './contact.jsx';

const AboutUs = ()=> {
  return (
    <div className='about'>
      <h4>Welcome to Stranger Things</h4>
      <p> It's spooky season so you know what that means: pumpkin spice is back. Pray for all those who cannot live without it and their bank accounts.</p>
      <p>If you or a loved one suffers a crippling addiction for pumpkin spice, please reach out to us here:</p>
      <Link to='/contact'>Contact Us!</Link>
        <Routes>
          <Route path='/contact' element={ <Contact />} />
        </Routes>
    </div>
  );
};

export default AboutUs;
