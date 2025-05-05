"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboardIcon,
  HomeIcon,
  CreditCardIcon,
  CalendarIcon,
  HeartIcon,
  FileTextIcon,
  UserIcon,
  LogOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ClientSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setCollapsed(true)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const navItems = [
    {
      name: "Dashboard",
      href: "/cliente/dashboard",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
    },
    {
      name: "Meus Imóveis",
      href: "/cliente/imoveis",
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      name: "Financeiro",
      href: "/cliente/financeiro",
      icon: <CreditCardIcon className="h-5 w-5" />,
    },
    {
      name: "Visitas",
      href: "/cliente/visitas",
      icon: <CalendarIcon className="h-5 w-5" />,
    },
    {
      name: "Favoritos",
      href: "/cliente/favoritos",
      icon: <HeartIcon className="h-5 w-5" />,
    },
    {
      name: "Documentos",
      href: "/cliente/documentos",
      icon: <FileTextIcon className="h-5 w-5" />,
    },
    {
      name: "Meu Perfil",
      href: "/cliente/perfil",
      icon: <UserIcon className="h-5 w-5" />,
    },
  ]

  if (isMobile) {
    return null
  }

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-screen sticky top-0",
        collapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      <div className="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-emerald-800"
        >
          {collapsed ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />}
        </Button>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md transition-colors",
                  pathname === item.href ? "bg-emerald-50 text-emerald-800" : "text-gray-700 hover:bg-gray-100",
                  collapsed ? "justify-center" : "",
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className={cn(
            "text-red-600 hover:bg-red-50 hover:text-red-700 w-full",
            collapsed ? "justify-center px-2" : "justify-start",
          )}
        >
          <LogOutIcon className="h-5 w-5" />
          {!collapsed && <span className="ml-2">Sair</span>}
        </Button>
      </div>
    </div>
  )
}
