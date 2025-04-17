document.addEventListener("DOMContentLoaded", function () {
    const skillBadges = [
        "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
        "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        "https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=shell&logoColor=white",
        "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white",
        "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
        "https://img.shields.io/badge/Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=white",
        "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
        "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white",
        "https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white",
        "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white",
        "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
        "https://img.shields.io/badge/IBM_Cloud-blue?style=for-the-badge",
        "https://img.shields.io/badge/Linux-4EAA25?style=for-the-badge&logo=linux&logoColor=white",
        "https://img.shields.io/badge/Ubuntu-DD4814?style=for-the-badge&logo=ubuntu&logoColor=white",
        "https://img.shields.io/badge/RHEL-EE0000?style=for-the-badge&logo=red-hat&logoColor=white",
        "https://img.shields.io/badge/KVM-0078D4?style=for-the-badge&logo=kvm&logoColor=white",
        "https://img.shields.io/badge/VM-808080?style=for-the-badge&logo=vmware&logoColor=white",
        "https://img.shields.io/badge/VPN-0078D4?style=for-the-badge&logo=vpn&logoColor=white",
        "https://img.shields.io/badge/TCP/IP%20Addressing-808080?style=for-the-badge&logo=cisco&logoColor=white",
        "https://img.shields.io/badge/SSH-808080?style=for-the-badge&logo=ssh&logoColor=white"
    ];

    const shuffle = arr => arr.sort(() => 0.5 - Math.random());
    const skillsContainer = document.getElementById("skills-container");

    // Clear any existing content (in case you re-render)
    skillsContainer.innerHTML = "";

    // Shuffle the badges to display them randomly
    const shuffledSkills = shuffle(skillBadges);

    // Add each badge to the container with a slight delay
    shuffledSkills.forEach((src, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Skill badge";
            img.classList.add("fade-in");
            skillsContainer.appendChild(img);
        }, index * 100); // 100ms delay between each badge
    });

    
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-top';
scrollTopButton.style.display = 'none';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Section animation observer with error handling
const observer = new IntersectionObserver((entries, observer) => {
    try {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    } catch (error) {
        console.error('IntersectionObserver error:', error);
    }
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
    observer.observe(section);
});

