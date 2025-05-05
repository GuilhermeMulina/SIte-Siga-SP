"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BellIcon, MenuIcon, UserIcon, LogOutIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function ClientNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Lógica de logout aqui
    router.push("/cliente/login")
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Siga Imóveis Logo" width={120} height={60} className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center ml-8 space-x-6">
              <Link href="/cliente/dashboard" className="text-gray-700 hover:text-emerald-800 font-medium">
                Dashboard
              </Link>
              <Link href="/cliente/imoveis" className="text-gray-700 hover:text-emerald-800 font-medium">
                Meus Imóveis
              </Link>
              <Link href="/cliente/financeiro" className="text-gray-700 hover:text-emerald-800 font-medium">
                Financeiro
              </Link>
              <Link href="/cliente/visitas" className="text-gray-700 hover:text-emerald-800 font-medium">
                Visitas
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <BellIcon className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-emerald-800"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/cliente/perfil">Meu Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cliente/imoveis">Meus Imóveis</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cliente/financeiro">Financeiro</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOutIcon className="h-4 w-4 mr-2" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/cliente/dashboard"
                className="px-2 py-1 text-gray-700 hover:text-emerald-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/cliente/imoveis"
                className="px-2 py-1 text-gray-700 hover:text-emerald-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meus Imóveis
              </Link>
              <Link
                href="/cliente/financeiro"
                className="px-2 py-1 text-gray-700 hover:text-emerald-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Financeiro
              </Link>
              <Link
                href="/cliente/visitas"
                className="px-2 py-1 text-gray-700 hover:text-emerald-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visitas
              </Link>
              <Link
                href="/cliente/perfil"
                className="px-2 py-1 text-gray-700 hover:text-emerald-800 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meu Perfil
              </Link>
              <button className="px-2 py-1 text-left text-red-600 font-medium flex items-center" onClick={handleLogout}>
                <LogOutIcon className="h-4 w-4 mr-2" />
                <span>Sair</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
