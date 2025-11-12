import React, { useRef, useState } from "react";
import Icon from "../ui/icon";
import emailjs from "@emailjs/browser";
import axios from "axios";

const CareerGrowthGraph: React.FC = () => {
  // General state
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  // Form state
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    contact: string;
    resumeName: string;
  }>({
    name: "",
    email: "",
    contact: "",
    resumeName: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  // Upload file to Cloudinary
  const uploadResumeToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "resume_upload"); // unsigned preset
    // REMOVE: formData.append("access_mode", "public");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/darxkqfr0/raw/upload",
        formData
      );
      // Add fl_attachment to ensure download
      return res.data.secure_url + "?fl_attachment=true";
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      throw new Error("Failed to upload resume");
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume_file" && files && files.length > 0) {
      const file = files[0];
      if (file.size > 400 * 1024) {
        setError("Resume file size must be less than 400 KB.");
        return;
      }
      setFormData((prev) => ({ ...prev, resumeName: file.name }));
      setError("");
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Toast
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: null }), 3500);
  };

  // Reset form and popup states
  const resetFormState = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      resumeName: "",
    });
    setError("");
    setToast({ message: "", type: null });
    setLoading(false);
  };

  // Handle close
  const handleClosePopup = () => {
    setOpenPopup(null);
    resetFormState();
  };

  // Submit handler for EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.resumeName
    ) {
      setError("All fields including resume are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const fileInput =
        (formRef.current?.querySelector("#resume_file") as HTMLInputElement) ||
        null;
      const file = fileInput?.files?.[0];
      if (!file) {
        setError("Please upload your resume.");
        setLoading(false);
        return;
      }

      // 🔹 Step 1: Upload to Cloudinary
      const resumeUrl = await uploadResumeToCloudinary(file);

      // 🔹 Step 2: Send email using EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        resumeLink: resumeUrl, // ✅ Cloudinary link
      };

      await emailjs.send(
        "service_zb3z4um",
        "template_4qhw6b9",
        templateParams,
        "d8Bc3rrzINrO1MgeV"
      );

      showToast("✅ Application sent successfully!", "success");
      resetFormState();
      setOpenPopup(null);
    } catch (err) {
      console.error(err);
      showToast("❌ Failed to send application. Please try again.", "error");
    }

    setLoading(false);
  };

  // Job data
  const jobList = [
    {
      id: 1,
      category: "Design",
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full Time",
      description:
        "We’re looking for a UI/UX Designer to create engaging designs.",
    },
    {
      id: 2,
      category: "Development",
      title: "Front-End Developer",
      location: "Remote",
      type: "Full Time",
      description:
        "We’re looking for a Front-End Developer to build responsive interfaces.",
    },
    {
      id: 3,
      category: "Sales",
      title: "Sales Executive",
      location: "Remote",
      type: "Full Time",
      description: "We’re seeking a Sales Executive to drive business growth.",
    },
  ];

  const cards = [
    {
      icon: (
        <Icon
          type="rocket2"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Impact",
      desc: "Contribute to projects that make a real difference for global brands.",
    },
    {
      icon: (
        <Icon
          type="leaf"
          className="text-3xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Growth",
      desc: "Learn, experiment, and advance your career through real-world projects.",
    },
    {
      icon: (
        <Icon
          type="HandShake"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Collaborate",
      desc: "Work with talented teammates who inspire and support your growth.",
    },
    {
      icon: (
        <Icon
          type="bulf"
          className="text-4xl transition-all duration-300 group-hover:text-[#E7CEFF]"
        />
      ),
      title: "Creativity",
      desc: "Bring your ideas to life with the freedom to explore and innovate.",
    },
  ];

  // Render
  return (
    <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 overflow-x-hidden max-w-full">
      {/* Toast */}
      {toast.type && (
        <div
          className={`fixed top-5 right-5 px-5 py-3 rounded-lg text-white shadow-lg z-[9999] transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
      {/* Heading */}
      <div className="px-3 sm:px-5 text-center lg:text-left font-black gap-6 max-w-7xl mx-auto">
        <h1 className="mt-12 sm:mt-16 text-[32px] sm:text-[60px] md:text-[75px] lg:text-[90px] mb-6 leading-tight text-[#111111]">
          Building Bright{" "}
          <span className="text-[hsl(var(--brand-purple))] transition-all duration-700 ease-in-out mx-2 sm:mx-4">
            Futures
          </span>
          <br />
          With Innovation and <br />
          Passion
        </h1>
        <p className="mt-8 sm:mt-12 font-medium text-base sm:text-lg md:text-xl text-[#111111] mb-8 max-w-3xl mx-auto lg:mx-0 lg:text-[24px]">
          We’re a team of creators helping startups build digital products that
          inspire, perform, and grow — all without breaking the bank.
        </p>
      </div>

      {/* Join Our Team */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-32">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none truncate">
          JOIN
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-6 sm:mb-8"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Join our team!
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-8 max-w-4xl lg:mt-10 sm:mt-4">
          Join WeQode Technologies and grow with a team that values innovation,
          collaboration, and excellence. Work on meaningful digital projects
          that challenge and inspire you.
          <br /> Here, your ideas make an impact.
        </p>

        {/* Job List & Apply Popups */}
        <div className="space-y-6 max-w-6xl mx-auto mt-14">
          {jobList.map((job) => (
            <div
              key={job.id}
              className="bg-[#FFF8F3] rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
                <div>
                  <p className="text-[hsl(var(--brand-purple))] text-lg font-medium">
                    {job.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                    {job.title}
                  </h3>
                  <div className="flex gap-5 text-[#000] text-sm mt-2 flex-wrap">
                    <span>📍 {job.location}</span>
                    <span>⏰ {job.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpenPopup("popup1")}
                  className="px-5 py-2 rounded-md text-sm font-medium bg-[hsl(var(--brand-orange))] text-white hover:scale-105 transition-all"
                >
                  Apply
                </button>
              </div>
              {hoveredJob === job.id && (
                <div className="mt-4 text-[18px] text-[#000] font-medium leading-7">
                  {job.description}
                </div>
              )}
            </div>
          ))}

          {/* Popup 1: Info Form */}
          {openPopup === "popup1" && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
              <div className="bg-[#4A2B86] rounded-3xl p-8 w-[90%] sm:w-[400px] text-center text-white relative">
                <button
                  onClick={handleClosePopup}
                  className="absolute top-3 right-4 text-white text-xl font-bold"
                >
                  ✖
                </button>
                <h2 className="text-xl font-bold mb-2">
                  Shape Your Future With WeQode
                </h2>
                <p className="text-sm mb-6">
                  Enter your details to apply for this role.
                </p>
                {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                <form className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 rounded-md text-black"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 rounded-md text-black"
                  />
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full p-2 rounded-md text-black"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.name && formData.email && formData.contact)
                        setOpenPopup("popup2");
                      else setError("Please fill in all details first.");
                    }}
                    className="bg-[#FF944D] text-white rounded-full w-full py-2 mt-6 font-semibold hover:opacity-90"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Popup 2: Resume Upload */}
          {openPopup === "popup2" && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
              <div className="bg-[#4A2B86] rounded-3xl p-8 w-[90%] sm:w-[400px] text-center text-white relative">
                <button
                  onClick={handleClosePopup}
                  className="absolute top-3 right-4 text-white text-xl font-bold"
                >
                  ✖
                </button>
                <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
                {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  encType="multipart/form-data"
                >
                  <div className="border-2 border-dashed border-white rounded-xl py-4 mb-4 cursor-pointer">
                    <label htmlFor="resume_file" className="cursor-pointer">
                      Upload Resume 📎
                    </label>
                    <input
                      id="resume_file"
                      name="resume_file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleChange}
                      required
                    />
                    {formData.resumeName && (
                      <p className="text-sm mt-2 text-green-300">
                        {formData.resumeName}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`rounded-full w-full py-2 font-semibold flex justify-center items-center ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#FF944D] hover:opacity-90"
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </div>
                    ) : (
                      "Apply Now"
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-32">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none truncate">
          WHY
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-6 sm:mb-8 ml-1 sm:ml-2"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Why Join Us?
        </h2>
        <p className="text-base sm:text-lg font-regular lg:text-[24px] mb-8 max-w-4xl lg:mt-10 sm:mt-4 whitespace-pre-line">
          Our process is built to turn ideas into impactful digital experiences
          from <br />
          research and strategy to design, development, and launch
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center
                 bg-[#E7CEFF] hover:bg-[#533074] text-[#1A1A1A] hover:text-white
                 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-md
                 w-full sm:max-w-[280px] md:max-w-[280px] lg:w-[298px] lg:h-[318px] mx-auto"
            >
              <div className="bg-[#ffffff]/30 rounded-full p-4 mb-4 text-[#533074] group-hover:text-[#E7CEFF] transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-bold text-[24px] mb-2">{card.title}</h3>
              <p className="font-medium text-[18px] leading-relaxed text-[#000000] group-hover:text-white">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Life at WeQode */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 mt-20 sm:mt-32 mb-20">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none truncate">
          LIFE
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-6 sm:mb-8 ml-1 sm:ml-2"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Life At WeQode
        </h2>
        <p className="text-base sm:text-lg font-regular lg:text-[24px] mb-8 max-w-4xl lg:mt-10 sm:mt-4 whitespace-pre-line">
          At WeQode, we blend creativity and technology to deliver custom-
          <br />
          built digital experiences. Explore what we can create together.
        </p>

        <div>
          <h2
            className="text-2xl sm:text-3xl lg:text-[32px] font-bold mt-20 sm:mt-24 ml-1 sm:ml-2"
            style={{ color: "hsl(var(--brand-purple))" }}
          >
            Where Innovation Meets Growth
          </h2>

          <p className="font-regular text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-4 sm:mt-6 max-w-4xl">
            At WeQode, we foster a culture built on creativity, collaboration,
            and continuous learning.
            <br />
            Every idea is valued, every voice is heard, and every individual is
            empowered to grow with purpose.
          </p>

          <h2
            className="text-2xl sm:text-3xl lg:text-[32px] font-bold mt-20 sm:mt-24 ml-1 sm:ml-2"
            style={{ color: "hsl(var(--brand-purple))" }}
          >
            Our Work Ethos
          </h2>

          <p className="font-regular text-base sm:text-lg md:text-xl lg:text-[24px] text-[#000000] leading-7 lg:leading-8 mt-4 sm:mt-6 max-w-4xl">
            We believe in working smarter, growing together, and delivering with
            excellence.
            <br />
            Our flexible, supportive environment allows you to perform at your
            best, while staying inspired every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowthGraph;
