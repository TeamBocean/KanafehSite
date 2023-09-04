import React from "react";

export default function Contact () {
  return (
    <section className="bg-black text-white p-4" id="contact">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8">
        <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center">
            
          </div>
        </div>
        
      </div>


      <div className="p-8 rounded-lg">
        <h1 className="text-center text-2xl pb-2 border-b-2 border-orange inline-block mx-auto mb-8">Contact Us</h1>
        <form action="https://formsubmit.co/bodybuddiespt@gmail.com" method="post" className="space-y-4">
          <input type="text" name="name" placeholder="Name" className="px-4 py-2 bg-white text-black w-full" />
          <input type="email" name="email" placeholder="Email" className="px-4 py-2 bg-white text-black w-full" required />
         <input type="number" name="phone" placeholder="Phone" className="px-4 py-2 bg-white text-black w-full" required />
          <textarea name="message" rows="6" placeholder="Message" className="px-4 py-2 bg-white text-black w-full" required></textarea>
          <button type="submit" className="px-4 py-2 bg-orange text-black">Send Message</button>
        </form>
      </div>

    </div>

    
  </section>
  

    

  )
}
