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
        description: "Get started with OutOfMemoryException in ASP.NET Core and how to detect it? 😱 😭 😰 ",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7284443390614609920/"
    }
    ,
    {
        title: "StackOverflowException ",
        description: "Get started with StackOverflowException in ASP.NET Core and how to detect it? 😱 😭 😰 ",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7283730346968334336/"
    }
];
// Pagination settings
const blogsPerPage = 4; // Number of blogs to display per page
let currentPage = 1; // Current page

// Function to display blogs for a specific page
function displayBlogs(page) {
    const blogsContainer = document.getElementById('blogs-container');
    blogsContainer.innerHTML = ''; // Clear existing blogs

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const blogsToShow = blogs.slice(startIndex, endIndex);

    blogsToShow.forEach(blog => {
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
}

// Function to update pagination buttons
function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear existing pagination buttons

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    // Previous Button
    pagination.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage - 1}, event)">Previous</a>
        </li>
    `;

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i}, event)">${i}</a>
            </li>
        `;
    }

    // Next Button
    pagination.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changePage(${currentPage + 1}, event)">Next</a>
        </li>
    `;
}

// Function to change the current page
function changePage(page, event) {
    if (event) event.preventDefault(); // Prevent default behavior
    if (page < 1 || page > Math.ceil(blogs.length / blogsPerPage)) return;
    currentPage = page;
    displayBlogs(currentPage);
    updatePagination();
}

// Initialize the blogs and pagination on page load
document.addEventListener('DOMContentLoaded', function () {
    displayBlogs(currentPage);
    updatePagination();
});

