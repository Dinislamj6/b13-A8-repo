"use client";

const CourseCurriculum = ({ courseId }) => {
  const data = {
    1: {
      title: "Complete Web Development",
      sections: [
        {
          id: 1,
          title: "Frontend Basics",
          lessons: ["HTML5 Structure", "CSS3 Styling", "Flexbox & Grid"]
        },
        {
          id: 2,
          title: "JavaScript Core",
          lessons: ["Variables", "Functions", "DOM Manipulation"]
        },
        {
          id: 3,
          title: "Projects",
          lessons: ["Portfolio Website", "Landing Page", "Mini Web App"]
        }
      ]
    },

    2: {
      title: "Advanced React & Next.js Mastery",
      sections: [
        {
          id: 1,
          title: "React Advanced",
          lessons: ["Hooks Deep Dive", "Context API", "State Management"]
        },
        {
          id: 2,
          title: "Next.js 14",
          lessons: ["App Router", "Server Components", "API Routes"]
        },
        {
          id: 3,
          title: "Production",
          lessons: ["Authentication", "Deployment", "Performance Optimization"]
        }
      ]
    },

    3: {
      title: "UI/UX Design Fundamentals",
      sections: [
        {
          id: 1,
          title: "Design Basics",
          lessons: ["Color Theory", "Typography", "Spacing Rules"]
        },
        {
          id: 2,
          title: "Figma Tools",
          lessons: ["Wireframing", "Prototyping", "Components"]
        },
        {
          id: 3,
          title: "User Experience",
          lessons: ["User Flow", "Accessibility", "Design Thinking"]
        }
      ]
    },

    4: {
      title: "Data Science with Python",
      sections: [
        {
          id: 1,
          title: "Python Basics",
          lessons: ["Syntax", "Loops", "Functions"]
        },
        {
          id: 2,
          title: "Data Analysis",
          lessons: ["Pandas", "NumPy", "Data Cleaning"]
        },
        {
          id: 3,
          title: "Machine Learning",
          lessons: ["Regression", "Classification", "Model Training"]
        }
      ]
    },

    5: {
      title: "Digital Marketing Strategy",
      sections: [
        {
          id: 1,
          title: "Marketing Basics",
          lessons: ["SEO Basics", "Keyword Research", "Content Strategy"]
        },
        {
          id: 2,
          title: "Social Media",
          lessons: ["Facebook Ads", "Instagram Growth", "Engagement Strategy"]
        },
        {
          id: 3,
          title: "Paid Marketing",
          lessons: ["Google Ads", "Conversion Tracking", "Analytics"]
        }
      ]
    },

    6: {
      title: "Mastering Tailwind CSS",
      sections: [
        {
          id: 1,
          title: "Tailwind Basics",
          lessons: ["Utility Classes", "Spacing", "Colors"]
        },
        {
          id: 2,
          title: "Layouts",
          lessons: ["Flexbox", "Grid", "Responsive Design"]
        },
        {
          id: 3,
          title: "Real Projects",
          lessons: ["Dashboard UI", "Landing Page", "Portfolio Site"]
        }
      ]
    }
  };

  const course = data[courseId];

  if (!course) {
    return (
      <p className="text-center text-red-500 mt-5">
        Course not found
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h2 className="text-2xl font-bold my-10 text-center bg-transparent bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        {course.title} Curriculum
      </h2>

      {course.sections.map((section) => (
        <div key={section.id} className="border rounded p-4 mb-3 shadow-lg shadow-blue-500/50 bg-transparent  transition delay-110 duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 ">
          <h3 className="font-semibold text-lg">
            {section.title}
          </h3>

          <ul className="list-disc ml-6 mt-2 text-gray-700">
            {section.lessons.map((lesson, i) => (
              <li key={i}>{lesson}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseCurriculum;