export function Footer() {
  return (
    <footer className="border-t p-4">
      <div className="container mx-auto">
        <p className="text-center text-sm text-balance">
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://www.linkedin.com/in/ncdai"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
          . The source code is available on{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://github.com/ncdai/react-wheel-picker"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
