export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mt-20 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <img src="/images/logo.png" alt="" />
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-4">
            Other Healpful Website Links
          </h4>
          <div>
            <h4 className="hover:text-primary font-medium leading-none mb-6">
              <a href="https://wish-creator.netlify.app/" target="_blank">
                Wish Creator (Create Wishes)
              </a>
            </h4>

            <h4 className="hover:text-primary font-medium leading-none mb-6">
              <a href="https://dictomate.netlify.app/" target="_blank">
                Dicto Mate (Practice Dictations)
              </a>
            </h4>

            <h4 className="hover:text-primary font-medium leading-none mb-6">
              <a href="https://voicytext.netlify.app/" target="_blank">
                Voicy Text (Convert Text to Voice)
              </a>
            </h4>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-4">Contact Us</h4>
          <div>
            <h4 className="hover:text-primary font-medium leading-none mb-3">
              <a href="whatsapp://send?phone=+94710985154" target="_blank">
                <i className="bi bi-whatsapp pe-2 text-lg"></i> +94 71 098 5154
              </a>
            </h4>

            <h4 className="hover:text-blue-700 font-medium leading-none mb-3">
              <a
                href="https://www.facebook.com/people/DoxDesigner/61556561968928/"
                target="_blank"
              >
                <i className="bi bi-facebook pe-2 text-lg"></i> doxDesigner
              </a>
            </h4>

            <h4 className="hover:text-slate-700 font-medium leading-none mb-3">
              <a href="mailto:doxdeveloperhelpdesk@gmail.com" target="_blank">
                <i className="bi bi-envelope pe-2 text-lg"></i>{" "}
                doxdeveloperhelpdesk@gmail.com
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <p className="px-6 py-2 text-slate-100 font-semibold text-center text-sm">
          &copy; {currentYear} doxDesigner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
