import { useState, useEffect } from "react";

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-64 bg-gray-200 rounded-xl"></div>
    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

const ResourceModal = ({ isOpen, onClose, resource, type }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{resource.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {type === "blog" && (
          <>
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{resource.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {resource.author.name} • {resource.readTime} min read
            </div>
          </>
        )}
        {type === "case-study" && (
          <>
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>
                {resource.region} • {resource.results}
              </span>
            </div>
          </>
        )}
        {type === "webinar" && (
          <>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {resource.time} • {resource.presenter}
            </div>
          </>
        )}
        {type === "api" && (
          <>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="flex flex-wrap gap-2">
              {resource.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </>
        )}
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
          View Full Resource
        </button>
      </div>
    </div>
  );
};

const ResourceCard = ({ type, item, isLoading, onPreview }) => {
  if (isLoading) return <SkeletonLoader />;
  switch (type) {
    case "blog":
      return (
        <div className="card group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="h-64 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="flex items-center text-sm text-gray-500 mr-4">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {item.readTime} min read
              </span>
              <span className="flex items-center text-sm px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h10m0 0v10m0-10l-7 7"
                  />
                </svg>
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={item.author.avatar}
                  alt={item.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm font-medium">{item.author.name}</span>
              </div>
              <button
                onClick={() => onPreview(item, "blog")}
                className="text-blue-600 font-medium flex items-center transition-all hover:translate-x-1"
              >
                Preview
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    case "case-study":
      return (
        <div className="card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
              {item.category}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm px-2 py-1 rounded-full bg-green-50 text-green-700">
                {item.region}
              </span>
              <span className="text-sm text-gray-600">{item.results}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {item.description}
            </p>
            <div className="flex justify-between items-center">
              <a
                href={item.downloadUrl}
                className="btn bg-blue-50 text-blue-700 hover:bg-blue-100 flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
              <button
                onClick={() => onPreview(item, "case-study")}
                className="text-blue-600 font-medium flex items-center transition-all hover:translate-x-1"
              >
                Preview
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      );
    case "webinar":
      return (
        <div className="card p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-start">
            <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-center min-w-16 mr-4">
              <div className="font-bold text-xl">{item.date.day}</div>
              <div className="text-xs uppercase">{item.date.month}</div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item.time}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {item.presenter}
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button className="btn bg-blue-600 text-white hover:bg-blue-700">
                  Register Now
                </button>
                <button
                  onClick={() => onPreview(item, "webinar")}
                  className="text-blue-600 font-medium flex items-center transition-all hover:translate-x-1"
                >
                  Preview
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    case "api":
      return (
        <div className="card p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-gray-100">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5v14"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.languages.map((lang) => (
              <span
                key={lang}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
              >
                {lang}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center text-sm hover:text-blue-700 transition-colors"
            >
              View Documentation
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <button
              onClick={() => onPreview(item, "api")}
              className="text-blue-600 font-medium flex items-center transition-all hover:translate-x-1"
            >
              Preview
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [filteredResources, setFilteredResources] = useState({
    blog: [],
    caseStudies: [],
    webinars: [],
    api: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState({
    blog: 1,
    caseStudies: 1,
    webinars: 1,
    api: 1,
  });
  const [modal, setModal] = useState({
    isOpen: false,
    resource: null,
    type: "",
  });
  const itemsPerPage = 4;

  const tabs = [
    {
      id: "all",
      label: "All Resources",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      id: "blog",
      label: "Blog",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: "case-studies",
      label: "Case Studies",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "webinars",
      label: "Webinars",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "api-documentation",
      label: "API Documentation",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3-3 3 3m0 6l-3 3-3-3"
          />
        </svg>
      ),
    },
  ];

  const resources = {
    blog: [
      {
        id: 1,
        title: "The Future of Precision Agriculture: AI-Driven Insights",
        excerpt:
          "Discover how artificial intelligence is transforming precision agriculture with real-time data analysis and predictive modeling for improved crop yields.",
        image:
          "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
        category: "Technology",
        readTime: 8,
        author: {
          name: "Dr. Emily Chen",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        },
        featured: true,
      },
      {
        id: 2,
        title: "Sustainable Farming Practices for Climate Change",
        excerpt:
          "Learn about innovative sustainable farming techniques designed to adapt to and mitigate the effects of changing climate patterns.",
        image:
          "https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg",
        category: "Sustainability",
        readTime: 6,
        author: {
          name: "Marcus Johnson",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        },
        featured: true,
      },
      {
        id: 3,
        title: "Leveraging IoT for Smart Farming",
        excerpt:
          "Explore how IoT devices enhance farm efficiency through real-time monitoring and automation.",
        image:
          "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
        category: "Technology",
        readTime: 7,
        author: {
          name: "Sarah Lee",
          avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        },
        featured: false,
      },
    ],
    caseStudies: [
      {
        id: 1,
        title: "Precision Irrigation Boosts Yields by 35% for Citrus Farm",
        description:
          "How a 500-acre citrus operation implemented IoT-based precision irrigation to reduce water usage while significantly increasing yields.",
        image:
          "https://images.pexels.com/photos/175028/pexels-photo-175028.jpeg",
        category: "Precision Farming",
        region: "California",
        results: "35% Yield Increase",
        downloadUrl: "/downloads/case-studies/precision-irrigation-citrus.pdf",
      },
      {
        id: 2,
        title: "Regenerative Agriculture Success Story",
        description:
          "A dairy farm's successful transition to regenerative agriculture practices, resulting in improved soil health and increased profitability.",
        image:
          "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg",
        category: "Sustainability",
        region: "Wisconsin",
        results: "42% Carbon Reduction",
        downloadUrl: "/downloads/case-studies/regenerative-dairy-farm.pdf",
      },
      {
        id: 3,
        title: "Smart Greenhouses for Urban Farming",
        description:
          "An urban farm uses AI-driven greenhouses to optimize crop growth in limited spaces.",
        image:
          "https://images.pexels.com/photos/4393607/pexels-photo-4393607.jpeg",
        category: "Precision Farming",
        region: "New York",
        results: "50% Space Efficiency",
        downloadUrl: "/downloads/case-studies/urban-greenhouse.pdf",
      },
    ],
    webinars: [
      {
        id: 1,
        title:
          "Climate-Smart Agriculture: Adapting to Changing Weather Patterns",
        description:
          "Join our panel of climate scientists and agricultural experts as they discuss practical strategies for adapting farming operations to increasingly volatile weather conditions.",
        status: "upcoming",
        date: { day: "23", month: "Apr" },
        time: "10:00 AM - 11:30 AM EST",
        presenter: "Dr. Michael Wilson",
        tags: ["Climate Change", "Adaptation", "Risk Management"],
      },
      {
        id: 2,
        title: "Next-Generation Soil Sensors: Installation and Data Analysis",
        description:
          "A hands-on technical session covering the latest soil monitoring technology and data interpretation techniques.",
        status: "upcoming",
        date: { day: "28", month: "Apr" },
        time: "2:00 PM - 3:30 PM EST",
        presenter: "Sarah Johnson",
        tags: ["Technology", "Soil Health", "Data Analysis"],
      },
      {
        id: 3,
        title: "AI in Agriculture: Real-World Applications",
        description:
          "Learn how AI is being applied in real-world farming scenarios to enhance productivity.",
        status: "upcoming",
        date: { day: "30", month: "Apr" },
        time: "1:00 PM - 2:30 PM EST",
        presenter: "Dr. Anna Patel",
        tags: ["Technology", "AI", "Productivity"],
      },
    ],
    api: [
      {
        id: 1,
        title: "REST API Reference",
        description:
          "Complete documentation for all AgroSphere REST API endpoints, including authentication, rate limits, and error codes.",
        languages: ["JSON", "XML", "cURL"],
      },
      {
        id: 2,
        title: "SDK Documentation",
        description:
          "Libraries and code examples for Python, JavaScript, Java, and other languages to interact with AgroSphere APIs.",
        languages: ["Python", "JavaScript", "Java"],
      },
      {
        id: 3,
        title: "GraphQL API Guide",
        description:
          "Explore our GraphQL API for flexible data queries and real-time updates.",
        languages: ["GraphQL", "JavaScript"],
      },
    ],
  };

  const categories = [
    "All",
    ...new Set([
      ...resources.blog.map((item) => item.category),
      ...resources.caseStudies.map((item) => item.category),
      ...resources.webinars.flatMap((item) => item.tags),
      ...resources.api.flatMap((item) => item.languages),
    ]),
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simulate loading
    filterResources();
  }, [searchQuery, categoryFilter, currentPage]);

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage({ blog: 1, caseStudies: 1, webinars: 1, api: 1 });
    if (tab !== "all") scrollToSection(tab);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filterResources = () => {
    const query = searchQuery.toLowerCase();
    const filterByCategory = (item, fields) => {
      if (categoryFilter === "All" || !categoryFilter) return true;
      return fields.some((field) =>
        Array.isArray(field)
          ? field.includes(categoryFilter)
          : field === categoryFilter
      );
    };

    setFilteredResources({
      blog: resources.blog
        .filter(
          (item) =>
            (item.title.toLowerCase().includes(query) ||
              item.excerpt.toLowerCase().includes(query)) &&
            filterByCategory(item, [item.category])
        )
        .slice(
          (currentPage.blog - 1) * itemsPerPage,
          currentPage.blog * itemsPerPage
        ),
      caseStudies: resources.caseStudies
        .filter(
          (item) =>
            (item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)) &&
            filterByCategory(item, [item.category])
        )
        .slice(
          (currentPage.caseStudies - 1) * itemsPerPage,
          currentPage.caseStudies * itemsPerPage
        ),
      webinars: resources.webinars
        .filter(
          (item) =>
            (item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)) &&
            filterByCategory(item, [item.tags])
        )
        .slice(
          (currentPage.webinars - 1) * itemsPerPage,
          currentPage.webinars * itemsPerPage
        ),
      api: resources.api
        .filter(
          (item) =>
            (item.title.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query)) &&
            filterByCategory(item, [item.languages])
        )
        .slice(
          (currentPage.api - 1) * itemsPerPage,
          currentPage.api * itemsPerPage
        ),
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage({ blog: 1, caseStudies: 1, webinars: 1, api: 1 });
    filterResources();
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      return;
    }
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handlePageChange = (section, page) => {
    setCurrentPage((prev) => ({ ...prev, [section]: page }));
  };

  const openModal = (resource, type) => {
    setModal({ isOpen: true, resource, type });
  };

  const closeModal = () => {
    setModal({ isOpen: false, resource: null, type: "" });
  };

  const Pagination = ({ section, totalItems }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;
    return (
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(section, page)}
            className={`px-3 py-1 rounded-lg ${
              currentPage[section] === page
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-green-800 to-green-900 text-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg')] opacity-20 bg-cover bg-center animate-fade-in"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <span className="inline-block px-4 py-1 text-sm font-medium bg-white/10 rounded-full backdrop-blur-sm mb-6">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Agricultural <span className="text-green-400">Resources</span> &
              Insights
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Dive into our curated collection of guides, case studies,
              webinars, and technical documentation to supercharge agricultural
              productivity and sustainability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#blog"
                className="group flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Resources
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#api-documentation"
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search, Tabs, and Filters */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2 rounded-lg flex items-center text-sm md:text-base font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-auto flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search resources..."
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                    isSearchFocused
                      ? "border-blue-400 ring-2 ring-blue-100"
                      : "border-gray-300"
                  } focus:outline-none transition-all duration-300 bg-gray-50`}
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 space-y-24">
        {(activeTab === "all" || activeTab === "blog") && (
          <section id="blog" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Latest from Our Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.blog.length ? (
                filteredResources.blog.map((post) => (
                  <ResourceCard
                    key={post.id}
                    type="blog"
                    item={post}
                    isLoading={isLoading}
                    onPreview={openModal}
                  />
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">
                  No blog posts match your search.
                </p>
              )}
            </div>
            <Pagination section="blog" totalItems={resources.blog.length} />
          </section>
        )}
        {(activeTab === "all" || activeTab === "case-studies") && (
          <section id="case-studies" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.caseStudies.length ? (
                filteredResources.caseStudies.map((study) => (
                  <ResourceCard
                    key={study.id}
                    type="case-study"
                    item={study}
                    isLoading={isLoading}
                    onPreview={openModal}
                  />
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">
                  No case studies match your search.
                </p>
              )}
            </div>
            <Pagination
              section="caseStudies"
              totalItems={resources.caseStudies.length}
            />
          </section>
        )}
        {(activeTab === "all" || activeTab === "webinars") && (
          <section id="webinars" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.webinars.length ? (
                filteredResources.webinars.map((webinar) => (
                  <ResourceCard
                    key={webinar.id}
                    type="webinar"
                    item={webinar}
                    isLoading={isLoading}
                    onPreview={openModal}
                  />
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">
                  No webinars match your search.
                </p>
              )}
            </div>
            <Pagination
              section="webinars"
              totalItems={resources.webinars.length}
            />
          </section>
        )}
        {(activeTab === "all" || activeTab === "api-documentation") && (
          <section id="api-documentation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              API Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.api.length ? (
                filteredResources.api.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    type="api"
                    item={resource}
                    isLoading={isLoading}
                    onPreview={openModal}
                  />
                ))
              ) : (
                <p className="text-gray-600 col-span-full text-center">
                  No API resources match your search.
                </p>
              )}
            </div>
            <Pagination section="api" totalItems={resources.api.length} />
          </section>
        )}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 animate-bounce">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              Stay Updated with Agricultural Insights
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for expert agricultural tips,
              technology updates, event notifications, and early access to new
              resources.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center bg-green-100 text-green-800 p-4 rounded-lg animate-fade-in">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="font-medium">
                  Thank you for subscribing! Check your inbox for a confirmation
                  email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="max-w-md mx-auto"
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className={`w-full px-5 py-3 rounded-lg pr-36 border ${
                      isValid
                        ? "border-gray-300 focus:border-blue-500"
                        : "border-red-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50`}
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
                {!isValid && (
                  <p className="text-red-500 text-sm mt-2 text-left">
                    Please enter a valid email address.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
      <ResourceModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        resource={modal.resource}
        type={modal.type}
      />
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.7s ease-out;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default ResourcesPage;
