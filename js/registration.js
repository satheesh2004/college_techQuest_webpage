const allEvents = [
  "COLLOQUIUM (2 M/E)",
  "QUAESTIUM (1 M/E)",
  "ALGOTIUM (1 M/E)",
  "INNOVARIUM (Team)",
  "DESIGNIUM (1 M/E)",
  "BLENDARIUM (1 M/E)",
  "PHOTOGRAPHY (1 M/E)",
  "POSTER CREATION (1 M/E)"
];

const eventId = {
  "COLLOQUIUM (2 M/E)": "CSE24",
  "QUAESTIUM (1 M/E)": "CSE25",
  "ALGOTIUM (1 M/E)": "CSE26",
  "INNOVARIUM (Team)": "CSE27",
  "DESIGNIUM (1 M/E)": "CSE28",
  "BLENDARIUM (1 M/E)": "CSE29",
  "PHOTOGRAPHY (1 M/E)": "CSE30",
  "POSTER CREATION (1 M/E)": "CSE31"
};

const selects = document.querySelectorAll(".event-dropdown");

selects.forEach(select => {
  select.addEventListener("change", () => {
    let selectedValues = Array.from(selects).map(s => s.value);

    selects.forEach(s => {
      Array.from(s.options).forEach(option => {
        if (option.value && selectedValues.includes(option.value) && s.value !== option.value) {
          option.disabled = true; // disable already selected
        } else {
          option.disabled = false; // re-enable if not selected elsewhere
        }
      });
    });
  });
});


//  populateDropdowns();

function updateEventOptions() {
  // collect selected IDs (CSE24, CSE25, etc.)
  const selectedValues = Array.from(dropdowns).map(d => d.value);

  dropdowns.forEach(dropdown => {
    const currentValue = dropdown.value;

    // reset dropdown
    dropdown.innerHTML = '<option value="">Select</option>';

    allEvents.forEach(event => {
      const id = eventId[event];

      // allow option if it's not already selected, or if it's the current one
      if (!selectedValues.includes(id) || id === currentValue) {
        const option = document.createElement("option");
        option.value = id;   // backend receives ID
        option.text = event; // user sees event name
        dropdown.appendChild(option);
      }
    });

    // restore previous selection
    dropdown.value = currentValue;
  });
}

// populateDropdowns();

const membersDropdown = document.getElementById("members");
const memberDetailsDiv = document.getElementById("memberDetails");
const form = document.getElementById("registrationForm");

function renderMemberFields(count) {
  memberDetailsDiv.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member-section");
    let role = i === 1 ? "Team Leader" : `Member ${i}`;
    memberDiv.innerHTML = `
      <h4 style="color:#ffcc00;">${role}</h4>
      <input type="text" name="member-${i}" class="member-name input-field" placeholder="${role} Name" required>
      <input type="email" name="email-${i}" class="member-email input-field" placeholder="${role} Email" required>
    `;
    memberDetailsDiv.appendChild(memberDiv);
  }
}

renderMemberFields(1);

