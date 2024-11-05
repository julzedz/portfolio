import EduSect from "./comp/EduSect";
export default function EducationSect() {
  return (
    <section className="mt-[120px] flex flex-col justify-between gap-16 xl:flex-row xl:gap-10">
      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          📚 Education
        </div>
        <div className="flex flex-col gap-10">
          <EduSect
            type="edu"
            name="Good Shepherd School"
            title="Primary School"
            date="2013-2015"
          />
          <EduSect
            type="edu"
            name="St Paul Ukpor"
            title="Secondary School"
            date="2012-2018"
          />
          <EduSect
            type="edu"
            name="University of Nigeria"
            title="Law"
            date="2014-2019"
          />
        </div>
      </div>
      <div className="xl:w-1/2">
        <div className="mb-10 text-[27px] font-bold md:text-[36px]">
          💼  Work Experience
        </div>
        <div className="flex flex-col gap-10">
          <EduSect
            type="work"
            name="Nexilistings"
            title="Frontend Developer"
            date="2023-2024"
            img="nexi"
          />
          <EduSect
            type="work"
            name="HNGx"
            title="Backend Developer (Intern)"
            date="sept 2024 - oct 2024"
            img="hng"
          />
          <EduSect
            type="work"
            name="Microverse"
            title="Student"
            date="Aug 25, 2021"
            img="udemy"
          />
        </div>
      </div>
    </section>
  );
}