/* let box = document.querySelector("div");
    input = document.querySelector("input");

input.addEventListner("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value; 
});
 */
/* 
document.getElementById("generatePDF").onclick = function{
    let doc = new jsPDF()

    let users = [
        {
            name:'Ragul',
            age:21,
            country:'India'
        },
        {
            name:'Sachin',
            age:15,
            country:'India'
        }
    ]

    let info = []

    users.forEach((element,index,array) => {
        info.push([element.name,element.age,element.country])
    });

    doc.autoTable({
        head:[['Name','Age','Country']],
        body:info

    })

    doc.save("Profile.pdf")
} */
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide active';
}

function prevSlide() {
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide-1+slides.length)%slides.length;
	slides[currentSlide].className = 'slide active';
}
