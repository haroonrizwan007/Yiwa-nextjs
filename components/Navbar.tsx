'use client'

/* START: Navbar */
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = ['Home', 'Services', 'Membership', 'About', 'Resources', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const activeLink = pathname === '/' ? 'Home' : ''

  const openMenu = useCallback(() => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = useCallback(() => {
    menuOpen ? closeMenu() : openMenu()
  }, [menuOpen, openMenu, closeMenu])

  const handleNavClick = useCallback(
    () => {
      if (menuOpen) closeMenu()
    },
    [menuOpen, closeMenu]
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu()
    }
    const handleResize = () => {
      if (window.innerWidth > 900 && menuOpen) closeMenu()
    }
    document.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen, closeMenu])

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            YIWA<span>LOGISTICS</span>
          </div>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              {item === 'Home' ? (
                <Link
                  href="/"
                  className={activeLink === item ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : (
                <a
                  href="#"
                  className={activeLink === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick()
                  }}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-quote">Get Free Quote</button>
        </div>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          id="hamburger"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' active' : ''}`}
        id="mobileOverlay"
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' active' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <Link href="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon"></div>
            <div className="logo-text">
              YIWA<span>LOGISTICS</span>
            </div>
          </Link>
          <button className="close-btn" id="closeBtn" aria-label="Close menu" onClick={closeMenu}>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              {item === 'Home' ? (
                <Link
                  href="/"
                  className={activeLink === item ? 'active' : ''}
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : (
                <a
                  href="#"
                  className={activeLink === item ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick()
                  }}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-menu-actions">
          <button className="btn-quote">Get Free Quote</button>
        </div>
      </div>
    </>
  )
}
/* END: Navbar */
