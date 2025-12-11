import Logo from "./svg/Logo.jsx";
import Github from "./svg/Github.jsx";
export default function Header() {
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-800 flex justify-between items-center p-4 shadow-mg">
      <div className="flex gap-2 items-center text-purple-700 dark:text-purple-500">
        <Logo width={50} height={50}></Logo>
        <h1 className="text-4xl font-bold">CVmaker</h1>
      </div>
      <a href="https://github.com/RohitBhojak/CVmaker">
        <Github className="fill-purple-700 dark:fill-purple-500 hover:fill-purple-500 dark:hover:fill-purple-700"></Github>
      </a>
    </header>
  );
}
