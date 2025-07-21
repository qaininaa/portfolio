import { GraduationCap, Calendar, MapPin, School } from "lucide-react";

const EducationCard = (props) => {
  const { year, graduation, degree, school, loc, major, title } = props;
  return (
    <div>
      {/* Card */}
      <div className="bg-gray-200 rounded-2xl p-6 shadow-md max-w-xl mx-auto text-black relative overflow-hidden">
        {/* Year and Graduation */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 bg-black text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
            <Calendar size={16} />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            <GraduationCap size={16} className="text-indigo-600" />
            <span>{graduation}</span>
          </div>
        </div>

        {/* Degree */}
        <div className="flex gap-2 mb-2">
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
            {degree}
          </span>
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">
            {major}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl text-left font-bold mb-4">{title}</h2>

        {/* University */}
        <div className="flex items-center gap-2 mb-2">
          <School size={18} className="text-yellow-700" />
          <span className="text-sm">{school}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-red-600" />
          <span className="text-sm">{loc}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
