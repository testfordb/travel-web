'use client';

const HomeSection: React.FC = () => {
  return (
    <section
      className="mx-auto mt-20 sm:mt-24 w-[90%] rounded-lg bg-[linear-gradient(rgba(17,17,17,0.7),rgba(17,17,17,0.7)),url(/Assets/Media/Images/Home-Background.jpg)] bg-cover bg-center flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] text-center pb-10 sm:pb-20"
      id="home"
    >
      <span
        className="font-bold text-transparent [-webkit-text-stroke:0.1rem_#fff] text-3xl sm:text-4xl block"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Welcome To
      </span>
      <h3
        className="text-4xl sm:text-6xl text-white mt-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        TravelBuddy
      </h3>
      <p
        className="max-w-xl sm:max-w-2xl mx-auto my-3 sm:my-4 text-sm sm:text-base text-[#aaa] leading-6 sm:leading-8"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        Variety Of Tour Packages, Best Deals & Personalised Services!
      </p>
      <a
        href="#book-form"
        className="inline-block mt-2 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-[#29d9d5] border border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Book Now
      </a>
    </section>
  );
};

export default HomeSection;
