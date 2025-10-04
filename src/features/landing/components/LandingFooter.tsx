const footerLinks = [
  {
    title: 'Product',
    links: ['Overview', 'Templates', 'Changelog', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Open Source'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Community', 'Tutorials', 'Support'],
  },
];

const LandingFooter = () => (
  <footer className="border-t border-border bg-background/80 px-6 py-16">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
      <div className="space-y-4">
        <p className="text-lg font-semibold uppercase tracking-[0.35em] text-text-primary">
          Code Buddy
        </p>
        <p className="text-sm text-text-secondary">
          Built with React, Tailwind, and pure focus on makers. Create without compromises.
        </p>
        <p className="text-sm text-text-secondary/70">� {new Date().getFullYear()} Code Buddy.</p>
      </div>
      {footerLinks.map((column) => (
        <div key={column.title} className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary">
            {column.title}
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            {column.links.map((link) => (
              <li key={link}>
                <a className="hover:text-white" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
);

export default LandingFooter;
