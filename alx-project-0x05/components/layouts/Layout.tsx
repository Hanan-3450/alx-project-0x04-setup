// components/layout/Layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-lg font-bold">Splash App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Splash App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
