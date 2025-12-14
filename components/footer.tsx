"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-secondary to-secondary/95 text-secondary-foreground border-t border-border/20 transition-smooth">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4 group">
              <div className="w-9 sm:w-10 h-9 sm:h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg transition-smooth group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-sm sm:text-lg">G</span>
              </div>
              <span className="font-bold text-lg sm:text-xl group-hover:text-primary transition-smooth">Gastro</span>
            </Link>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              Delivering culinary excellence and unforgettable dining experiences to your doorstep.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-secondary-foreground text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {["About Us", "Careers", "Blog", "Press"].map((item) => (
                <li key={item}>
                  <Link href="/" className="opacity-75 hover:opacity-100 hover:text-primary transition-smooth">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-secondary-foreground text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link href="/" className="opacity-75 hover:opacity-100 hover:text-primary transition-smooth">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-secondary-foreground text-sm sm:text-base">Get in Touch</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-smooth">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span>support@gastro.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-smooth">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span>1-800-GASTRO-1</span>
              </li>
              <li className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-smooth">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6 sm:pt-8 mb-6 sm:mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm opacity-75">© 2025 Gastro. All rights reserved.</p>
          <div className="flex gap-2 sm:gap-3">
            {[
              { id: "facebook", icon: Facebook, href: "#" },
              { id: "twitter", icon: Twitter, href: "#" },
              { id: "linkedin", icon: Linkedin, href: "#" },
              { id: "github", icon: Github, href: "#" },
            ].map(({ id, icon: Icon, href }) => (
              <Link
                key={id}
                href={href}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-background/20 rounded-lg flex items-center justify-center hover:bg-background/30 hover:text-primary transition-smooth border border-background/30 active:scale-95"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
