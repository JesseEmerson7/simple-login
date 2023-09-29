const Footer = () => {
  return (
    <footer className=" hidden lg:flex justify-center text-sm font-semibold text-slate-300 flex-row items-center">
      <div className="flex flex-row w-full pr-10 mr-40 justify-center gap-5">
        <a className="hover:underline" href="http://www.techhelpline.com/">
          Computer Repair
        </a>
        <a href="https://forms.floridarealtors.org/index/accessibility">
          Accessibility
        </a>
      </div>
      <div className="flex flex-row w-1/5 gap-8">
        <a className="hover:fill-slate-600" href="https://github.com/JesseEmerson7">
          <svg
            className="h-4"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11.15 20"
          >
            <path d="M11.12,3.48H7.94c-.37,0-.79.49-.79,1.15V6.92h4v3.27h-4V20H3.4V10.19H0V6.92H3.4V5A4.71,4.71,0,0,1,7.81,0h3.3Z"></path>
          </svg>
        </a>
        <a className="hover:fill-slate-600" href="https://github.com/JesseEmerson7">
          <svg

            className="h-4"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.77 16.04"
          >
            <path d="M19.77,1.88a8.09,8.09,0,0,1-2.33.64A4.06,4.06,0,0,0,19.22.28a8.11,8.11,0,0,1-2.57,1A4.06,4.06,0,0,0,9.74,5,11.51,11.51,0,0,1,1.38.74,4.06,4.06,0,0,0,2.63,6.16,4,4,0,0,1,.79,5.65v0A4.06,4.06,0,0,0,4,9.7a4,4,0,0,1-1,.11,4.08,4.08,0,0,1-.76-.07A4.06,4.06,0,0,0,6,12.54a8.18,8.18,0,0,1-6,1.68A11.53,11.53,0,0,0,17.76,4.5V4A8.22,8.22,0,0,0,19.77,1.88Z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
