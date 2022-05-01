import React from "react";
import "../styles/footer.css";

class Footer extends React.Component {
  constructor() {
    super();
    this.displayQuickLinks = this.displayQuickLinks.bind(this);
    this.displayAboutThisSite = this.displayAboutThisSite.bind(this);
  }

  /**
   * display the about this website infomation in the footer
   *
   * @returns infomation about this website
   */
  displayAboutThisSite() {
    return (
      <div className="footer-group">
        <span> ABOUT THE SITE </span>
        <table>
          <tr>
            <td>Built for WWICA 2022 by AJ & MR</td>
            <td>
              We don't use cookies, track our users or display ads on this
              website.
            </td>
          </tr>
        </table>
      </div>
    );
  }

  /**
   * display quick links in the footer
   * 
   * TODO: add link url
   * @returns link to pages in the website
   */
  displayQuickLinks() {
    return (
      <div className="footer-group">
        <span>QUICK SITE LINKS </span>
        <table>
          <tr>
            <td>Management</td>
            <td>Privacy Policy</td>
          </tr>
          <tr>
            <td>Visiting the Mosque</td>
            <td>Donate - Support Your Masjid</td>
          </tr>
          <tr>
            <td>Funeral Arrangement</td>
            <td>Terms & Conditions</td>
          </tr>
          <tr>
            <td>Location / Contacts</td>
          </tr>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="page-footer">
        <this.displayQuickLinks></this.displayQuickLinks>
        <this.displayAboutThisSite></this.displayAboutThisSite>
      </div>
    );
  }
}

export default Footer;
