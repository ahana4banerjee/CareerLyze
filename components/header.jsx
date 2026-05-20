import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { ThemeToggle } from "./theme-toggle";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="CareerLyze Logo"
            width={5000}
            height={1000}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Go to Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>
          </SignedIn>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2">
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">AI Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white text-foreground border border-gray-200 shadow-lg ring-1 ring-gray-100 dark:bg-card dark:border-border/50 dark:shadow-none dark:ring-0"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/resume"
                    className="flex items-center gap-2 cursor-pointer w-full text-gray-900 dark:text-primary-foreground hover:bg-secondary/50"
                >
                  <FileText className="h-4 w-4" />
                  <span>Resume Builder</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/interview"
                    className="flex items-center gap-2 cursor-pointer w-full text-gray-900 dark:text-primary-foreground hover:bg-secondary/50"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Mock Interview</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/skill-analytics"
                    className="flex items-center gap-2 cursor-pointer w-full text-gray-900 dark:text-primary-foreground hover:bg-secondary/50"
                >
                  <PenBox className="h-4 w-4" />
                  <span>Skill Analytics</span>
                </Link>
              </DropdownMenuItem>
              <div className="my-2 border-t border-gray-200 dark:border-border/50" />
              <DropdownMenuItem asChild>
                <Link
                  href="/settings"
                    className="flex items-center gap-2 cursor-pointer w-full text-gray-900 dark:text-primary-foreground hover:bg-secondary/50"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
