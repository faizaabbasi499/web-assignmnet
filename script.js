// Task 1 and Task 5: Form handling and age verification
var form = document.getElementById("feedback-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message");
    var discount = document.getElementById("discount");

    if (username !== "" && email !== "") {
        message.textContent = "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";
        message.style.color = "green";
    } else {
        message.textContent = "Please fill in your name and email.";
        message.style.color = "red";
    }

    var birthYearText = document.getElementById("birth-year").value.trim();
    var birthYear = parseInt(birthYearText, 10);

    if (birthYearText === "" || isNaN(birthYear) ||
        birthYear < 1900 || birthYear > 2026) {
        discount.textContent = "Please enter a valid birth year.";
    } else {
        var age = 2026 - birthYear;

        // These age ranges are example rules; follow your teacher's rules if different.
        if (age >= 18 && age <= 25) {
            discount.textContent = "You are " + age +
                " years old. You qualify for the student discount!";
        } else if (age >= 60) {
            discount.textContent = "You are " + age +
                " years old. You qualify for the senior discount!";
        } else {
            discount.textContent = "You are " + age +
                " years old. No special age discount available.";
        }
    }
});

// Task 2: Highlight menu rows when the mouse moves over them
var rows = document.querySelectorAll("#menu-table tbody tr");

for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f6e3b4";
        this.style.color = "black";
    });

    rows[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
}

// Task 3: Light and dark mode
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Task 4: Calculate the order total
var items = document.querySelectorAll(".item");
var totalText = document.getElementById("total");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("change", function() {
        var total = 0;

        for (var j = 0; j < items.length; j++) {
            if (items[j].checked) {
                total = total + Number(items[j].value);
            }
        }

        totalText.textContent = "Total: $" + total;
    });
}

// Task 6: Read More and Read Less
var readMoreBtn = document.getElementById("read-more-btn");
var extraText = document.getElementById("extra-text");

readMoreBtn.addEventListener("click", function() {
    if (extraText.hidden) {
        extraText.hidden = false;
        readMoreBtn.textContent = "Read Less";
    } else {
        extraText.hidden = true;
        readMoreBtn.textContent = "Read More";
    }
});

// Task 7: Filter menu items by category
function filterMenu(category) {
    for (var i = 0; i < rows.length; i++) {
        if (category === "all" || rows[i].className === category) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

document.getElementById("btn-all").addEventListener("click", function() {
    filterMenu("all");
});

document.getElementById("btn-drinks").addEventListener("click", function() {
    filterMenu("drink");
});

document.getElementById("btn-pastries").addEventListener("click", function() {
    filterMenu("pastry");
});

// Task 8: Show whether the cafe is open
var statusBanner = document.getElementById("status");
var hour = new Date().getHours();

if (hour >= 8 && hour < 22) {
    statusBanner.textContent = "We are Open!";
    statusBanner.style.color = "green";
} else {
    statusBanner.textContent = "Closed - Open at 8 AM";
    statusBanner.style.color = "red";
}

// Task 9: Character counter
var notes = document.getElementById("special-notes");
var charCount = document.getElementById("char-count");

notes.addEventListener("input", function() {
    var remaining = 100 - notes.value.length;
    charCount.textContent = remaining + " characters remaining";
});
