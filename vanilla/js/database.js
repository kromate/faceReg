const student = db.collection('students')
const Loader = document.querySelector('.student')
const size = document.querySelector('.stud')

window.addEventListener('DOMContentLoaded', (event) => {
  student.get().then(function (querySnapshot) {
    size.innerHTML = querySnapshot.size
    querySnapshot.forEach(function (doc) {
      loadDataAll(doc.data());
    });
  })
});


function loadDataAll(data) {
  console.log(data);
  const html = `
          <details>
          <summary>${data.name}</summary>
          <p>${data.date}</p>
        </details>

    `;

  Loader.innerHTML += html;

}