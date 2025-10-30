
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-auto fixed bottom-0 left-0 w-full shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} Employee Management System. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
