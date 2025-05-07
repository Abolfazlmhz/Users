import { useGetProjectsQuery } from "../../api/endpoints/projectApi";

const ProjectList = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery();
  if (isLoading) {
    return <p>در حال بارگزاری پروژه‌ها...</p>;
  }

  if (error) {
    return <p>خطا در دریافت پروژه‌ها: {error.toString()}</p>;
  }
  return (
    <div>
      <h2>لیست پروژه‌ها</h2>
      <ul>
        {projects &&
          projects.map((project) => <li key={project.id}>{project.name}</li>)}
      </ul>
    </div>
  );
};
export default ProjectList;
