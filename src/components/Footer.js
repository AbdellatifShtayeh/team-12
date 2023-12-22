import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
      <div className="container">
        <nav>
          <a href="/about">About</a>
          <a href="/support">Support</a>
          <a href="/docs">Docs</a>
          <a href="/privacy">Privacy & terms</a>
        </nav>
        <span className="text-muted">©2023 Webestica All rights reserved.</span>
      </div>
    </footer>

    );
  }
  export default Footer;
