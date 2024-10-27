$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Cloud Engineer',
        'Cloud Architect',
        'DevOps Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// const counter = document.querySelector(".counter-number");
// const counter2 = document.querySelector(".footer-counter");
// async function updateCounter() {
//     let response = await fetch(
//         "https://ofcfjltfrutgp6nekkukv7weu40sxibu.lambda-url.us-east-1.on.aws/"
//     );
//     let data = await response.json();
//     counter.innerHTML = `👀 Views: ${data}`;
//     counter2.innerHTML = `👀 Views: ${data}`;
// }
// updateCounter();


// document.addEventListener("DOMContentLoaded", () => {
//     // Select all counter elements (nav and footer)
//     const counters = document.querySelectorAll(".counter-number, .footer-counter");

//     // Function to update counters
//     async function updateCounter() {
//         try {
//             let response = await fetch(
//                 "https://ofcfjltfrutgp6nekkukv7weu40sxibu.lambda-url.us-east-1.on.aws/"
//             );
//             let data = await response.json();

//             // Update all selected counters
//             counters.forEach(counter => {
//                 counter.innerHTML = `👀 Views: ${data}`;
//             });
//         } catch (error) {
//             console.error("Failed to update the counters:", error);
//             counters.forEach(counter => {
//                 counter.innerHTML = "Couldn't read the counter";
//             });
//         }
//     }

//     updateCounter();
// });


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-number, .footer-counter");
    
    async function updateCounter() {
        try {
            let response = await fetch(
                "https://ofcfjltfrutgp6nekkukv7weu40sxibu.lambda-url.us-east-1.on.aws/"
            );
            let data = await response.json();
            
            counters.forEach(counter => {
                counter.innerHTML = `👀 Views: ${data}`;
            });
        } catch (error) {
            console.error("Failed to update the counter:", error);
        }
    }

    updateCounter();
});


