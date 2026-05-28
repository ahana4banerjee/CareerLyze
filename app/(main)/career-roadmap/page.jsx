"use client";

import { useState } from "react";
import { generateRoadmap } from "@/actions/roadmap";

export default function CareerRoadmapPage() {
  const [career, setCareer] = useState("");
  const [skills, setSkills] = useState("");

  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setRoadmap(null);

    if (!career || !skills) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const result = await generateRoadmap({
        career,
        skills,
      });

      if (result.error) {
        setError(result.error);
      } else {
        setRoadmap(result);

        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 200);
      }
    } catch (err) {
      setError(
        "Failed to generate roadmap. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10 text-white">
        {/* HERO */}
        <div className="mb-14 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
            AI Powered Career Planning
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold gradient-title leading-tight">
            Build Your Dream Career Path
          </h1>

          <p className="text-secondary text-lg mt-5 max-w-2xl mx-auto">
            Generate personalized AI-powered learning
            roadmaps with milestones, technologies,
            and career guidance tailored to your goals.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* CAREER */}
            <div>
              <label className="block font-semibold mb-2">
                Target Career
              </label>

              <select
                aria-label="Target Career"
                value={career}
                onChange={(e) =>
                  setCareer(e.target.value)
                }
                className="w-full bg-background border border-border rounded-2xl p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Career</option>

                <option value="Frontend Developer">
                  Frontend Developer
                </option>

                <option value="Backend Developer">
                  Backend Developer
                </option>

                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>

                <option value="Software Engineer">
                  Software Engineer
                </option>

                <option value="AI Engineer">
                  AI Engineer
                </option>

                <option value="Machine Learning Engineer">
                  Machine Learning Engineer
                </option>

                <option value="Data Scientist">
                  Data Scientist
                </option>

                <option value="Cybersecurity Engineer">
                  Cybersecurity Engineer
                </option>

                <option value="Cloud Engineer">
                  Cloud Engineer
                </option>

                <option value="DevOps Engineer">
                  DevOps Engineer
                </option>

                <option value="Mobile App Developer">
                  Mobile App Developer
                </option>

                <option value="Game Developer">
                  Game Developer
                </option>

                <option value="Blockchain Developer">
                  Blockchain Developer
                </option>

                <option value="UI/UX Designer">
                  UI/UX Designer
                </option>

                <option value="Product Manager">
                  Product Manager
                </option>

                <option value="QA Engineer">
                  QA Engineer
                </option>

                <option value="Site Reliability Engineer">
                  Site Reliability Engineer
                </option>
              </select>
            </div>

            {/* SKILLS */}
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2">
                Current Skills
              </label>

              <textarea
                aria-label="Current Skills"
                value={skills}
                onChange={(e) =>
                  setSkills(e.target.value)
                }
                placeholder="HTML, CSS, JavaScript, React..."
                className="w-full bg-background border border-border rounded-2xl p-3 h-36 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 gradient hover:opacity-90 transition-all duration-300 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>

                <span>
                  Generating AI Roadmap...
                </span>
              </div>
            ) : (
              "Generate Roadmap"
            )}
          </button>
        </form>

        {/* ERROR */}
        {error && (
          <div className="mt-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-2xl">
            {error}
          </div>
        )}

        {/* LOADING SKELETON */}
        {loading && (
          <div className="mt-12 space-y-6 animate-pulse">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-3xl p-8 h-52"
              />
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {!roadmap && !loading && (
          <div className="mt-16 text-center border-2 border-dashed border-border/50 rounded-3xl p-14 bg-card/20 backdrop-blur hover:border-primary/40 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              No Roadmap Generated Yet
            </h3>

            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Select your target career and current
              skills above, then trigger our AI engine to map out your personalized milestone path.
            </p>
          </div>
        )}

        {/* ROADMAP */}
        {roadmap?.phases && !loading && (
          <div className="mt-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold">
                {roadmap?.career || "Career"} Learning Path
              </h2>

              <p className="text-secondary mt-3">
                Follow this AI-generated roadmap step by step
              </p>
            </div>

            <div className="space-y-8">
              {roadmap.phases.map((phase, index) => (
                <div
                  key={index}
                  className="relative bg-card border border-border rounded-3xl p-8 shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-2 bg-primary rounded-l-3xl"></div>

                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {phase?.title || "Phase"}
                      </h3>

                      <p className="text-secondary text-sm mt-1">
                        Phase {index + 1}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* SKILLS */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4">
                        Skills to Learn
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {(phase?.skills || []).map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* TOOLS */}
                    <div>
                      <h4 className="font-semibold text-lg mb-4">
                        Technologies & Tools
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {(phase?.tools || []).map((tool, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MILESTONE */}
                  <div className="mt-8 bg-primary/5 border border-primary/10 rounded-2xl p-5">
                    <h4 className="font-semibold mb-2">Milestone</h4>

                    <p className="text-secondary leading-relaxed">
                      {phase?.milestone || "Complete this phase"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}