"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ATSScore from "@/components/ats-score";
import ResumeForm from "./resume-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  Share2,
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Bell,
  Edit3,
  Eye,
  EyeOff,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ResumeBuilder({ initialContent }) {
  const [tone, setTone] = useState("Executive");
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch {
      alert("Could not copy link.");
    }
  };

  const [resumeData, setResumeData] = useState({
    fullName: "ALEXANDER VANCE",
    jobTitle: "SENIOR PRODUCT STRATEGIST & AI INTEGRATION LEAD",
    email: "alexander.vance@email.com",
    phone: "9876543210",
    location: "San Francisco, CA",
    showProfilePic: false,
    summary: "Strategic leader with 10+ years of experience scaling AI-driven consumer products. Proven track record in orchestrating cross-functional teams to deliver high-impact features that increased user retention by 42% at Global Tech Corp. Expert in LLM orchestration and ethical AI deployment.",
    links: [],
    expertise: "PRODUCT VISION, LLM ARCHITECTURE, AGILE/SCRUM",
    experience: [
      {
        title: "Principal Product Manager",
        company: "Nexus Dynamics",
        dates: "2020 — Present",
        description: "Led the digital transformation of 4 flagship products, resulting in a $12M ARR increase within 18 months.\nSpearheaded the integration of generative AI workflows into customer support, reducing response times by 65%.\nManaged a distributed team of 25+ engineers, designers, and data scientists across 3 continents.",
        highImpact: true
      },
      {
        title: "Senior Strategy Consultant",
        company: "Arcane Analytics",
        dates: "2016 — 2020",
        description: "Designed market entry strategies for 12 Fortune 500 clients in the emerging technology sector.\nPublished 3 whitepapers on the economic impact of machine learning in supply chain logistics.",
        highImpact: false
      }
    ],
    projects: [],
    education: [
      {
        degree: "MBA",
        school: "Stanford University",
        dates: "2014 — 2016"
      },
      {
        degree: "B.S. Computer Science",
        school: "MIT",
        dates: "2010 — 2014"
      }
    ]
  });

  return (
    <div className="flex flex-col h-full space-y-3 sm:space-y-4 pb-6 sm:pb-10">

      {/* Header Bar */}
      <div className="flex items-center justify-between mb-2 sm:mb-4 mt-2 px-2 sm:px-0 gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 text-foreground min-w-0">
          <Link href="/dashboard" className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex-shrink-0">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg sm:text-xl font-serif truncate">Resume Preview & Export</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          {isEditing && (
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setShowPreview(!showPreview)}
              title={showPreview ? "Hide Preview" : "Show Preview"}
            >
              {showPreview ? <EyeOff className="w-4 sm:w-5 h-4 sm:h-5" /> : <Eye className="w-4 sm:w-5 h-4 sm:h-5" />}
            </Button>
          )}
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="h-8 sm:h-10 text-xs sm:text-sm font-medium transition-all"
            variant={isEditing ? "secondary" : "default"}
          >
            {isEditing ? (
              <>
                <ArrowLeft className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                Back
              </>
            ) : (
              <>
                <Edit3 className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                Build Resume
              </>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
            <Bell className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex">
            <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
          <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-gradient-to-tr from-primary to-purple-400 border-2 border-primary/20 overflow-hidden flex-shrink-0 hidden sm:block">
            {/* Avatar Placeholder */}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">

        {/* Left Sidebar - Form Panel (Shows when editing) */}
        {isEditing && (
          <div className={`flex-shrink-0 transition-all duration-300 ${showPreview ? 'w-full xl:w-[400px]' : 'w-full flex-1'}`}>
            <ResumeForm initialData={resumeData} onUpdate={setResumeData} isExpanded={!showPreview} />
          </div>
        )}

        {/* Main Document Preview - Center */}
        {(!isEditing || showPreview) && (
          <div className="flex-1 flex justify-center overflow-x-hidden">
            <div className="w-full max-w-[800px] bg-card rounded-md shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.05)] border-x border-b border-border border-t-[6px] border-t-primary p-4 sm:p-6 lg:p-10 text-foreground min-h-[1056px] relative transition-all duration-300">
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-foreground uppercase">Professional Summary</h2>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-cyan-100 border-primary/20 text-[8px] sm:text-[10px] py-0 h-5 flex-shrink-0">
                    <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 mr-0.5 sm:mr-1" /> ai-optimized for faang
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                  {resumeData.summary || 'Your professional summary will appear here.'}
                </p>
              </div>

              {/* Experience */}
              {resumeData.experience && resumeData.experience.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-foreground uppercase mb-3 sm:mb-4">Professional Experience</h2>

                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="mb-4 sm:mb-5">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3 mb-1">
                        <div className="min-w-0">
                          <h3 className="font-bold text-foreground text-sm break-words">{exp.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground italic">{exp.company}{exp.dates && ` • ${exp.dates}`}</p>
                        </div>
                        {exp.highImpact && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[8px] sm:text-[10px] py-0 h-5 flex-shrink-0">
                            <TrendingUp className="w-2.5 sm:w-3 h-2.5 sm:h-3 mr-0.5 sm:mr-1" /> high impact score
                          </Badge>
                        )}
                      </div>
                      {exp.description && (
                        <ul className="list-disc list-outside ml-3 sm:ml-4 mt-2 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                          {exp.description.split('\n').map((line, i) => line.trim() ? <li key={i}>{line.trim()}</li> : null)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Projects */}
              {resumeData.projects && resumeData.projects.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-foreground uppercase mb-3 sm:mb-4">Projects</h2>

                  {resumeData.projects.map((proj, idx) => (
                    <div key={idx} className="mb-4 sm:mb-4">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="font-bold text-foreground text-sm break-words">
                          {proj.title}
                          {proj.url && <a href={proj.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs font-normal text-primary hover:underline">Link</a>}
                        </h3>
                      </div>
                      {proj.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">{proj.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Section: Expertise & Education */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div>
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-foreground uppercase mb-2 sm:mb-3">Expertise</h2>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {resumeData.expertise ? resumeData.expertise.split(',').map((skill, i) => skill.trim() ? (
                      <span key={i} className="text-[8px] sm:text-[10px] font-bold bg-secondary/50 text-muted-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">{skill.trim().toUpperCase()}</span>
                    ) : null) : (
                      <span className="text-[8px] sm:text-[10px] font-bold bg-secondary/50 text-muted-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">ADD SKILLS</span>
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold tracking-widest text-foreground uppercase mb-2 sm:mb-3">Education</h2>
                  <div className="space-y-1.5 sm:space-y-2">
                    {resumeData.education && resumeData.education.length > 0 ? resumeData.education.map((edu, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs sm:text-sm font-bold text-foreground break-words">{edu.degree}{edu.school && `, ${edu.school}`}</h3>
                        {edu.dates && <p className="text-[10px] sm:text-xs text-muted-foreground">{edu.dates}</p>}
                      </div>
                    )) : (
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-foreground break-words">ADD EDUCATION</h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Watermark/Verified Seal */}
              <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 opacity-10">
                <CheckCircle2 className="w-12 sm:w-24 h-12 sm:h-24 text-muted-foreground" />
              </div>

            </div>
          </div>
        )}

        {/* Right Sidebar - Refinement Panel (Hidden when editing) */}
        {!isEditing && (
          <div className="w-full xl:w-[350px] space-y-4 sm:space-y-6 px-2 sm:px-0">
            <div className="sticky top-24">
              <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 sm:mb-6">Refinement</h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Template Style */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground uppercase dark:text-muted-foreground">Template Style</label>
                  <Select defaultValue="silent">
                    <SelectTrigger className="w-full bg-secondary/30 border-border/50 text-foreground h-10 sm:h-12 text-sm">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="silent">Silent Power</SelectItem>
                      <SelectItem value="modern">Modern Edge</SelectItem>
                      <SelectItem value="classic">Classic Exec</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* AI Tone Adjustment */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground uppercase dark:text-muted-foreground">AI Tone Adjustment</label>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <Button
                      variant={tone === "Executive" ? "default" : "outline"}
                      className={`w-full text-xs sm:text-sm py-2 sm:py-2 h-auto ${tone === "Executive" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                      onClick={() => setTone("Executive")}
                    >
                      {tone === "Executive" && <Sparkles className="w-3 h-3 mr-1" />} Executive
                    </Button>
                    <Button
                      variant={tone === "Creative" ? "default" : "outline"}
                      className={`w-full text-xs sm:text-sm py-2 sm:py-2 h-auto ${tone === "Creative" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                      onClick={() => setTone("Creative")}
                    >
                      Creative
                    </Button>
                    <Button
                      variant={tone === "Technical" ? "default" : "outline"}
                      className={`w-full text-xs sm:text-sm py-2 sm:py-2 h-auto ${tone === "Technical" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                      onClick={() => setTone("Technical")}
                    >
                      Technical
                    </Button>
                    <Button
                      variant={tone === "Concise" ? "default" : "outline"}
                      className={`w-full text-xs sm:text-sm py-2 sm:py-2 h-auto ${tone === "Concise" ? 'bg-primary text-primary-foreground' : 'bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground'}`}
                      onClick={() => setTone("Concise")}
                    >
                      Concise
                    </Button>
                  </div>
                </div>

                {/* AI Recommendation */}
                <Card className="bg-primary/10 border-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Sparkles className="w-12 sm:w-16 h-12 sm:h-16 text-primary" />
                  </div>
                  <CardContent className="p-3 sm:p-4 relative z-10">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 text-primary font-bold text-xs sm:text-sm">
                      <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" /> AI RECOMMENDATION
                    </div>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                      Strengthening your &quot;Nexus Dynamics&quot; impact statements could increase your callback rate by <span className="text-primary font-bold">18%</span> for Director-level roles.
                    </p>
                  </CardContent>
                </Card>

              </div>

              {/* ATS Score */}
              <ATSScore content={initialContent || resumeData.summary} />

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                <Button onClick={handleDownloadPDF} className="w-full h-10 sm:h-14 text-xs sm:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300">
                  <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" /> Download PDF
                </Button>
                <Button variant="outline" onClick={handleShareLink} className="w-full h-10 sm:h-14 text-xs sm:text-base font-semibold bg-transparent border-border/50 hover:bg-secondary/50 text-foreground hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300">
                  <Share2 className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" /> Share Link
                </Button>
              </div>



            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Temporary icon to avoid import errors since it wasn't in the list
function TrendingUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
