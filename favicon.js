document.addEventListener("DOMContentLoaded", function() {
    const text = "Kumaくま";
    let index = 0;

    function updateFavicon() {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#F7F7F7"; // Light background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000"; // Dark text color
        ctx.font = "24px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text[index], canvas.width / 2, canvas.height / 2);
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = canvas.toDataURL("image/png");
        document.head.appendChild(favicon);

        // Remove the old favicon
        const oldFavicon = document.querySelector("link[rel='icon']");
        if (oldFavicon) {
            document.head.removeChild(oldFavicon);
        }

        index = (index + 1) % text.length;
    }

    updateFavicon(); // Initial call
    setInterval(updateFavicon, 1500); // Update every 1.5 seconds
});