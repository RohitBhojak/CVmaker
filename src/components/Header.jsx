import Logo from "./svg/Logo.jsx";
import Github from "./svg/Github.jsx";
export default function Header() {
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-800 flex justify-between items-center p-4 shadow-mg">
      <div className="flex gap-2 items-center text-purple-800 dark:text-purple-500">
        <Logo width={60} height={60}></Logo>
        <h1 className="text-2xl font-bold">CVmaker</h1>
      </div>
      <a href="https://github.com/RohitBhojak/CVmaker">
        <Github className="fill-purple-800 dark:fill-purple-500"></Github>
      </a>
    </header>
  );
}
