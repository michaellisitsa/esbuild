import url from "./assets/example.png";
let image = new Image();
image.src = url;
document.body.appendChild(image);

import svg from "./assets/example.svg";
let doc = new DOMParser().parseFromString(svg, "application/xml");
let node = document.importNode(doc.documentElement, true);
document.body.appendChild(node);
