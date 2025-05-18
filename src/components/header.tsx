"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <Image src="/logo.png" alt="uTeach Logo" width={120} height={32} className="h-8 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-base font-medium text-gray-900 hover:text-orange-500 relative group">
            Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#" className="text-base font-medium text-gray-900 hover:text-orange-500 relative group">
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="#" className="text-base font-medium text-gray-900 hover:text-orange-500 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-base font-medium text-gray-900 hover:text-orange-500">
              Resources
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Documentation
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tutorials
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="#" 
            className="text-base font-medium text-gray-900 hover:text-orange-500 transition-colors duration-300"
          >
            Log In
          </Link>
          <Button 
            className="bg-white text-black hover:bg-gray-100 border border-gray-300 rounded-full px-6 
            transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
          >
            Sign Up Now
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link href="#" className="block text-base font-medium text-gray-900 hover:text-orange-500 py-2">
            Products
          </Link>
          <Link href="#" className="block text-base font-medium text-gray-900 hover:text-orange-500 py-2">
            Solutions
          </Link>
          <Link href="#" className="block text-base font-medium text-gray-900 hover:text-orange-500 py-2">
            Pricing
          </Link>
          <div className="py-2">
            <button 
              className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-orange-500"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                (e.currentTarget.nextElementSibling as HTMLElement)?.classList.toggle('hidden');
              }}
            >
              Resources
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="hidden mt-2 pl-4 space-y-2">
              <Link href="#" className="block text-sm text-gray-700 hover:text-orange-500 py-1">
                Documentation
              </Link>
              <Link href="#" className="block text-sm text-gray-700 hover:text-orange-500 py-1">
                Tutorials
              </Link>
              <Link href="#" className="block text-sm text-gray-700 hover:text-orange-500 py-1">
                Blog
              </Link>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">
            <Link 
              href="#" 
              className="text-base font-medium text-gray-900 hover:text-orange-500 py-2"
            >
              Log In
            </Link>
            <Button 
              className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6 py-2"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}