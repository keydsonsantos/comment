const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const CommentPost = document.getElementById('commentPost');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap flex-wrap';
        p.innerHTML = `<strong> ${inputName.value}: </strong> &nbsp ${textComment.value}`;

        CommentPost.appendChild(p);
        inputName.value = '';
        textComment.value = '';
        inputName.focus();
});