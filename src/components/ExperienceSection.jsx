import { Calendar, MapPin, User2 } from "lucide-react";

const experiences = [
  {
    title: "Member of Web Developer Division",
    organization: "Multimedia Student Community (KSM) UPNVJ",
    location: "Jakarta, Indonesia",
    date: "Mar 2024 – Present",
    type: "Organizational Experience",
    points: [
      "Learning to create a simple website using HTML, CSS, and JavaScript.",
      "Exploring CSS framework like Tailwind CSS, and JavaScript framework like React.js to enhance web development skills.",
    ],
  },
  {
    title: "Member of Design Graphic Division",
    organization: "Multimedia Student Community (KSM) UPNVJ",
    location: "Jakarta, Indonesia",
    date: "Feb 2023 – Dec 2023",
    type: "Organizational Experience",
    points: [
      "Successfully mastered the basics of interface design (UI/UX) using Figma.",
      "Mastered basic design creation using Adobe Photoshop.",
    ],
  },
  {
    title: "Administrative Assistant",
    organization: "Community Partnership Program Applied (PKM-T)",
    location: "Bandung, Indonesia",
    date: "May 2024",
    type: "Volunteer Experience",
    points: [
      "Provided support in managing administration such as recording attendance and organizing surveys.",
      "Assisted in delivering materials from lecturers to participants clearly and effectively.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="text-white my-12">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">Experience</h1>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-2xl p-6 shadow-md mb-6 max-w-3xl mx-auto text-black relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 bg-black text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
              <Calendar size={16} />
              <span>{exp.date}</span>
            </div>
            <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold shadow text-purple-700">
              {exp.type}
            </div>
          </div>

          {/* Title and Org */}
          <div className="flex items-center gap-3 mb-2">
            <User2 className="text-orange-500" size={20} />
            <h2 className="text-lg font-bold text-justify">{exp.title}</h2>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <MapPin size={18} className="text-red-500" />
            <span className="text-sm font-medium text-justify">
              {exp.organization} - {exp.location}
            </span>
          </div>

          {/* Points */}
          <ul className="list-disc list-inside mt-3 text-sm space-y-1 text-justify">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
