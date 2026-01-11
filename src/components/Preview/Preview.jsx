import { useRef, useState, useLayoutEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Download } from "lucide-react";
import Button from "../common/Button";
import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import AchievementsPreview from "./AchievementsPreview";
import ExperiencePreview from "./ExperiencePreview";

export default function Preview({ resume }) {
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ scale: 1, scaledHeight: 0 });

  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const targetWidth = 794; // 210mm in pixels at 96 DPI
        const newScale = containerWidth / targetWidth;

        // Get the height of the actual content and multiply by scale
        const contentHeight = contentRef.current.offsetHeight;

        setDimensions({
          scale: newScale,
          scaledHeight: contentHeight * newScale,
        });
      }
    };

    // Use ResizeObserver for better accuracy when window changes
    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    updateSize();
    return () => resizeObserver.disconnect();
  }, [resume]); // Re-run if resume content changes

  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "resume",
    pageStyle: `
      @page { 
        size: A4; 
        margin: 0; 
      }
      @media print {
        #preview {
          transform: scale(1) !important; // Reset scale for printing
          background-color: white !important; // Ensure white background
        }

        body {
          background-color: white !important; // Ensure white background
        }
      }
    `,
  });

  return (
    <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-900 gap-3">
      {/* Scrollable Area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 rounded-lg"
      >
        <div
          style={{
            height: `${dimensions.scaledHeight}px`, // Wraps the scaled content tightly
            width: "100%",
          }}
          className="relative"
        >
          <div
            ref={contentRef}
            id="preview"
            style={{
              width: "210mm",
              minHeight: "297mm",
              transform: `scale(${dimensions.scale})`,
              transformOrigin: "top left",
              fontSize: "11pt",
            }}
            className="bg-gray-50 flex flex-col gap-5 p-[15mm]"
          >
            {Object.keys(resume.personal).length > 0 && (
              <PersonalPreview personal={resume.personal} />
            )}
            {resume.education.length > 0 && <EducationPreview education={resume.education} />}
            {resume.experience.length > 0 && <ExperiencePreview experience={resume.experience} />}
            {resume.projects.length > 0 && <ProjectsPreview projects={resume.projects} />}
            {resume.skills.length > 0 && <SkillsPreview skills={resume.skills} />}
            {resume.achievements.description?.trim().length > 0 && (
              <AchievementsPreview achievements={resume.achievements} />
            )}
          </div>
        </div>
      </div>
      <Button onClick={reactToPrintFn}>
        <Download size={18} /> Download
      </Button>
    </div>
  );
}
