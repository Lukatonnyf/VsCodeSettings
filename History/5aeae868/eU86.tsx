import ThemeSwitcher from "@/providers/theme-switcher";


export default function SigIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-10">
      <div>
        <h1>Hello World</h1>
        <p>Sign In</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
