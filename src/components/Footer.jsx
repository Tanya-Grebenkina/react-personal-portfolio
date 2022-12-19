import { Container, Col, Row } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
  return (
    <footer className="footer">
    <Container>
        <Row className="align-center">
          <MailchimpForm/> 
          <Col size={12} sm={6}>
          <a href="#home"><img src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center tet-sm-end">
            <div className="social-icon">
             {/* eslint-disable-next-line */}
              <a target="_blank" href="https://ua.linkedin.com/"><img src={navIcon1} alt="Icon" /></a> 
              {/* eslint-disable-next-line */}
              <a target="_blank" href="https://www.facebook.com/"><img src={navIcon2} alt="Icon" /></a> 
              {/* eslint-disable-next-line */}
              <a target="_blank" href="https://www.instagram.com/"><img src={navIcon3} alt="Icon" /></a> 
            </div>
            <p>CopyRight 2022. Tanya Grebenkina</p>
          </Col>
        </Row>
    </Container>
    </footer>
  );
}