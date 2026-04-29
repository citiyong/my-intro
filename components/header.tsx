"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "서비스", href: "#expertise" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background border-b border-border" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              홍길동
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors ${
                  activeSection === item.href 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveSection(item.href)}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
                )}
              </a>
            ))}
          </nav>

          {/* Empty space for balance */}
          <div className="hidden md:block w-[100px]" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-8 pt-4">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
