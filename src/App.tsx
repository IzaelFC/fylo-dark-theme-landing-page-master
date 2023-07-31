export default function App(){
  return (
    <div className="flex flex-col bg-[--background] text-white font-['Open Sans']">
      <header className="flex justify-between p-5">
        <img className="sm:w-40 w-20" src="/images/logo.svg" alt="" />
        <div className="flex sm:gap-5 gap-3 my-auto sm:text-base text-xs">
          <a href="">Features</a>
          <a href="">Team</a>
          <a href="">Sign In</a>
        </div>
      </header>

      <img className="mx-auto w-[50%]" src="/images/illustration-intro.png" alt="" />

      <h1 className="mx-auto px-5 my-10 text-center sm:text-4xl text-lg font-bold font-['Raleway']">All your files in one secure location, accessible anywhere.</h1>

      <p className="mx-auto mb-10 text-center sm:text-base text-sm sm:px-16 px-10 sm:w-[80%] font-['Raleway']">
        Fylo stores all your most important files in one secure location. Access them wherever
        you need, share and collaborate with friends family, and co-workers.
      </p>

      <button className="mx-auto bg-[#46BBCF] sm:w-[20%] w-[70%] sm:text-lg text-sm font-bold py-3 rounded-full">Get Started</button>

      <div className="grid sm:grid-cols-2 gap-20 w-[80%] my-40 mx-auto font-['Raleway']">
        <section className="grid gap-5 text-center">
          <img className="w-20 m-auto" src="/images/icon-access-anywhere.svg" alt="" />
          <div>
            <h1 className="mb-3 text-xl font-bold">Access your files, anywhere</h1>
            <p className="sm:px-14 sm:text-base text-sm">
              The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere.
            </p>
          </div>
        </section>

        <section className="grid gap-5 text-center">
          <img className="w-20 m-auto" src="/images/icon-security.svg" alt="" />
          <div>
            <h1 className="mb-3 text-xl font-bold">Security you can trust</h1>
            <p className="sm:px-14 sm:text-base text-sm">
              2-factor authentication and user-controlled encryption are just a couple of the security
              features we allow to help secure your files.
            </p>
          </div>
        </section>

        <section className="grid gap-5 text-center">
          <img className="w-20 m-auto" src="/images/icon-collaboration.svg" alt="" />
          <div>
            <h1 className="mb-3 text-xl font-bold">Real-time collaboration</h1>
            <p className="sm:px-14 sm:text-base text-sm">
              Securely share files and folders with friends, family and colleagues for live collaboration.
              No email attachments required.
            </p>
          </div>
        </section>

        <section className="grid gap-5 text-center">
          <img className="w-20 m-auto" src="/images/icon-any-file.svg" alt="" />
          <div>
            <h1 className="mb-3 text-xl font-bold">Store any type of file</h1>
            <p className="sm:px-14 sm:text-base text-sm">
              Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
              file types to be securely stored and shared.
            </p>
          </div>
        </section>
      </div>

      {/* ######################################################################################################### */}
      <div className="sm:flex gap-10 sm:px-14 md:px-20 px-10 mx-auto">
        <img className="sm:-ml-3 sm:w-[50%] md:w-[60%] lg:w-[90%]" src="/images/illustration-stay-productive.png" alt="" />

        <div className="my-auto space-y-5">
          <h1 className="sm:text-4xl text-xl font-bold font-['Raleway']">Stay productive, wherever you are</h1>
          
          <p className="sm:text-base text-sm">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.
          </p>

          <p className="sm:text-base text-sm">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.
          </p>

          <a className="flex gap-2 sm:w-[165px] w-[150px] text-[#46BBCF] sm:text-base text-sm border-b border-[#46BBCF]" href="">See how Fylo works<img src="/images/icon-arrow.svg"/></a>
        </div>
      </div>


      {/* Citaçoes */}

      <div className="sm:flex sm:gap-5 md:gap-10 lg:gap-14 mx-auto my-60 sm:px-10 md:px-20 lg:px-32 px-14 pb-40 z-0 sm:space-y-0 space-y-9">
        <img className="absolute z-[-1] sm:-mt-9 sm:-ml-3 ml-2" src="/images/bg-quotes.png" alt="" />
        <section className="bg-[--background-tm] p-6 space-y-5 rounded-[4px] shadow-2xl shadow-black">
          <p className="sm:text-base text-sm">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.
          </p>

          <div className="flex">
            <img className="w-10 h-10 my-auto mr-5 rounded-full" src="/images/profile-1.jpg" alt="" />
            <div>
              <h1 className="text-sm font-bold font-['Raleway']">Satish Patel</h1>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </section>

        <section className="bg-[--background-tm] p-6 space-y-5 rounded-[4px] shadow-2xl shadow-black">
          <p className="sm:text-base text-sm">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.
          </p>

          <div className="flex">
            <img className="w-10 h-10 my-auto mr-5 rounded-full" src="/images/profile-2.jpg" alt="" />
            <div>
              <h1 className="text-sm font-bold font-['Raleway']">Bruce McKenzie</h1>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </section>

        <section className="bg-[--background-tm] p-6 space-y-5 rounded-[4px] shadow-2xl shadow-black">
          <p className="sm:text-base text-sm">
            Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
            become a well-oiled collaboration machine.
          </p>

          <div className="flex">
            <img className="w-10 h-10 my-auto mr-5 rounded-full" src="/images/profile-3.jpg" alt="" />
            <div>
              <h1 className="text-sm font-bold font-['Raleway']">Iva Boyd</h1>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </section>
      </div>


      {/* FOOTER */}
      <footer className="bg-[--background-ft] pt-60 relative">
        <div className="flex flex-col gap-7 absolute top-0 -mt-40 p-10 bg-[--background-email] sm:mx-20 lg:mx-40 mx-5 rounded-lg shadow-2xl shadow-black">
          <h1 className="sm:text-4xl text-lg text-center font-bold font-['Raleway']">Get early access today</h1>
          <p className="sm:text-base text-sm mx-auto text-center font-['Raleway']">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.
          </p>

          <form className="sm:flex sm:gap-5 lg:gap-10 sm:px-5 lg:px-10" action="">
            <input className="sm:w-[70%] w-full text-black sm:pl-10 pl-3 sm:py-4 py-2 outline-none sm:text-sm text-xs focus:border focus:border-black rounded-full" type="email" placeholder="email@example.com" name="email" />
            <button className="bg-[#46BBCF] mx-auto sm:mt-0 mt-4 sm:w-[50%] w-full sm:py-4 py-2 text-center sm:text-sm text-xs font-bold rounded-full" type="submit">Get Started For Free</button>
          </form>
        </div>

        <img className="sm:w-[15%] w-[50%] ml-5" src="/images/logo.svg" alt="" />
        
        <div className="sm:flex gap-5 p-5 mx-auto">
          <div className="flex gap-3 sm:w-[30%]">
            <img className="w-5 h-5 mt-2" src="/images/icon-location.svg" alt="" />
            <p className="sm:text-sm md:text-base text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-3 mx-auto sm:mt-0 mt-5 sm:gap-10 md:gap-5 justify-between">
            <div className="space-y-5">
              <div className="flex gap-3">
                <img className="w-5 h-5 my-auto" src="/images/icon-phone.svg" alt="" />
                <p className="md:text-base text-sm">+1-543-123-4567</p>
              </div>

              <div className="flex gap-3">
                <img className="w-5 h-5 my-auto" src="/images/icon-email.svg" alt="" />
                <p className="md:text-base text-sm">example@fylo.com</p>
              </div>
            </div>

            <div className="sm:flex sm:gap-10 md:gap-20 sm:mt-0 mt-20 sm:space-y-0 space-y-10">
              <section className="flex flex-col sm:gap-5 gap-3">
                <a href="">About Us</a>
                <a href="">Jobs</a>
                <a href="">Press</a>
                <a href="">Blog</a>
              </section>

              <section className="flex flex-col sm:gap-5 gap-3">
                <a href="">Contact Us</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
              </section>
            </div>

            <div className="flex sm:justify-between items-start sm:mt-0 mt-10">
              <img className="w-10 p-2 sm:mx-0 mx-auto border border-white rounded-full" src="/images/icon-facebook.svg" alt="" />
              <img className="w-10 p-2 sm:mx-0 mx-auto border border-white rounded-full" src="/images/icon-twitter.svg" alt="" />
              <img className="w-10 p-2 sm:mx-0 mx-auto border border-white rounded-full" src="/images/icon-instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


/* Só melhorar para o tamanho md */