export const HeroSection = () => {
  return (
    <>
      <main className="hero-section main ">
        <div className="container">
          <div className=" banner-column ">
            <div className="banner-inner">
              <h1 className="heading-xl">
                All Your Files in One Secure Location.
              </h1>
              <p className="paragraph">
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="btn btn-darken btn-inline">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-img">
              <img
                className="banner-image"
                src="https://i.ibb.co/sVqYmS2/Illustration.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
