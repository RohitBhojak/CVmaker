import Logo from "./svg/Logo.jsx";
import Github from "./svg/Github.jsx";
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <div className="flex gap-2 items-center text-purple-900">
        <Logo width={60} height={60}></Logo>
        <h1 className="text-2xl font-bold">CVmaker</h1>
      </div>
      <a href="https://github.com/RohitBhojak/CVmaker">
        <Github className="fill-purple-900"></Github>
      </a>
    </header>
  );
}
