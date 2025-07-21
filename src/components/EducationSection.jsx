import EducationCard from "./ui/EducationCard";

const EducationSection = () => {
  return (
    <div className="text-white my-10">
      <h1 className="text-4xl font-bold text-orange-400 mb-6">Education</h1>

      <EducationCard
        year="2022 - Present"
        graduation="Ungraduated"
        degree="Bachelor's Degree"
        major="Computer Science"
        school="UPN Veteran Jakarta"
        loc="Jakarta Selatan, Indonesia"
        title="Bachelor of Computer Science"
      />
    </div>
  );
};

export default EducationSection;
