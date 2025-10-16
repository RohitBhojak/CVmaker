import UserInfo from "./UserInfo.jsx";
import Preview from "./Preview.jsx";
import { useImmer } from "use-immer";
export default function Main() {
  const [resume, setResume] = useImmer({
    personal: {},
    education: [],
    projects: [],
    skills: [],
  });
  return (
    <main className=" h-screen p-5 lg:grid lg:grid-cols-2 lg:gap-5 ">
      <UserInfo resume={resume} setResume={setResume}></UserInfo>
      <Preview resume={resume}></Preview>
    </main>
  );
}
