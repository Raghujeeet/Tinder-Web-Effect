users = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1545912453-db258ca9b7b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    displaypic:
      "https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    pandingmsg: "6",
    age: "23",
    name: "Divya",
    location: "Delhi, India",
    intrests: [],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, maiores distinctio! Suscipit doloribus saepe harum inventore! Veniam, harum eos! Dolore dolor dolorem odit impedit ullam.",
    isFriend: "null",
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displaypic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    pandingmsg: "10",
    age: "19",
    name: "Shareya",
    location: "Uk, India",
    intrests: [],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, maiores distinctio! Suscipit doloribus saepe harum inventore! Veniam, harum eos! Dolore dolor dolorem odit impedit ullam.",
    isFriend: "null",
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    displaypic:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pandingmsg: "12",
    age: "22",
    name: "Sangeeta",
    location: "Kolkata, India",
    intrests: [],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, maiores distinctio! Suscipit doloribus saepe harum inventore! Veniam, harum eos! Dolore dolor dolorem odit impedit ullam.",
    isFriend: "null",
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pandingmsg: "9",
    age: "21",
    name: "Shivangi",
    location: "Bihar, India",
    intrests: [],
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, maiores distinctio! Suscipit doloribus saepe harum inventore! Veniam, harum eos! Dolore dolor dolorem odit impedit ullam.",
    isFriend: "null",
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let deny = select(".deny");
let accept = select(".accept");

let curr = 0;
let animated = false;

function setData(index) {
  select(".profileimg img").src = users[curr].profilepic;
  select(".badge h5").textContent = users[curr].pandingmsg;
  select(".details .location").textContent = users[index].location;
  select(".details .name").textContent = users[index].name;
  select(".details .age").textContent = users[index].age;
}

(function setInitail() {
  select(".main img").src = users[curr].displaypic;

  setData(curr);
  curr = 1;
})();

function changeImg() {
  if (!animated) {
    animated = true;
    let tl = gsap.timeline({
      onComplete: function () {
        animated = false;
        let main = select(".main");
        let incoming = select(".incoming");

        incoming.classList.remove("z-[1]");
        incoming.classList.add("z-[2]");
        incoming.classList.remove("incoming");

        main.classList.remove("z-[2]");
        main.classList.add("z-[1]");

        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) {
          curr = 0;
        } else {
          select(".main img").src = users[curr].displaypic;
          curr++;
        }

        main.classList.remove("main");
        main.classList.add("incoming");
        incoming.classList.add("main");
      },
    });

    tl.to(
      ".main",
      {
        scale: 1.6,
        opacity: 0,
        ease: Circ,
        duration: 0.4,
      },
      "a"
    );

    tl.from(
      ".incoming",
      {
        scale: 1,
        opacity: 0,
        ease: Circ,
        duration: 0.3,
      },
      "a"
    );
  }
}

deny.addEventListener("click", () => {
  changeImg();
  setData(curr - 1);

  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.01,
    ease: Power4.easeInOut,
    duration: 1,
  });
});

accept.addEventListener("click", () => {
  changeImg();
  setData(curr - 1);

  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.01,
    ease: Power4.easeInOut,
    duration: 1,
  });
});

function createContainer() {
  document.querySelectorAll(".element").forEach(function (elem) {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[1]}container`, "overflow-hidden");
    div.appendChild(elem);
    select(".details").appendChild(div);
  });
}
