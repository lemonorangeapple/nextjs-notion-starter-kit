window.addEventListener("resize", (event) => {
  const orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
  if (orientation === 'portrait') {
    document.getElementById("hengping").style.display = "contents";
  } else {
    document.getElementById("hengping").style.display = "none";
  }
}, false);
