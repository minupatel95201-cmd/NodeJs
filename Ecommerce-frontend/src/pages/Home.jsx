import React, { useEffect, useState } from "react";

import api from "../services/api";

import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  ArrowRight,
  Sofa,
  BedDouble,
  LampFloor,
  Armchair,
  ChefHat,
  Bath,
  Flower2,
  Monitor,
  Menu,
  User,

} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function EliteDecorHome() {
  
  const categories = [
    {
      title: "Living Room",
      icon: <Sofa size={34} />,
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bedroom",
      icon: <BedDouble size={34} />,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Lighting",
      icon: <LampFloor size={34} />,
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Office Decor",
      icon: <Monitor size={34} />,
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Kitchen",
      icon: <ChefHat size={34} />,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Bathroom",
      icon: <Bath size={34} />,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Decor Items",
      icon: <Flower2 size={34} />,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Chairs",
      icon: <Armchair size={34} />,
      image:
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const res = await api.get("/product/all");

      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToWishlist = async (productId) => {
    try {
      await api.post("/wishlist/add", {
        item: productId,
      });

      alert("Added To Wishlist");
    } catch (error) {
      console.log(error);

      alert("Login First");
    }
  };

  const addToCart = async (id) => {
    try {
      await api.post("/cart/add", {
        item: {
          productId: id,

          quantity: 1,
        },
      });

      alert("Added To Cart");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message);
    }
  };
  

  return (
    <div className="bg-[#f4f1ea] text-[#111] overflow-hidden">
      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <h1 className="text-3xl lg:text-4xl font-black tracking-tight">
            ELITE<span className="text-[#9d6b3f]">DECOR</span>
          </h1>

          <div className="hidden lg:flex items-center gap-10 uppercase tracking-[3px] text-sm font-medium">
            <a href="#" className="hover:text-[#9d6b3f] transition">
              Home
            </a>

            <Link
              to="/collections"
              className="
    hover:text-[#9d6b3f]
    transition
  "
            >
              Collections
            </Link>

            <Link
              to="/products"
              className="
    hover:text-[#9d6b3f]
    transition
  "
            >
              Products
            </Link>

            <Link
              to="/offers"
              className="
    hover:text-[#9d6b3f]
    transition
  "
            >
              Offers
            </Link>
            <Link
              to="/my-orders"
              className="
    hover:text-[#9d6b3f]
    transition
  "
            >
              My Orders
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Search className="cursor-pointer hover:text-[#9d6b3f]" />

            <Link to="/wishlist">
              <Heart className="cursor-pointer hover:text-[#9d6b3f]" />
            </Link>

            <Link to="/cart">
              <ShoppingCart className="cursor-pointer" />
            </Link>

            {/* LOGIN BUTTON */}
            <Link to="/login">
              <button
                className="
      hidden md:flex
      items-center
      gap-2
      bg-black
      text-white
      px-5
      py-3
      rounded-full
      hover:bg-[#9d6b3f]
      transition
    "
              >
                <User size={18} />
                <Link to="/JoinUs">Login</Link>
              </button>
            </Link>
            <Menu className="lg:hidden cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative">
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#d9c2a7] rounded-full blur-[120px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div>
            <span className="uppercase tracking-[8px] text-[#9d6b3f] text-sm">
              Luxury Home Decor Store
            </span>

            <h1 className="mt-8 text-6xl lg:text-[110px] font-black leading-[0.9]">
              Build
              <span className="block">Your Dream</span>
              <span className="text-[#9d6b3f]">Interior</span>
            </h1>

            <p className="mt-8 text-lg text-black/60 leading-relaxed max-w-2xl">
              Explore premium furniture, modern decor items, lighting, office
              interiors, kitchen accessories, bathroom decor and luxury living
              collections.
            </p>



            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link to="/products">
                <button className="bg-[#111] text-white px-8 py-4 rounded-full hover:bg-[#9d6b3f] transition flex items-center gap-2">
                  Shop Now
                  <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/products">
                <button
                  className="
      border
      border-black/10
      px-10
      py-5
      rounded-full
      hover:bg-black
      hover:text-white
      transition
    "
                >
                  Explore Catalog
                </button>
              </Link>
            </div>

            {/* STATS */}

            <div className="mt-16 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-5xl font-black">15k+</h3>

                <p className="text-black/50 mt-2">Customers</p>
              </div>

              <div>
                <h3 className="text-5xl font-black">5k+</h3>

                <p className="text-black/50 mt-2">Products</p>
              </div>

              <div>
                <h3 className="text-5xl font-black">4.9</h3>

                <p className="text-black/50 mt-2">Ratings</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-5">
                <div className="rounded-[45px] overflow-hidden h-70 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="bg-[#9d6b3f] rounded-[45px] p-8 text-white h-60 flex flex-col justify-between">
                  <div>
                    <p className="uppercase tracking-[4px] text-sm">Trending</p>

                    <h3 className="text-4xl font-black mt-4">
                      Modern Lighting
                    </h3>
                  </div>

                  <button className="flex items-center gap-2">
                    Explore
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="pt-16">
                <div className="rounded-[45px] overflow-hidden h-135 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
              Complete Home Collection
            </p>

            <h2 className="text-6xl font-black mt-4">Shop By Category</h2>
          </div>

          <button className="text-[#9d6b3f] font-semibold">View All</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-white
                rounded-[40px]
                overflow-hidden
                shadow-xl
                hover:-translate-y-3
                transition-all duration-500
              "
            >
              <div className="relative overflow-hidden h-70">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl text-white flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-black">{item.title}</h3>

                <Link
                  to={`/products/${item.title}`}
                  className="
    mt-5
    flex
    items-center
    gap-2
    text-[#9d6b3f]
    font-semibold
  "
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}

      <section className="bg-white/60 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-6xl font-black">Featured Products</h2>

            <Link to="/products">
              <button
                className="
      border
      border-black/10
      px-8
      py-4
      rounded-full
      hover:bg-black
      hover:text-white
      transition
    "
              >
                Browse All
              </button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {products.slice(0, 8).map((item) => (
              <div
                key={item._id}
                className="
            group
            bg-white
            rounded-[40px]
            overflow-hidden
            shadow-xl
            hover:-translate-y-3
            transition-all duration-500
            relative
          "
              >
                {/* WISHLIST ICON */}

                <button
                  className="
              absolute
              top-5
              right-5
              z-10
              w-12
              h-12
              rounded-full
              bg-white/80
              backdrop-blur-xl
              flex
              items-center
              justify-center
              shadow-lg
              hover:bg-[#9d6b3f]
              hover:text-white
              transition
            "
                >
                  <Heart
                    className="cursor-pointer hover:text-[#9d6b3f]"
                    onClick={() => addToWishlist(item._id)}
                  />
                </button>

                <div className="overflow-hidden">
                  <img
                    src={item.images?.[0]}
                    alt={item.name}
                    className="
                w-full
                h-87.5
                object-cover
                group-hover:scale-110
                transition duration-700
              "
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-black">{item.name}</h3>

                  <div className="flex justify-between items-center mt-5">
                    <p className="text-[#9d6b3f] text-2xl font-bold">
                      ₹ {item.price}
                    </p>

                    <button
                      onClick={() => addToCart(item._id)}
                      className="
    w-14
    h-14
    rounded-2xl
    bg-black
    text-white
    flex
    items-center
    justify-center
    hover:bg-[#9d6b3f]
    transition
  "
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PREMIUM FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-6xl font-black mt-4">Premium Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Free Shipping",
              desc: "Fast delivery on all products.",
              icon: "🚚",
            },
            {
              title: "Secure Payment",
              desc: "100% safe transactions.",
              icon: "💳",
            },
            {
              title: "Luxury Quality",
              desc: "Premium handcrafted furniture.",
              icon: "✨",
            },
            {
              title: "24/7 Support",
              desc: "Dedicated customer support.",
              icon: "🎧",
            },
          ].map((item) => (
            <div
              key={item._id}
              className="
                bg-white
                rounded-[40px]
                p-10
                shadow-xl
                text-center
                hover:-translate-y-3
                transition-all duration-500
              "
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="text-3xl font-black mt-8">{item.title}</h3>

              <p className="mt-4 text-black/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="bg-white/60 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="uppercase tracking-[6px] text-[#9d6b3f] text-sm">
              Testimonials
            </p>

            <h2 className="text-6xl font-black mt-4">What Clients Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Carter",
                review: "Amazing quality and elegant premium furniture.",
              },
              {
                name: "James Wilson",
                review: "Best luxury decor shopping experience.",
              },
              {
                name: "Emma Brown",
                review: "Beautiful modern interiors and fast delivery.",
              },
            ].map((item) => (
              <div
                key={item._id}
                className="
                  bg-white
                  rounded-[40px]
                  p-10
                  shadow-xl
                "
              >
                <div className="text-[#9d6b3f] text-2xl">★★★★★</div>

                <p className="mt-8 text-xl text-black/70 leading-relaxed">
                  "{item.review}"
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-black">{item.name}</h3>

                  <p className="text-black/40">Verified Buyer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEAL BANNER ================= */}

      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto relative rounded-[60px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1400&auto=format&fit=crop"
            alt=""
            className="w-full h-175 object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="px-10 lg:px-20 max-w-3xl text-white">
              <span className="uppercase tracking-[6px] text-[#e0c2a3]">
                Exclusive Sale
              </span>

              <h2 className="mt-8 text-7xl lg:text-[120px] font-black leading-none">
                50% OFF
              </h2>

              <p className="mt-8 text-xl text-white/70">
                Upgrade your interiors with premium furniture collections.
              </p>

              <Link to="/deals">

  <button
    className="
      bg-white
      text-black
      px-10
      py-5
      rounded-full
      text-xl
      hover:bg-[#9d6b3f]
      hover:text-white
      transition
    "
  >

    Shop Deals

  </button>
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#111] text-white rounded-t-[70px] overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

    {/* TOP SECTION */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

      {/* LOGO */}

      <div>

        <Link to="/">

          <h2 className="text-4xl font-black">

            ELITE
            <span className="text-[#9d6b3f]">

              DECOR

            </span>

          </h2>

        </Link>

        <p className="mt-6 text-white/50 leading-8">

          Premium home decor
          collections crafted
          for luxury interiors
          and modern lifestyle
          spaces.

        </p>

        {/* SOCIAL ICONS */}

        <div className="flex gap-4 mt-8">

  <button
    className="
      w-12
      h-12
      rounded-full
      bg-white/10
      flex
      items-center
      justify-center
      hover:bg-[#9d6b3f]
      transition
    "
  >

    <FaInstagram size={20} />

  </button>

  <button
    className="
      w-12
      h-12
      rounded-full
      bg-white/10
      flex
      items-center
      justify-center
      hover:bg-[#9d6b3f]
      transition
    "
  >

    <FaFacebookF size={20} />

  </button>

  <button
    className="
      w-12
      h-12
      rounded-full
      bg-white/10
      flex
      items-center
      justify-center
      hover:bg-[#9d6b3f]
      transition
    "
  >

    <FaTwitter size={20} />

  </button>

</div>
      </div>

      {/* COLLECTIONS */}

      <div>

        <h3 className="text-2xl font-bold mb-8">

          Collections

        </h3>

        <div className="flex flex-col gap-5 text-white/50">

          <Link
            to="/products/living-room"
            className="
              hover:text-[#9d6b3f]
              transition
            "
          >

            Living Room

          </Link>

          <Link
            to="/products/bedroom"
            className="
              hover:text-[#9d6b3f]
              transition
            "
          >

            Bedroom

          </Link>

          <Link
            to="/products/lighting"
            className="
              hover:text-[#9d6b3f]
              transition
            "
          >

            Lighting

          </Link>

          <Link
            to="/products/office-decor"
            className="
              hover:text-[#9d6b3f]
              transition
            "
          >

            Office Decor

          </Link>
        </div>
      </div>

      {/* SUPPORT */}

      <div>

        <h3 className="text-2xl font-bold mb-8">

          Support

        </h3>

        <div className="flex flex-col gap-5 text-white/50">

          <p className="hover:text-[#9d6b3f] transition cursor-pointer">

            Shipping

          </p>

          <p className="hover:text-[#9d6b3f] transition cursor-pointer">

            Privacy Policy

          </p>

          <p className="hover:text-[#9d6b3f] transition cursor-pointer">

            Contact

          </p>

          <p className="hover:text-[#9d6b3f] transition cursor-pointer">

            Help Center

          </p>
        </div>
      </div>

      {/* NEWSLETTER */}

      <div>

        <h3 className="text-2xl font-bold mb-8">

          Newsletter

        </h3>

        <p className="text-white/50 mb-6">

          Subscribe for exclusive
          offers and premium decor
          updates.

        </p>

        <form
          onSubmit={(e) => {

            e.preventDefault();

            alert(
              "Newsletter Joined Successfully!"
            );
          }}

          className="
            bg-white/10
            rounded-full
            overflow-hidden
            flex
            border
            border-white/10
          "
        >

          <input
            type="email"

            required

            placeholder="Enter Email"

            className="
              flex-1
              bg-transparent
              px-6
              py-5
              outline-none
              text-white
              placeholder:text-white/40
            "
          />

          <button
            type="submit"

            className="
              bg-[#9d6b3f]
              px-8
              hover:bg-[#b67c49]
              transition
            "
          >

            Join

          </button>
        </form>
      </div>
    </div>

    {/* BOTTOM */}

    <div
      className="
        border-t
        border-white/10
        mt-16
        pt-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        text-white/40
      "
    >

      <p>

        © 2026 ELITEDECOR —
        Premium Home Interior
        Experience

      </p>

      <div className="flex gap-8">

        <p className="hover:text-[#9d6b3f] transition cursor-pointer">

          Terms

        </p>

        <p className="hover:text-[#9d6b3f] transition cursor-pointer">

          Privacy

        </p>

        <p className="hover:text-[#9d6b3f] transition cursor-pointer">

          Contact

        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
