let result;


if (!localStorage.getItem("result")) {
    
    result = {'python': 0, 'java': 0, 'c++': 0, 'javascript': 0};
    localStorage.setItem("result", JSON.stringify(result));
} else {
    
    result = JSON.parse(localStorage.getItem("result"));
}


let images = document.querySelectorAll('img');

for (let image of images) {
    image.addEventListener('click', function() {
        let imageID = image.id;
        result[imageID] += 1;
        console.log(result);
        localStorage.setItem("result", JSON.stringify(result));
        
        window.location.href = "poll-result.html";
    });
}
