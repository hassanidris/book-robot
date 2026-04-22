"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Library",
    href: "/",
  },
  {
    label: "Add Book",
    href: "/books/new",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className=" w-full fixed z-50 bg-('--bg-primary')">
      <div className=" wrapper navbar-height py-4 flex justify-between items-center">
        <Link href="/" className=" flex gap-0.5 items-center">
          <Image
            src="/assets/logo.png"
            alt="Book Robot"
            width={42}
            height={26}
          />
          <span className="logo-text">Book Robot</span>
        </Link>

        <nav className=" w-fit flex gap-7.5 items-center">
          {navItems.map((item) => {
            const isActive =
              pathName === item.href ||
              (item.href !== "/" && pathName.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "nav-link-base",
                  isActive ? "nav-link-active" : " text-black hover:opacity-70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
