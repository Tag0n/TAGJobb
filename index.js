// =====================================================
// JOB DATA
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "APTECHI",
        location: "Sangotedo",
        category: "Technology",
        type: "Full-time",
        salary: "₦300,000 - ₦500,000",
        icon: "images/tech2.png",
        description:
            "We are looking for a creative frontend developer to build modern and responsive websites.",
        requirements: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Web Design"
        ]
    },
    {
        id: 2,
        title: "Banking Manager",
        company: "NEXA Bank",
        location: "Jigwa",
        category: "Banking",
        type: "Full-time",
        salary: "₦250,000 - ₦400,000",
        icon: "images/nexabankicon.png",
        description:
            "Nexa Bank is looking for a motivated banking officer to support customers and daily banking operations.",
        requirements: [
            "Good communication skills",
            "Basic computer knowledge",
            "Customer service skills",
            "Banking knowledge"
        ]
    },
    {
        id: 3,
        title: "Registered Nurse",
        company: "ROYAL CARE Hospital",
        location: "Lagos",
        category: "Healthcare",
        type: "Full-time",
        salary: "₦250,000 - ₦450,000",
        icon: "images/royalcarehospital.png",
        description:
            "Royal care Hospital is looking for a qualified nurse to provide excellent patient care.",
        requirements: [
            "Nursing qualification",
            "Good communication skills",
            "Patient care experience",
            "Valid professional registration"
        ]
    },
    {
        id: 4,
        title: "Secondary School Teacher",
        company: "PALMERS School Academy",
        location: "Ibadan",
        category: "Education",
        type: "Full-time",
        salary: "₦180,000 - ₦300,000",
        icon: "images/schoolicon.png",
        description:
            "Future Academy is searching for a passionate teacher to educate and support students.",
        requirements: [
            "Teaching qualification",
            "Good communication skills",
            "Classroom management",
            "Subject knowledge"
        ]
    },
    {
        id: 5,
        title: "Business Analyst",
        company: "AIT Business",
        location: "Lagos",
        category: "Business",
        type: "Full-time",
        salary: "₦350,000 - ₦600,000",
        icon: "images/businehub.png",
        description:
            "We are looking for a business analyst to help our company make better business decisions.",
        requirements: [
            "Analytical thinking",
            "Microsoft Excel",
            "Communication skills",
            "Business knowledge"
        ]
    },
    {
        id: 6,
        title: "Junior Web Developer",
        company: "SHIKSHA Nigeria",
        location: "Port Harcourt",
        category: "Technology",
        type: "Internship",
        salary: "₦100,000 - ₦180,000",
        icon: "images/techicon1.png",
        description:
            "An internship opportunity for students interested in learning web development.",
        requirements: [
            "Basic HTML",
            "Basic CSS",
            "Basic JavaScript",
            "Willingness to learn"
        ]
    },
    {
        id: 7,
        title: "Medical Receptionist",
        company: "HEALTHCARE Plus",
        location: "Lagos",
        category: "Healthcare",
        type: "Part-time",
        salary: "₦120,000 - ₦200,000",
        icon: "images/hospitalicon.png",
        description:
            "Health Plus is looking for a friendly receptionist to welcome patients and manage appointments.",
        requirements: [
            "Good communication",
            "Computer skills",
            "Customer service",
            "Organization skills"
        ]
    },
    {
        id: 8,
        title: "Accountant",
        company: "GALLERIA Bank",
        location: "Lagos",
        category: "Banking",
        type: "Contract",
        salary: "₦300,000 - ₦450,000",
        icon: "images/bankicon.png",
        description:
            "ABC Bank is hiring an accountant to assist with financial reporting and accounting operations.",
        requirements: [
            "Accounting qualification",
            "Microsoft Excel",
            "Financial reporting",
            "Attention to detail"
        ]
    }
];
// =====================================================
// GET HTML ELEMENTS
// =====================================================
const jobsContainer = document.getElementById("jobsContainer");
const searchInput = document.getElementById("searchInput");
const locationInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const clearFilters = document.getElementById("clearFilters");
const jobCount = document.getElementById("jobCount");
const noJobs = document.getElementById("noJobs");
const jobModal = document.getElementById("jobModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
// =====================================================
// DISPLAY JOBS
// =====================================================
function displayJobs(jobList) {
    jobsContainer.innerHTML = "";
    jobCount.textContent =
        `${jobList.length} job${jobList.length !== 1 ? "s" : ""} found`;
    if (jobList.length === 0) {
        noJobs.style.display = "block";
        return;
    }
    noJobs.style.display = "none";
    jobList.forEach(function(job) {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <div class="job-top">
                <div class="company-logo">
                   <img src = "${job.icon}" alt = "${job.company} logo">
                </div>
                <div>
                    <p class="job-company">
                        ${job.company}
                    </p>
                </div>
            </div>
            <h3 class="job-title">
                ${job.title}
            </h3>
            <div class="job-info">
                <span>📍 ${job.location}</span>
                <span>💼 ${job.type}</span>
                <span>🏷️ ${job.category}</span>
            </div>
            <p class="job-description">
                ${job.description}
            </p>
            <div class="job-bottom">
                <span class="salary">
                    ${job.salary}
                </span>
                <button
                    class="view-btn"
                    onclick="viewJob(${job.id})"
                >
                    View Job
                </button>
            </div>
        `;
        jobsContainer.appendChild(jobCard);
    });
}
// =====================================================
// SEARCH AND FILTER JOBS
// =====================================================
function filterJobs() {
    const searchValue =
        searchInput.value.toLowerCase().trim();
    const locationValue =
        locationInput.value.toLowerCase().trim();
    const categoryValue =
        categoryFilter.value;
    const typeValue =
        typeFilter.value;
    const filteredJobs = jobs.filter(function(job) {
        const matchesSearch =
            job.title.toLowerCase().includes(searchValue) ||
            job.company.toLowerCase().includes(searchValue) ||
            job.category.toLowerCase().includes(searchValue);
        const matchesLocation =
            job.location.toLowerCase().includes(locationValue);
        const matchesCategory =
            categoryValue === "" ||
            job.category === categoryValue;
        const matchesType =
            typeValue === "" ||
            job.type === typeValue;
        return (
            matchesSearch &&
            matchesLocation &&
            matchesCategory &&
            matchesType
        );
    });
    displayJobs(filteredJobs);
}
// =====================================================
// SEARCH BUTTON
// =====================================================
searchBtn.addEventListener("click", function() {
    filterJobs();
    document.getElementById("jobs").scrollIntoView({
        behavior: "smooth"
    });
});
// =====================================================
// LIVE SEARCH
// =====================================================
searchInput.addEventListener("input", filterJobs);
locationInput.addEventListener("input", filterJobs);
categoryFilter.addEventListener("change", filterJobs);
typeFilter.addEventListener("change", filterJobs);
// =====================================================
// CLEAR FILTERS
// =====================================================
clearFilters.addEventListener("click", function() {
    searchInput.value = "";
    locationInput.value = "";
    categoryFilter.value = "";
    typeFilter.value = "";
    displayJobs(jobs);
});
// =====================================================
// CATEGORY BUTTONS
// =====================================================
const categoryCards =
    document.querySelectorAll(".category-card");
categoryCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const category =
            card.getAttribute("data-category");
        categoryFilter.value = category;
        filterJobs();
        document.getElementById("jobs").scrollIntoView({
            behavior: "smooth"
        });
    });
});
// =====================================================
// VIEW JOB
// =====================================================
function viewJob(id) {
    const job =
        jobs.find(function(job) {
            return job.id === id;
        });
    if (!job) {
        return;
    }
    modalContent.innerHTML = `
        <div class="job-top">
            <div class="company-logo">
                <img src= "${job.icon}" alt ="${job.company} logo">
            </div>
            <div>
                <p class="job-company">
                    ${job.company}
                </p>
                <h2>
                    ${job.title}
                </h2>
            </div>
        </div>
        <div class="job-info">
            <span>📍 ${job.location}</span>
            <span>💼 ${job.type}</span>
            <span>🏷️ ${job.category}</span>
            <span>💰 ${job.salary}</span>
        </div>
        <h3>Job Description</h3>
        <p>
            ${job.description}
        </p>
        <h3>Requirements</h3>
        <ul>
            ${job.requirements.map(function(requirement) {
                return `<li>${requirement}</li>`;
            }).join("")}
        </ul>
        <button
            class="apply-btn"
            onclick="applyForJob('${job.title}', '${job.company}')"
        >
            Apply for this Job
        </button>
    `;
    jobModal.style.display = "block";
    document.body.style.overflow = "hidden";
}
// =====================================================
// CLOSE MODAL
// =====================================================
closeModal.addEventListener("click", function() {
    jobModal.style.display = "none";
    document.body.style.overflow = "auto";
});
window.addEventListener("click", function(event) {
    if (event.target === jobModal) {
        jobModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
// =====================================================
// APPLY BUTTON
// =====================================================
function applyForJob(title, company) {
    alert(
        `Application started for ${title} at ${company}.`
    );
}
// =====================================================
// MOBILE MENU
// =====================================================
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function() {
    const nav = document.querySelector(".navbar nav");
    const buttons = document.querySelector(".nav-buttons");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        buttons.style.display = "none";
    } else {
        nav.style.display = "flex";
        buttons.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "65px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.padding = "20px";
        nav.style.background = "white";
        nav.style.flexDirection = "column";
        nav.style.alignItems = "center";
        buttons.style.position = "absolute";
        buttons.style.top = "250px";
        buttons.style.left = "0";
        buttons.style.width = "100%";
        buttons.style.padding = "20px";
        buttons.style.background = "white";
        buttons.style.justifyContent = "center";
    }
});
// =====================================================
// START WEBSITE
// =====================================================
displayJobs(jobs);

// =====================================================
// PASSWORD SHOW / HIDE
// =====================================================

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";
        button.textContent = "Hide";

    } else {

        input.type = "password";
        button.textContent = "Show";

    }

}


// =====================================================
// REGISTER
// =====================================================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const firstName =
            document.getElementById("firstName").value.trim();

        const lastName =
            document.getElementById("lastName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("registerMessage");


        // Check passwords

        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            message.style.color = "red";

            return;

        }


        // Check password length

        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters.";

            message.style.color = "red";

            return;

        }


        // Create user

        const user = {

            firstName: firstName,

            lastName: lastName,

            email: email,

            password: password

        };


        // Save user in browser

        localStorage.setItem(
            "jobFinderUser",
            JSON.stringify(user)
        );


        message.textContent =
            "Account created successfully!";

        message.style.color = "#087f5b";


        // Go to login page

        setTimeout(function() {

            window.location.href = "login.html";

        }, 1200);

    });

}


// =====================================================
// LOGIN
// =====================================================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const message =
            document.getElementById("loginMessage");


        // Get registered user

        const savedUser =
            localStorage.getItem("jobFinderUser");


        if (!savedUser) {

            message.textContent =
                "No account found. Please register first.";

            message.style.color = "red";

            return;

        }


        const user =
            JSON.parse(savedUser);


        // Check login details

        if (
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "jobFinderLoggedIn",
                "true"
            );


            message.textContent =
                "Login successful!";

            message.style.color = "#087f5b";


            setTimeout(function() {

                window.location.href = "index.html";

            }, 1000);


        } else {

            message.textContent =
                "Incorrect email or password.";

            message.style.color = "red";

        }

    });

}


// =====================================================
// FORGOT PASSWORD
// =====================================================

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Password recovery will be added when we connect the project to a real database."
    );

}