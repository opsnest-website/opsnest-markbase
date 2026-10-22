import { Menu, Search, X } from "lucide-react";

type Props = {
  query: string;
  onQueryChange: (query: string) => void;
  onHome: () => void;
  onMenu: () => void;
  menuOpen: boolean;
};

export default function TopBar({ query, onQueryChange, onHome, onMenu, menuOpen }: Props) {
  return (
    <header className="topbar">
      <button className="mobile-menu icon-button" aria-label="Toggle navigation" onClick={onMenu}>
        {menuOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
      <button className="brand" onClick={onHome} aria-label="Markbase home">
        <span className="brand-mark">M</span><span>mark<span className="brand-accent">base</span></span>
      </button>
      <span className="top-label">LEARNING STUDIO</span>
      <div className="search-box">
        <Search size={17} />
        <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search concepts, examples, commands…" aria-label="Search learning library" />
        {query && <button className="clear-search" onClick={() => onQueryChange("")} aria-label="Clear search"><X size={15} /></button>}
        {!query && <kbd>/</kbd>}
      </div>
      <button className="button button-light header-home" onClick={onHome}>Library home</button>
    </header>
  );
}
