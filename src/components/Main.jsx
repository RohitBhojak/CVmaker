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
    experience: [],
    achievements: [],
  });
  console.log(resume);
  return (
    <main className=" p-5 grid lg:grid-cols-2 gap-5 ">
      <UserInfo resume={resume} setResume={setResume}></UserInfo>
      <Preview resume={resume}></Preview>
    </main>
  );
}
