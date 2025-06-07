
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Enter a valid email.");
    return;
  }

  alert("Message sent successfully!");
  this.reset(); // Optional: clear form
});

// To-Do List Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) {
    alert("Enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  // Remove task on click
  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
