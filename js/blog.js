const blogs = [
    {
        title: "🚀 Exploring IIS (Internet Information Services) – A Step-by-Step Guide!",
        description: "Learn how to use and implement IIS web server, best practices, and hosting the website on IIS.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7304934619089408001/"
    },
    {
        title: "Ahead-of-Time (AOT) and Just-in-Time (JIT)",
        description: "A deep dive into AOT and JIT Compilation and Understand the basics and how it works in real world application.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7285189068944982016/"
    },
    {
        title: "Model Binding Attributes in ASP.NET Core",
        description: "Explore the principles of Model Binding in .NET Core is a process by which the framework automatically maps HTTP request data.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7284497314533011457/"
    },
    {
        title: "OutOfMemoryException",
        description: "Get started with OutOfMemoryException in ASP.NET Core and how to detect it?",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7284443390614609920/"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const blogsContainer = document.querySelector('.blog_row .col-12 .row');

    blogs.forEach(blog => {
        blogsContainer.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card bg-secondary h-100">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${blog.title}</h5>
                        <p class="card-text">${blog.description}</p>
                        <a href="${blog.link}" class="btn btn-primary" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        `;
    });
});