import { useEffect } from "react";
import "./hero.css"; 

export default function Hero() {

  useEffect(() => {
  
    const hero = {
      element: document.querySelector(".hero"),
      titles: document.querySelectorAll(".hero_title_row_text"),
      media: document.querySelectorAll(".hero_media"),
      mediaImages: document.querySelectorAll(".hero_media_image"),
    };

    const init = () => {
      window.gsap.set(hero.titles, { autoAlpha: 0, yPercent: -101 });
      window.gsap.set(hero.media, { autoAlpha: 0, xPercent: -100, yPercent: -25 });
      window.gsap.set(hero.mediaImages, { xPercent: -100 });
      window.gsap.set(".nav_item_text", { yPercent: -100 });
      window.gsap.set(".hero_title_row:nth-child(3)", {
        xPercent: -50,
        x: "unset",
      });

      animateHero();
    };

    const animateHero = () => {
      const tl = window.gsap.timeline({
        defaults: {
          duration: 2,
          ease: "expo.inOut",
        },
      });

      tl.to(".nav_item_text", { yPercent: 0 })
        .to(hero.media, { autoAlpha: 1, xPercent: 0 })
        .to(
          hero.mediaImages,
          { xPercent: 0, stagger: 0.016 },
          0.16
        )
        .to(
          hero.titles,
          { autoAlpha: 1, yPercent: 0, stagger: 0.016 },
          2
        )
        .to(hero.media, { yPercent: 0 }, 2);
    };

    if (window.gsap) init();
  }, []);

  return (
    <section className="hero">
      <div className="hero_wrapper">

        <div className="hero_title">
          <div className="hero_title_row">
            <h2 className="hero_title_row_text">Unseen Scenario</h2>
          </div>
          <div className="hero_title_row">
            <h2 className="hero_title_row_text">Nature's Reclamation</h2>
          </div>
          <div className="hero_title_row">
            <h1 className="hero_title_row_text">The Effects of Tim</h1>
          </div>
        </div>

        <div className="hero_media">
          <div className="hero_media_wrapper">
            <img src="https://i.pinimg.com/736x/9a/94/99/9a9499027b75611c882e4d1229d3dff3.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/736x/6b/24/5f/6b245ff487b264227e81c32cac9bab29.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/736x/30/47/6f/30476ff375bf7ce057dc5a81ba94e69e.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/1200x/25/aa/81/25aa813cbcd027c11578535bdef2650c.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/1200x/dd/7f/42/dd7f421ab8b6f03aabe211182dca3bf3.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/1200x/02/8f/6f/028f6fab7df21d3d173ff0b7e29bac19.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/736x/30/72/2f/30722f60cf67681e2f08eb36fcb21d2a.jpg" className="hero_media_image" />
            <img src="https://i.pinimg.com/736x/32/a5/c2/32a5c20c2c04a4724d7845aaae687f01.jpg" className="hero_media_image" />
          </div>
        </div>

      </div>
    </section>
  );
}
