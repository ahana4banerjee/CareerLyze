import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import HeroSection from "@/components/hero";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import { stats } from "@/data/stats";

export const metadata = {
  title: "CareerLyze — AI-Powered Career Growth Platform",
  description:
    "Accelerate your career with AI-powered interview prep, resume analysis, and personalised career guidance. Join thousands of professionals.",
  openGraph: {
    title: "CareerLyze — AI-Powered Career Growth Platform",
    description:
      "Accelerate your career with AI-powered interview prep, resume analysis, and personalised career guidance.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLyze — AI-Powered Career Growth Platform",
    description:
      "Accelerate your career with AI-powered interview prep, resume analysis, and personalised career guidance.",
  },
};

export default function LandingPage() {
  return (
    <>
      <div className="grid-background"></div>

      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-foreground">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 bg-card"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-primary mb-4" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <h3 className="text-4xl font-bold text-foreground">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center border border-border/50 shadow-sm shadow-primary/5">
                  <div className="text-primary" aria-hidden="true">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
              
      <section className="w-full py-12 md:py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((item) => (
              <Card key={item.author} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={48}
                          height={48}
                          src={item.image}
                          alt={item.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.role}
                        </p>
                        <p className="text-xs text-primary font-medium mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative text-sm leading-relaxed">
                        <span
                          className="text-xl text-primary font-bold mr-1"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                        {item.quote}
                        <span
                          className="text-xl text-primary font-bold ml-1"
                          aria-hidden="true"
                        >
                          &rdquo;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
              
      <section className="w-full py-12 md:py-24 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question}
                  className="border-border/50"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors text-sm md:text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
                
      <section className="w-full py-12 px-4 md:px-6 bg-transparent">
        <div className="max-w-6xl mx-auto py-20 px-6 md:px-12 gradient rounded-3xl shadow-2xl shadow-primary/20">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-lg">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 mt-4 font-semibold text-secondary-foreground hover:scale-105 transition-transform shadow-lg"
            >
              <Link href="/dashboard">
                Start Your Journey Today{" "}

                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
