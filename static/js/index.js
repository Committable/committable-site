let a = document.querySelectorAll(".faq");
for (let e = 0; e < a.length; e++) {
    let s = a[e].querySelector(".faq-answer")
      , l = a[e].querySelector(".arrow-down");
    a[e].addEventListener("click", ()=>{
        for (let c = 0; c < a.length; c++) {
            let t = a[c].querySelector(".faq-answer")
              , i = a[c].querySelector(".arrow-down");
            a[e] != a[c] && (t.style.maxHeight = "0px",
            i.classList.replace("rotate-180", "rotate-0"))
        }
        l.classList.contains("rotate-180") ? (s.style.maxHeight = 0 + "px",
        l.classList.replace("rotate-180", "rotate-0")) : (s.style.maxHeight = s.scrollHeight + "px",
        l.classList.replace("rotate-0", "rotate-180"))
    }
    )
}
let n = document.querySelectorAll(".switcher");
localStorage.getItem("color-theme") === "dark" || !("color-theme"in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
n.forEach(e=>{
    e.addEventListener("click", function() {
        localStorage.getItem("color-theme") ? localStorage.getItem("color-theme") === "light" ? (document.documentElement.classList.add("dark"),
        localStorage.setItem("color-theme", "dark")) : (document.documentElement.classList.remove("dark"),
        localStorage.setItem("color-theme", "light")) : document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"),
        localStorage.setItem("color-theme", "light")) : (document.documentElement.classList.add("dark"),
        localStorage.setItem("color-theme", "dark"))
    })
}
);
let r = document.querySelectorAll(".tab")
  , o = document.querySelector(".tab-indicator")
  , d = document.querySelectorAll(".panel")
  , m = document.querySelectorAll(".panel-preview");
o !== null && (o.style.width = r[0].getBoundingClientRect().width + "px",
o.style.left = r[0].getBoundingClientRect().left - r[0].parentElement.getBoundingClientRect().left + "px");
r.forEach(e=>{
    e.addEventListener("click", ()=>{
        let s = e.getAttribute("aria-controls");
        o.style.width = e.getBoundingClientRect().width + "px",
        o.style.left = e.getBoundingClientRect().left - e.parentElement.getBoundingClientRect().left + "px",
        d.forEach(l=>{
            let c = l.getAttribute("id");
            s === c ? (l.classList.remove("invisible", "opacity-0", "scale-90"),
            l.classList.add("visible", "opacity-100", "scale-100")) : (l.classList.add("invisible", "opacity-0", "scale-90"),
            l.classList.remove("visible", "opacity-100", "scale-100")),
            m.forEach(t=>{
                let i = t.getAttribute("data-target");
                s === i ? (t.classList.replace("translate-y-[100%]", "translate-y-0"),
                t.classList.replace("scale-75", "scale-100"),
                t.classList.replace("opacity-50", "opacity-100"),
                t.classList.replace("z-0", "z-10")) : (t.classList.replace("scale-100", "scale-75"),
                t.classList.replace("opacity-100", "opacity-50"),
                t.classList.replace("z-10", "z-0"),
                setTimeout(()=>{
                    t.classList.replace("translate-y-0", "translate-y-[100%]")
                }
                , 300),
                clearTimeout())
            }
            )
        }
        )
    }
    )
}
);
const u = document.querySelector("#hamburger")
  , g = document.querySelector("#navbar");
u.addEventListener("click", ()=>{
    g.classList.toggle("navbar-active")
}
);
