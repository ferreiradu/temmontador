function buscarCidade(event) {

    event.preventDefault();

    let cidade = document
        .getElementById("cidade")
        .value
        .trim()
        .toLowerCase();

    cidade = cidade
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

    window.location.href = cidade + "/";

}