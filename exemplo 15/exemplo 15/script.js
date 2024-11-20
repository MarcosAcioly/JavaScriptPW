document.getElementById("clickButton").addEventListener("click", function () {
    const currentDateTime = new Date().toString();
    const responseElement = document.getElementById("response");
    responseElement.textContent = "O que eu recebi do sistema foi " + currentDateTime;
});
