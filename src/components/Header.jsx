import Logo from "./svg/Logo.jsx";
import Github from "./svg/Github.jsx";
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-3">
      <div className="flex gap-2 items-center text-purple-900">
        <Logo></Logo>
        <h1 className="text-2xl font-bold">CVmaker</h1>
      </div>
      <Github className="fill-purple-900"></Github>
    </header>
  );
}
