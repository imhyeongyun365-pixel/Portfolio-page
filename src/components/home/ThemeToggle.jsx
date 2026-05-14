import { useTheme } from "../../context/ThemeContext";
import "./styles/ThemeToggle.scss";


export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="theme toggle"
    >
      {isDark ? (
        // moon icon
        <svg
          viewBox="0 0 24 24"
          className="theme-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.742 13.045A8 8 0 1110.955 3.258
            6.5 6.5 0 0020.742 13.045z"
            fill="#FFD84D"
          />
        </svg>
      ) : (
        // sun icon
        <svg
          viewBox="0 0 24 24"
          className="theme-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" fill="#FFB800" />

          <g stroke="#FFB800" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1.5" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22.5" />

            <line x1="1.5" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22.5" y2="12" />

            <line x1="4.2" y1="4.2" x2="6.7" y2="6.7" />
            <line x1="17.3" y1="17.3" x2="19.8" y2="19.8" />

            <line x1="17.3" y1="6.7" x2="19.8" y2="4.2" />
            <line x1="4.2" y1="19.8" x2="6.7" y2="17.3" />
          </g>
        </svg>
      )}
    </button>
  );
}