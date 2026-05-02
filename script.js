let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
  let input = document.getElementById("noteInput");

  if (input.value.trim() === "") {
    alert("Write something!");
    return;
  }

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  displayNotes();
}

function displayNotes() {
  let container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    let div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      ${note}
      <br>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    container.appendChild(div);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

displayNotes();