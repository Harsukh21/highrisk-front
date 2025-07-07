"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  // Don't render theme-dependent UI until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" aria-label="Toggle theme">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      <Sun className={
        "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" +
        (isDark ? " dark:-rotate-90 dark:scale-0" : "")
      } />
      <Moon className={
        "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" +
        (isDark ? " dark:rotate-0 dark:scale-100" : "")
      } />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 