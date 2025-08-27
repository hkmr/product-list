"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Info,
  Menu,
  Moon,
  Package,
  Phone,
  ShoppingBag,
  ShoppingCart,
  Sun,
  User,
  X,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "products", label: "Products", icon: Package, href: "/products" },
  { id: "about", label: "About", icon: Info, href: "#about" },
  { id: "contact", label: "Contact", icon: Phone, href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [selectedMenu, setSelectedMenu] = useState("home");
  const { mounted, theme, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={
          "sticky top-0 left-0 right-0 z-30 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jaspercolin
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0">
                  Premium Store
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = selectedMenu === item.id;

                return (
                  <div onClick={() => setSelectedMenu(item.id)} key={item.id}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group relative ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                      <span className="font-medium">{item.label}</span>

                      <div
                        className={`absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-opacity duration-200 -z-10 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      ></div>
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 
                          transform hover:scale-110 group"
                  data-testid="theme-toggle"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600 group-hover:-rotate-12 transition-transform duration-200" />
                  )}
                </button>
              )}

              {/* Shopping Cart */}
              <button className="relative p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 transform hover:scale-110 group">
                <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </button>

              {/* User Account */}
              <button className="hidden cursor-pointer sm:flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 transform hover:scale-110 group">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="cursor-pointer lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg 
                          transition-all duration-200 transform hover:scale-110"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        selectedMenu={selectedMenu}
      />
    </>
  );
};

const MobileMenu = ({
  isOpen,
  onClose,
  selectedMenu,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedMenu: string;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Menu
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="p-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedMenu === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                />
                <span className="font-medium">{item.label}</span>
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
