"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const isActive = (path: string) => (pathname === path ? "text-primary" : "text-foreground")

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm transition-smooth">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 sm:w-10 h-9 sm:h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md transition-smooth group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">G</span>
            </div>
            <span className="font-bold text-base sm:text-xl text-foreground hidden sm:inline group-hover:text-primary transition-smooth">
              Gastro
            </span>
          </Link>
          {/* Added buttons of login or signup if you want  */}
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className={`${isActive("/")} hover:text-primary transition-smooth font-medium text-sm lg:text-base`}
            >
              Home
            </Link>
            <Link
              href="/restaurants"
              className={`${isActive("/restaurants")} hover:text-primary transition-smooth font-medium text-sm lg:text-base`}
            >
              Restaurant
            </Link>
            <Link href="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-smooth" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-primary to-accent text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden shrink-0 transition-smooth">
            <div className="relative">
              {!isOpen ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px] animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fade-in">
            <div className="py-2 px-2 space-y-2">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-lg hover:bg-muted transition-smooth ${isActive("/")} font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/restaurants"
                className={`block px-3 py-2 rounded-lg hover:bg-muted transition-smooth ${isActive("/restaurants")} font-medium`}
                onClick={() => setIsOpen(false)}
              >
                Restaurants
              </Link>
              <Link
                href="/cart"
                className="px-3 py-2 rounded-lg hover:bg-muted text-foreground font-medium flex items-center gap-2 transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="w-4 h-4" />
                Cart ({cartCount})
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
