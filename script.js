function buscarCidade(event) {

    event.preventDefault();

    let cidade = document
        .getElementById("cidade")
        .value
        .toLowerCase()
        .trim();

    // Remove acentos
    cidade = cidade
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    // Remove o estado no final da busca
    // Exemplos: -pr, pr, -parana, parana
    cidade = cidade
        .replace(/[\s,-]+(pr|parana)$/i, "")
        .trim();

    // Converte espaços em hífen
    cidade = cidade.replace(/\s+/g, "-");

    window.location.href = cidade + "/index.html";
}
