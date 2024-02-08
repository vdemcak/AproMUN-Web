export const Footer = () => {
  return (
    <footer className="mt-48 px-5 md:px-10">
      <hr />

      <div className="flex flex-col items-center justify-between gap-y-5 py-5 md:flex-row">
        <div className="flex items-center gap-x-5">
          <a href="https://www.instagram.com/apromun_2023/">
            <img src="/icons/social/instagram.svg" alt="Instagram contact" />
          </a>
          <a href="https://www.facebook.com/AproMUN">
            <img src="/icons/social/facebook.svg" alt="Facebook contact" />
          </a>
          <a href="mailto:secretariat@apromun.com">
            <img src="/icons/social/email.svg" alt="Email contact" />
          </a>
        </div>

        <span className="text-sm opacity-70 md:text-base">© 2023 AproMUN. All rights reserved.</span>
      </div>
    </footer>
  );
};
