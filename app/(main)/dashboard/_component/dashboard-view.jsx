"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { 
  Send, 
  Settings2, 
  Lightbulb, 
  Zap, 
  ArrowRight,
  MoreHorizontal,
  Clock,
  Briefcase
} from "lucide-react";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Skeleton card for loading state
const SkeletonCard = () => (
  <div className="rounded-2xl bg-card/50 border border-border/50 p-6 animate-pulse space-y-4">
    <div className="flex justify-between">
      <div className="h-10 w-10 rounded-xl bg-secondary/60" />
      <div className="h-5 w-20 rounded-full bg-secondary/60" />
    </div>
    <div className="space-y-2">
      <div className="h-6 w-3/4 rounded-lg bg-secondary/60" />
      <div className="h-4 w-1/2 rounded-lg bg-secondary/40" />
    </div>
    <div className="h-2 w-full rounded-full bg-secondary/60" />
  </div>
);

const DashboardView = ({ insights }) => {
  const { user, isLoaded } = useUser();
  const pathname = usePathname();

  // Show skeleton while Clerk is hydrating the session
  if (!isLoaded) {
    return (
      <div className="space-y-8 pb-10">
        {/* Header skeleton */}
        <div className="space-y-3 mt-4 animate-pulse">
          <div className="h-10 w-72 rounded-xl bg-secondary/60" />
          <div className="h-4 w-96 rounded-lg bg-secondary/40" />
        </div>
        {/* KPI skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
        {/* Bottom grid skeletons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="space-y-4">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    );
  }

  return (
    // Key on pathname forces React to remount this subtree on every route change,
    // so Framer Motion always replays the entry animation from initial="hidden".
    <motion.div
      key={pathname}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 pb-10"
    >
      {/* Header */}
      <div className="space-y-2 mt-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-serif">Welcome back, {user?.firstName || "User"}</h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Your AI career co-pilot has analyzed 12 new job opportunities matching your senior product design profile. Let&apos;s get you hired.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/80 rounded-xl">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-secondary">+12% vs last week</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Application Progress</h3>
                  <p className="text-sm text-muted-foreground mt-1">4 active, 2 interviews scheduled</p>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[40%]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/80 rounded-xl">
                  <Settings2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-1 bg-secondary/80 px-2 py-1 rounded-full">
                  <span className="text-xs text-muted-foreground">AI</span>
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-black">98</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Profile Strength</h3>
                  <p className="text-sm text-muted-foreground mt-1">Optimized for &quot;Lead Designer&quot; roles</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent border-border/50 hover:bg-secondary/50 transition-colors">
                  Improve Score
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all relative overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary/80 rounded-xl">
                  <Lightbulb className="w-5 h-5 text-secondary" />
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Interview Readiness</h3>
                  <p className="text-sm text-muted-foreground mt-1">Top 5% for technical scenarios</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-secondary/50 hover:bg-secondary/80 text-xs">System Design</Badge>
                  <Badge variant="secondary" className="bg-secondary/50 hover:bg-secondary/80 text-xs">UX Audit</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - AI Insights & Activity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-foreground font-serif">AI Insights & Activity</h3>
            <Button variant="link" className="text-primary text-sm p-0 h-auto font-medium">
              View all <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>

          <div className="relative pl-6 space-y-4 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-secondary">
            
            {/* Timeline Item 1 */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-6 top-5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">2 hours ago</span>
                    <span>•</span>
                    <span>Resume Optimization</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    AI refined your &quot;Experience&quot; section for the <span className="text-primary font-medium">Senior Designer</span> role at Google.
                    Quantified impact metrics improved by 40%.
                  </p>
                  <div className="flex gap-4 mt-3">
                    <button className="text-xs text-primary font-medium hover:underline">Compare Versions</button>
                    <button className="text-xs text-muted-foreground font-medium hover:text-foreground">Dismiss</button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-6 top-5 w-2 h-2 rounded-full bg-muted-foreground ring-4 ring-background" />
              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Yesterday</span>
                    <span>•</span>
                    <span>Interview Training</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    Successfully completed a mock behavioral interview. You scored <span className="font-medium">8.5/10</span> on conflict resolution answers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-6 top-5 w-2 h-2 rounded-full bg-secondary ring-4 ring-background" />
              <Card className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 text-xs text-secondary mb-2">
                    <span className="font-medium">3 days ago</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">New Match</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    New high-relevance job detected: <span className="text-primary font-medium">Staff Product Designer</span> at Anthropic. AI suggests applying before Friday.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* AI Catalyst */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-card/80 to-secondary/30 border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap className="w-24 h-24 text-primary" />
              </div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">AI Catalyst</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Generate a custom cover letter based on your latest resume and the target company&apos;s culture.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-foreground font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Zap className="w-4 h-4 mr-2" /> Generate Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Interviews */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-bold text-muted-foreground tracking-wider uppercase">Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  <div className="p-4 flex items-center gap-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                    <div className="bg-secondary/80 rounded-lg p-2 text-center min-w-[50px]">
                      <div className="text-[10px] text-muted-foreground uppercase font-bold">Oct</div>
                      <div className="text-lg font-bold text-foreground">12</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Product Design Loop</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Stripe • 2:00 PM</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center gap-4 hover:bg-secondary/20 transition-colors cursor-pointer">
                    <div className="bg-secondary/80 rounded-lg p-2 text-center min-w-[50px]">
                      <div className="text-[10px] text-muted-foreground uppercase font-bold">Oct</div>
                      <div className="text-lg font-bold text-foreground">14</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Coffee Chat</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Meta • 11:30 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default DashboardView;
