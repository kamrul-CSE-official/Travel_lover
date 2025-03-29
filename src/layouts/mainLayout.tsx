import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main>
      {/* ✅ Header Section */}
     

      {/* ✅ Main Content Section */}
      <section className="flex-1 container mx-auto p-6">
        <Outlet />
      </section>

      {/* ✅ Footer Section */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-6">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default MainLayout;
