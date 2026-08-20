import Brand from './Brand';

export default function Footer() {
  return (
    <footer>
      <Brand />
      <p className="footer-copy">
        © {new Date().getFullYear()} Synitrix. Built with intent.
      </p>
      <a className="back-top" href="#top">
        Back to top ↑
      </a>
    </footer>
  );
}
