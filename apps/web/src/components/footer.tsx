import { SOURCE_CODE_GITHUB_URL } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-dashed p-6">
      <p className="text-center text-sm text-balance">
        Built by{" "}
        <a
          className="font-medium underline underline-offset-4"
          href="https://chanhdai.com/?utm_source=react-wheel-picker"
          target="_blank"
          rel="noopener"
        >
          ncdai
        </a>
        . The source code is available on{" "}
        <a
          className="font-medium underline underline-offset-4"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
