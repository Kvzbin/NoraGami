import { Link } from "react-router-dom";

function Footer() {
  return (
    // 1. Changed to flex-col for mobile, md:flex-row for desktop
    // Added px-4 so it doesn't touch the screen edges on phones
    <div className="max-w-5xl mx-auto px-4 md:px-0 pt-20 pb-20 flex flex-col md:flex-row gap-12 md:gap-20">
      {/* Left Div (Logo & Policies) */}
      <div className="w-full md:w-1/2">
        {/* Responsive text size: 5xl on mobile, 5rem on desktop */}
        <h1 className="text-5xl md:text-[5rem] text-gray-400 font-semibold tracking-normal mb-6 md:mb-4">
          noraGami.
        </h1>

        <ul className="flex flex-wrap gap-4 mt-7 md:gap-8">
          {["privacy-policy", "Cookie-Policy", "Impressum", "Terms"].map(
            (elem) => (
              <Link
                key={elem}
                to={`/${elem}`}
                className="text-sm capitalize text-gray-400 hover:text-white transition-colors"
              >
                {elem.replace("-", " ")}
              </Link>
            ),
          )}
        </ul>
      </div>

      <div className="w-full md:w-1/2 py-4 flex flex-col sm:flex-row gap-10 sm:gap-8 md:gap-12 justify-between">
        <div className="flex gap-12 sm:gap-10">
          <div>
            <p className="mb-5 text-sm font-semibold text-gray-200">Socials</p>
            <ul className="flex flex-col gap-2">
              {[
                {
                  name: "instagram",
                  url: "https://www.instagram.com/your-username",
                },
                {
                  name: "twitter",
                  url: "https://www.twitter.com/your-username",
                },
                {
                  name: "linkedin",
                  url: "https://www.linkedin.com/in/your-username",
                },
              ].map((elem) => (
                <a
                  key={elem.name}
                  href={elem.url}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice for target="_blank"
                  className="capitalize text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {elem.name}
                </a>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold text-gray-200">SiteMap</p>
            <ul className="flex flex-col gap-2">
              {["Home", "work", "careers", "contact"].map((elem) => (
                <Link
                  key={elem}
                  to={`/${elem.toLowerCase()}`}
                  className="capitalize text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {elem}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote Div */}
        <div className="flex-1 text-left sm:text-right max-w-sm">
          <p className="text-xs font-bold text-gray-400 leading-relaxed">
            "Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand."
            <br />
            <span className="inline-block mt-2 text-gray-500">
              — Martin Fowler
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
