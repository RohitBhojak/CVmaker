import Preview from "./Preview/Preview.jsx";
import UserInfo from "./UserDetails/UserInfo.jsx";
import Tab from "./common/Tab.jsx";
import { useImmer } from "use-immer";
import { useState } from "react";
import { Eye, Pencil } from "lucide-react";

export default function Main() {
  const [resume, setResume] = useImmer({
    personal: {},
    education: [],
    projects: [],
    skills: [],
    experience: [],
    achievements: [],
  });

  const [activeTab, setActiveTab] = useState("editor");

  return (
    <main className="flex-1 p-5 flex flex-col h-full lg:overflow-hidden relative">
      <div className="lg:hidden flex bg-gray-200 dark:bg-gray-700 p-1 rounded-lg mb-4 shrink-0">
        <Tab
          onClick={() => setActiveTab("editor")}
          isActive={activeTab === "editor"}
        >
          <Pencil size={20} /> Editor
        </Tab>
        <Tab
          onClick={() => setActiveTab("preview")}
          isActive={activeTab === "preview"}
        >
          <Eye size={20} /> Preview
        </Tab>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 h-full overflow-hidden">
        <div
          className={`${
            activeTab === "editor" ? "block" : "hidden"
          } lg:block h-full overflow-hidden`}
        >
          <UserInfo resume={resume} setResume={setResume} />
        </div>

        <div
          className={`${
            activeTab === "preview" ? "block" : "hidden"
          } lg:block h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-y-auto`}
        >
          <Preview resume={resume} />
        </div>
      </div>
    </main>
  );
}
