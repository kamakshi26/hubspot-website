import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Learn and grow with award-winning support and a thriving community
              behind you.
            </h5>
            <p>
              You don't have to go it alone. Master the inbound methodology and
              get the most out of your tools with HubSpot's legendary customer
              support team and a community of thousands of marketing and sales
              pros just like you. customers in over 120 countries growing their
              businesses with HubSpot
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Increase Your Traffic
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Ad Software</a>
              </li>
              <li>
                <a href="#!">Blog Software</a>
              </li>
              <li>
                <a href="#!">SEO Software</a>
              </li>
              <li>
                <a href="#!">Social Media Software</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Connect With Leads
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Find New Prospects</a>
              </li>
              <li>
                <a href="#!">Email marketing</a>
              </li>
              <li>
                <a href="#!">Email Tracking</a>
              </li>
              <li>
                <a href="#!">Sales Email Templates</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Support & Tools
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">HubSpot Partners</a>
              </li>
              <li>
                <a href="#!">HubSpot Templates</a>
              </li>
              <li>
                <a href="#!">Join a Local User Group</a>
              </li>
              <li>
                <a href="#!">Free Tools & Generators</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.hubspot.com/">HubSpot, Inc.</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
