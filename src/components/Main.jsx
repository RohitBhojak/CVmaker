import Preview from "./Preview/Preview.jsx";
import UserInfo from "./UserDetails/UserInfo.jsx";
import { useImmer } from "use-immer";
import example from "./example.js";
export default function Main() {
  const [resume, setResume] = useImmer({
    personal: {},
    education: [],
    projects: [],
    skills: [],
  });
  return (
    <main className=" p-5 lg:grid lg:grid-cols-2 lg:gap-5 ">
      <UserInfo resume={resume} setResume={setResume}></UserInfo>
      <Preview resume={example}></Preview>
    </main>
  );
}
