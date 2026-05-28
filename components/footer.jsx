import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
    <footer className="bg-muted/50 py-12 border-t border-grey-700">
        <div className="container mx-auto px-4 text-center text-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Website Description */}
                <div className="flex flex-col items-start text-left">
                    <Link href="/">
                        <Image
                            src={"/logo.png"}
                            alt="CareerLyze Logo"
                            width={5000}
                            height={1000}
                            className="h-12 py-1 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        CareerLyze is an AI career guidance platform that helps users explore career paths, build optimized resumes, generate tailored cover letters, and prepare for interviews using Gemini AI.
                    </p>
                </div>

                {/* Column 1 - Navigation Links  */}
                <div className="container mx-auto px-4 text-left text-foreground">
                    <h3 className="mb-3 font-bold">Explore our Website</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                        <li><Link href="/dashboard" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                    </ul>  
                </div>

                {/* Column 2 - Product links  */}
                <div className="container mx-auto px-4 text-left text-foreground">
                    <h3 className="mb-3 font-bold">Our Products</h3>
                    <ul className="space-y-2">
                        <li><Link href="/resume" className="text-muted-foreground hover:text-foreground">Resume Builder</Link></li>
                        <li><Link href="/interview" className="text-muted-foreground hover:text-foreground">Mock Interview</Link></li>
                        <li><Link href="/skill-analytics" className="text-muted-foreground hover:text-foreground">Skill Analytics</Link></li>
                    </ul>
                </div>

                {/* Column 3 - Social Media Links  */}
                <div className="container mx-auto px-4 text-left text-foreground">
                    <h3 className="mb-3 font-bold">Follow Us</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</Link></li>
                        <li><Link href="https://github.com/ahana4banerjee/CareerLyze" target="_blank" className="text-muted-foreground hover:text-foreground">GitHub</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-foreground">X</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Text  */}
                <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-gray-700 dark:text-gray-300">
                    <div>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                        &nbsp;&nbsp;
                        <Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
                    </div>
                    <p>© 2026 CareerLyze. All rights reserved. Made with ❤️ by ~ Ahana Banerjee</p>
                </div>
        </div>
    </footer>
    )
}