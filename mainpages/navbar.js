
function generateNavbar() {
    return `
        <nav aria-label="Primary navigation" class="topNavMain">
            <ul class="ulTopNavMain">
                <li class="liTopNavMain black">
                    <a href="../index.html" class="liTopNavMainLink black">About</a>
                </li>
                <li class="liTopNavMain black">
                    <a href="../mainpages/blog.html" class="liTopNavMainLink black">Blog</a>
                </li>
                <li class="liTopNavMain black">
                    <a href="../mainpages/resume.html" class="liTopNavMainLink black">Resume</a>
                </li>
            </ul>
        </nav>
        <nav class="bottomNavMain">
            <ul class="ulTopNavMain">
                <li class="liTopNavMain">
                    <a href="uxcasestudies.html" class="liTopNavMainLink backgroundBottom white">Case Studies</a>
                </li>
                <li class="liTopNavMain">
                    <a href="codingprojects.html" class="liTopNavMainLink white">Coding</a>
                </li>
                <li class="liTopNavMain">
                    <a href="emailprojects.html" class="liTopNavMainLink white">Email</a>
                </li>
            </ul>
            <li class="liTopNavMain">
                <a href="#" class="liTopNavMainLink white active">Video Editing</a>
            </li>
        </ul>
    </nav>
    </nav>
    `;
}

// Usage example:
const navbarHTML = generateNavbar();
console.log(navbarHTML);
element.innerHTML = "New Heading";