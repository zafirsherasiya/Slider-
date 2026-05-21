const slide = [
  { id: 1, image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg" },
  { id: 2, image: "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPFA6r_IbzQJcyXrKT5TSritv0S_iWwFmw&s" },
];

function slideShow() {
  let index = 0;
  const box = document.getElementById("box");

  box.style.width = "500px";
  box.style.height = "300px";
  box.style.border = "5px solid #222";
  box.style.borderRadius = "10px";
  box.style.margin = "auto";
  box.style.overflow = "hidden";
  box.style.backgroundColor = "#ddd";

  setInterval(() => {
    box.innerHTML = "";

    const img = document.createElement("img");
    img.src = slide[index].image;

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    box.appendChild(img);

    index = (index + 1) % slide.length;
  }, 2000);
}

slideShow();