const slide = [
  { id: 1, image: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" },
  { id: 2, image: "https://img.magnific.com/premium-photo/documentary-filmmaker-capturing-footage-rare-species-bird-wild-realistic-photograp_1101825-72568.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 3, image: "https://media.istockphoto.com/id/665698842/photo/mountain.jpg?s=612x612&w=is&k=20&c=UYck5fgIyc_rjlHc9Nmq25QV3NEWcrzUi2_OwvoOGJk=" },
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
