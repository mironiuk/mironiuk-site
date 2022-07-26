const files = [
    "5F739D34-F2C5-4443-A67B-044A9371C4EE.MOV",
    "752DD720-B0BC-4ADE-A422-F1CDBAA6565B.MOV",
    "camphoto_1804928587.JPG",
    "camphoto_684387517.JPG",
    "IMG_0072.PNG",
    "IMG_0119.PNG",
    "IMG_0133.JPG",
    "IMG_0342.JPG",
    "IMG_0350.JPG",
    "IMG_0353.PNG",
    "IMG_0354.JPG",
    "IMG_0357.PNG",
    "IMG_0384.jpg",
    "IMG_0682.PNG",
    "IMG_0684.jpg",
    "IMG_0733.jpg",
    "IMG_0858.PNG",
    "IMG_0889.PNG",
    "IMG_0898.JPEG",
    "IMG_0900.JPEG",
    "IMG_1333.PNG",
    "IMG_1372.PNG",
    "IMG_1380.JPG",
    "IMG_1406.PNG",
    "IMG_1407.PNG",
    "IMG_1651.MOV",
    "IMG_2314.JPG",
    "IMG_2450.JPG",
    "IMG_6246.JPG",
    "IMG_6252.JPG",
    "IMG_6447.PNG",
    "IMG_6595.JPG",
    "IMG_7371.JPG",
    "IMG_7473.JPG",
    "IMG_7799.JPG",
    "IMG_7800.JPG",
    "IMG_7801.JPG",
    "IMG_7802.mov",
    "IMG_7925.JPG",
    "IMG_7929.JPG",
    "IMG_7942.JPG",
    "IMG_7961.JPG",
    "IMG_8038.JPG",
    "IMG_8094.PNG",
    "IMG_8333.PNG",
    "IMG_8407.mov",
    "IMG_8531.JPG",
    "IMG_8639.JPG",
    "IMG_8674.PNG",
    "IMG_8677.JPG",
    "IMG_8698.JPG",
    "IMG_8700.JPG",
    "IMG_8702.JPG",
    "IMG_8703.PNG",
    "IMG_8705.PNG",
    "IMG_8707.PNG",
    "IMG_8731.PNG",
    "IMG_8748.JPG",
    "IMG_8749.JPG",
    "IMG_8897.JPG",
    "IMG_9299.JPG",
    "IMG_9503.JPG",
    "IMG_9504.JPG",
    "IMG_9506.PNG",
    "IMG_9672.JPG",
    "IMG_9955.PNG",
    "IMG_9975.PNG",
    "probujesz.MOV",
    "RPReplay_Final1612352067.mov",
];

const container = document.getElementById("container");

files.forEach((file) => {
    if (file.split(".")[1].toLowerCase() === "mov") {
        const video = document.createElement("video");
        video.setAttribute("controls", "true");
        video.innerHTML = `<source src="archiwum/${file}" />`;
        container.appendChild(video);
    } else {
        const image = document.createElement("img");
        image.setAttribute("src", `archiwum/${file}`);
        image.setAttribute("alt", "mateusz mironiuk zjebek z chrobrego");
        image.setAttribute("title", "mateusz mironiuk zjebek z chrobrego");
        container.appendChild(image);
    }
});
