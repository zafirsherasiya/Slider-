const slide = [
  { id: 1, image: "https://en.wikipedia.org/wiki/Image" },
  { id: 2, image: "https://www.wearegecko.co.uk/blog/how-to-optimise-images-for-the-web-without-losing-quality/" },
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
