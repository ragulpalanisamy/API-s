/* let box = document.querySelector("div");
    input = document.querySelector("input");

input.addEventListner("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value; 
});
 */

function generatePDF(){
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

    doc.save("output.pdf")
}