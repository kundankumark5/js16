const addButton = document.querySelector("#add");

const updateLSDAta = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(textAreaData);
  localStorage.setItem("notes", JSON.stringify(notes)); //store data on local
};
const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmlData = `<div class="operations">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="del"><i class="fas fa-trash-alt"></i></button>

        <div class="main ${text ? "" : "hidden"}" ></div>
        <textarea class = '${text ? "hidden" : ""}'></textarea>
      </div>`;
  note.insertAdjacentHTML("afterbegin", htmlData);
  //   console.log(note);
  //   getting the references

  const editBtn = note.querySelector(".edit");
  const delBtn = note.querySelector(".del");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  delBtn.addEventListener("click", () => {
    note.remove(), updateLSDAta();
  }); //del the notes

  // toggle using edit button
  textArea.value = text;
  // mainDiv.innerHTML = text;
  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    // console.log(value);
    mainDiv.innerHTML = value;

    updateLSDAta();
  });
  document.body.appendChild(note);
};
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());
