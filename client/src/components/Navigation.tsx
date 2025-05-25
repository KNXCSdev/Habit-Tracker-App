export default function Navigation() {
  return (
    <nav className="bg-backgroundPrimary flex items-center justify-between px-16 py-3 shadow-sm">
      <div className="flex items-center gap-2 text-4xl font-semibold">
        <a href="/">
          <img
            src="logoTrack.png"
            width={180}
            className="h-[3rem] w-[11rem] object-cover"
          />
        </a>
      </div>
      <ul className="flex space-x-12">
        <li>
          <a
            href="/features"
            className="hover:text-textSecondary text-textAccent text-lg transition-all hover:underline"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="/pricing"
            className="hover:text-textSecondary text-textAccent text-lg transition-all hover:underline"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/support"
            className="hover:text-textSecondary text-textAccent text-lg hover:underline"
          >
            Support
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <a
          href="/register"
          className="bg-textSecondary rounded-lg border border-none px-6 py-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-blue-700"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="bg-backgroundIcon text-textAccent rounded-lg border border-none px-6 py-2 font-semibold hover:cursor-pointer"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