membersDropdown.addEventListener("change", (e) => {
  renderMemberFields(parseInt(e.target.value));
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMobile(mobile) {
  return /^[0-9]{10}$/.test(mobile);
}

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let valid = true;
//   let errors = [];

//   if (!document.getElementById("teamName").value.trim()) {
//     valid = false;
//     errors.push("Team Name is required.");
//   }
//   if (!document.getElementById("collegeName").value.trim()) {
//     valid = false;
//     errors.push("College Name is required.");
//   }
//   if (!membersDropdown.value) {
//     valid = false;
//     errors.push("Please select number of members.");
//   }

//   document.querySelectorAll(".member-name").forEach((input, index) => {
//     if (!input.value.trim()) {
//       valid = false;
//       errors.push(`Name of ${index === 0 ? "Team Leader" : "Member " + (index + 1)} is required.`);
//     }
//   });

//   document.querySelectorAll(".member-email").forEach((input, index) => {
//     if (!validateEmail(input.value)) {
//       valid = false;
//       errors.push(`${index === 0 ? "Team Leader" : "Member " + (index + 1)} Email is invalid.`);
//     }
//   });

//   const selectedEvents = Array.from(dropdowns).map(d => d.value).filter(v => v);
//   if (selectedEvents.length < 3) {
//     valid = false;
//     errors.push("Please select 3 different events.");
//   }
//   if (new Set(selectedEvents).size !== 3) {
//     valid = false;
//     errors.push("Events must be unique.");
//   }

//   const mobile = document.getElementById("mobile").value;
//   if (!validateMobile(mobile)) {
//     valid = false;
//     errors.push("Mobile number must be 10 digits.");
//   }

//   const file = document.getElementById("paymentScreenshot").files[0];
//   if (!file) {
//     valid = false;
//     errors.push("Payment screenshot is required.");
//   }

//   if (valid) {
//     alert("✅ Form submitted successfully!");
//     form.reset();
//     renderMemberFields(1);
//     populateDropdowns();
//   } else {
//     alert("❌ Please fix the following:\n\n" + errors.join("\n"));
//   }
// });

const qrImage = document.getElementById("qrCodeImage");
const membersSelect = document.getElementById("members");

membersSelect.addEventListener("change", function () {
  if (this.value === "1") {
    qrImage.src = "./img/qr_code/1.jpg"; // QR for ₹150
  } else if (this.value === "2") {
    qrImage.src = "./img/qr_code/2.jpg"; // QR for ₹300
  } else if (this.value === "3") {
    qrImage.src = "./img/qr_code/3.jpg"; // QR for ₹450
  } else {
    qrImage.src = "./img/symoqr.webp"; // Default QR
  }
});


// function submitForm() {
//   const form = document.getElementById("registrationForm");
//   const formData = new FormData(form);

//  for (let [key, value] of formData.entries()) {
//   console.log(key, value);
// }

//   fetch("http://10.201.197.208:5000/api/techquest/register", {
//     method: "POST",
//     body: formData
//   })
//   .then(res => res.json())
//   .then(data => {
//     alert("✅ Registration Successful!");
//     console.log("Response:", data);
//   })
//   .catch(err => {
//     alert("❌ Error while registering. Please try again.");
//     console.error(err);
//   });
// }

function submitForm() {
  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);

  const teamNameField = document.getElementById("teamName");
  const mobileField = document.getElementById("mobile");

  // Remove previous error styles/messages
  teamNameField.classList.remove("error-input");
  mobileField.classList.remove("error-input");
  const oldError = document.getElementById("form-error");
  if (oldError) oldError.remove();

  const submitBtn = document.querySelector(".form-submit-btn");

  // Save original button text
  const originalBtnContent = submitBtn.innerHTML;

  // Create inline spinner element
  const spinner = document.createElement("span");
  spinner.innerText = "⏳"; // simple spinner emoji
  spinner.style.display = "inline-block";
  spinner.style.marginRight = "8px";

  // Set button to spinner + text
  submitBtn.innerHTML = "";
  submitBtn.appendChild(spinner);
  submitBtn.appendChild(document.createTextNode("Registering..."));
  submitBtn.disabled = true;

  fetch("https://mzcet-omega.vercel.app/api/techquest/register", {
    method: "POST",
    body: formData
  })
    .then(async res => {
      const data = await res.json();

      // Restore button state
      submitBtn.innerHTML = originalBtnContent;
      submitBtn.disabled = false;

      if (!res.ok) {
        console.log("Response:", data);

        const msg = document.createElement("p");
        msg.id = "form-error";
        msg.style.color = "red";
        msg.style.fontWeight = "bold";
        msg.style.textAlign = "center";

        if (data.error.includes("team")) {
          teamNameField.classList.add("error-input");
          msg.innerText = "❌ Team name is already taken.";
        } else if (data.error.includes("mobile")) {
          mobileField.classList.add("error-input");
          msg.innerText = "❌ Mobile number is already registered.";
        } else {
          msg.innerText = "❌ Registration failed. Please check your details.";
        }

        submitBtn.insertAdjacentElement("beforebegin", msg);
        throw new Error(data.error || "Registration failed");
      }

      // Success
      alert("✅ Registration Successful!");
      console.log("Response:", data);
    })
    .catch(err => {
      // Restore button state on error
      submitBtn.innerHTML = originalBtnContent;
      submitBtn.disabled = false;

      console.error("Error:", err.message);
    });
}


