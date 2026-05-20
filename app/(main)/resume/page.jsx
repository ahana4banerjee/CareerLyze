import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";

export default async function ResumePage() {
  const resume = await getResume();
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="container mx-auto py-4 sm:py-6 px-0 sm:px-4">
        <ResumeBuilder initialContent={resume?.content || ""} />
      </div>
    </div>
  );
}