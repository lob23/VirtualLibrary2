import Quill from 'quill';

export default function htmlToDelta(html) {
    const div = document.createElement('div');
    div.setAttribute('id', 'htmlToDelta');
    div.innerHTML = `<div id="quillEditor" style="display:none">${html}</div>`;
    document.body.appendChild(div);
    const quill = new Quill('#quillEditor', {
        theme: 'snow',
    });
    const delta = quill.getContents();
    document.getElementById('htmlToDelta').remove();
    return delta;
}