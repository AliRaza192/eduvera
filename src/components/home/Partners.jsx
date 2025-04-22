import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";

const Partners = () => {
  const partners = [
    { name: "SKILLIO", image: partner1 },
    { name: "TEACHRY", image: partner2 },
    { name: "BRAINZY", image: partner3 },
    { name: "EDUKA", image: partner4 },
    { name: "GRADIA", image: partner5 },
  ];

  return (
    <section className="py-8 mt-10 bg-gray-100 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-700 text-lg mb-6">
          Empowered by Our Trusted Collaborators
        </p>

        <div className="flex justify-between items-center flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-auto py-2"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-8 md:h-10 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
