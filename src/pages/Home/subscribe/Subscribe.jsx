import { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic, e.g., sending the email to a server
      console.log('Email:', email);
      setEmail('');
    };
    return (
        <div>
             <section className=" bg-blue-300 p-4 md:p-20">
      <div className="max-w-full md:flex justify-between mx-auto">
        <h2 > <span className="md:text-xl text-white  font-bold mb-4" >Subscribe to our Newsletter</span >  <br /><span className="text-xs  text-white   mb-4">Be the first to know about new products, sales and promotions</span></h2>
        
        <form onSubmit={handleSubmit}>
          <div className="flex mt-4 md:mt-0">
            <input
              type="email"
              className="w-full bg-sky-200  rounded-full py-2 px-4 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className=" border-2 border-white border-dotted bg-pink-400 hover:bg-pink-600 text-white rounded-full py-2 px-4"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
        </div>
    );
};

export default Subscribe;