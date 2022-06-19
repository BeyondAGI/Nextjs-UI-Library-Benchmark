import React from "react";
import Link from "next/link";
import { navLinks } from "../../data";

export default function Header() {
  return (
    <header className="text-center">
      <div className="brand">
        <h3>Navigation Menu</h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul id="ul_nav_bar">
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}