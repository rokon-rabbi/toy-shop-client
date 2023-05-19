import { Link } from "react-router-dom";
import Logo from "../../../src/assets/Logo.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-zinc-950 md:h-100 relative h-full  ">
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage: `url("https://assets.awwwards.com/awards/images/2019/05/illustration-web-design-2-cover.jpg")`,
            opacity: "0.07",
          }}
        ></div>
        <div className="col-span-12  relative pt-10 grid  ">
          <Link
            to={"/"}
            aria-label="Toytopia"
            title="Toytopia"
            className="flex justify-center"
          >
            <img
              className="w-32 md:w-40 md:h-12"
              src={Logo}
              alt="toytopia logo"
            />
          </Link>
        </div>
        <div className="  relative md:h-72 text-center md:px-8 grid md:grid-cols-12 px-14 py-5 md:py-14">
          <div className="col-span-4 p-2 md:p-0    h-32 grid">
            <p className="text-white font-bold  md:text-3xl">Contact</p>
            <p className="text-gray-300 text-sm">needhelp@toytopia.com</p>
            <p className="text-gray-300 text-sm">01750035431</p>
          </div>
          <div className="col-span-4 p-2 md:p-0  grid   h-32">
            <p className="text-white font-bold md:text-3xl">Address</p>
            <p className="text-gray-300 text-sm ">
              787 Mark View Street,
              <br />
              Natore,Rajshahi,
              <br />
              Bangladesh
            </p>
          </div>

          <div className="col-span-4 p-2 md:p-0 h-28  grid ">
            <p className="text-white font-bold md:text-3xl">Social</p>
            <div className="flex mx-auto gap-4">
              <a href="https://www.facebook.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer text-sky-300 "
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer text-red-600"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current cursor-pointer  text-sky-700"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-zinc-950  md:px-20 pt-2 pb-5">
        <p className="text-gray-300 text-center text-sm">
          @2023 Toytopia.com. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
