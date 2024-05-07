function toggleCampos() {
    var tipoBusqueda = document.querySelector('input[name="tipoBusqueda"]:checked').value;
    var estudianteFields = document.getElementById('estudianteFields');
    var profesorFields = document.getElementById('profesorFields');

    if (tipoBusqueda === 'estudiante') {
        estudianteFields.classList.remove('hidden');
        profesorFields.classList.add('hidden');
    } else if (tipoBusqueda === 'profesor') {
        estudianteFields.classList.add('hidden');
        profesorFields.classList.remove('hidden');
    }
}
