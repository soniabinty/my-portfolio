import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // Track selected project for modal
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:px-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-bold">Projects Overview</h2>
        <img
          className="mx-auto md:w-[480px] my-4"
          src="https://i.ibb.co.com/HfZj6ctH/divider-Cc-YM6e-To.png"
          alt="Divider"
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-xl font-semibold">Loading projects...</p>
      ) : (
        <div className="md:grid grid-cols-3 md:px-12 max-sm:mt-4 max-sm:p-6  md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card bg-base-100 mb-4  md:w-96 shadow-sm">
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-fuchsia-600">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button 
                    className="btn bg-linear-65 from-fuchsia-600 to-pink-500 text-white"
                    onClick={() => setSelectedProject(project)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
  <div className="fixed inset-0 flex items-center justify-center bg-transparent">
    <div className="bg-white p-6 rounded-lg shadow-lg md:w-[500px]">
      {/* Project Name */}
      <h2 className="text-2xl font-bold text-fuchsia-600">{selectedProject.name}</h2>

      {/* Project Image */}
     

      {/* Project Description */}
      <p className="text-gray-700">{selectedProject.description}</p>

      {/* Tech Stack */}
      <h3 className="mt-4 font-semibold">Tech Stack:</h3>
      <ul className="list-disc list-inside text-gray-600">
        {selectedProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      {/* Challenges Faced */}
      <h3 className="mt-4 font-semibold">Challenges Faced:</h3>
      <p className="text-gray-600">{selectedProject.challenges}</p>

      {/* Future Plans */}
      <h3 className="mt-4 font-semibold">Future Plans:</h3>
      <p className="text-gray-600">{selectedProject.futurePlans}</p>

      {/* Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <a
          href={selectedProject.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Live Project
        </a>
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          GitHub
        </a>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedProject(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Projects;
