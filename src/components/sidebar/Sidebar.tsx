"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Package2,
  ShoppingCart,
  Package,
  Bell,
  Home,
  TableProperties,
  PencilLine,
  Mail,
  Mailbox,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import localFont from "next/font/local";

export default function Sidebar() {
  const currentPath = usePathname();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-14 lg:h-[80px] lg:px-6">
            <Link href="/" className="flex items-center gap-2">
              <Mailbox className="h-6 w-6" />
              <span className="font-Tac_One text-4xl">Letter Tracking</span>
            </Link>
          </div>
          <div className="flex-1 my-5">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 max-w-xs transition duration-100 ease-in-out hover:scale-105 ${
                  currentPath === "/" ? "bg-muted" : ""
                }`}
              >
                <Home className="my-2 h-4 w-4" />
                Dashboard
              </Link>
              <Separator className="my-2" />
              <span className="m-2 text-gray-400">Activities</span>
              <Link
                href="./compose"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 max-w-xs transition duration-100 ease-in-out hover:scale-105 ${
                  currentPath === "/compose" ? "bg-muted" : ""
                }`}
              >
                <PencilLine className="h-4 w-4" />
                Compose Letter
              </Link>
              <Link
                href="./letterlist"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 max-w-xs transition duration-100 ease-in-out hover:scale-105 ${
                  currentPath === "/letterlist" ? "bg-muted" : ""
                }`}
              >
                <TableProperties className="h-4 w-4" />
                Letter List
              </Link>
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
