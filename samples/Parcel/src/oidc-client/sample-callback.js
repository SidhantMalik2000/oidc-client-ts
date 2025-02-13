document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const params = new URLSearchParams();

    for (const element of form.elements) {
        if (element.name) {
            params.append(element.name, element.value);
        }
    }
    console.log(params);
    const url = new URL(window.location.href);
    url.search = params.toString();

    // Redirect to your main callback handler with the extracted parameters
    window.location.href = `./callback.html${url.search}`;
});
