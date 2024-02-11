import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"
import Logo from 'public/rounded-logo-purple.svg'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={Logo}
          alt="Logo"
          width={40}
        />
        <span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
