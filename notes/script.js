//CHATGPT generated code to add little copy link to header icon
document.addEventListener("DOMContentLoaded", function () {
    // Loop through all heading tags
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading) => {
        // Ensure each heading has an id
        if (!heading.id) {
            heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]/g, "");
        }

        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = "🔗";
        link.style.marginLeft = "8px";
        link.style.textDecoration = "none";
        link.style.cursor = "pointer";
        link.title = "Copy link to clipboard";

        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = `${location.origin}${location.pathname}#${heading.id}`;
            navigator.clipboard.writeText(url).then(() => {
                link.textContent = "✅";
                setTimeout(() => {
                    link.textContent = "🔗";
                }, 1000);
            });
        });

        heading.appendChild(link);
    });
});
