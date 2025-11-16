const botonGuardar = document.getElementById("buttonText");

botonGuardar.addEventListener("click", () => {
    const dato = document.getElementById("inputText").value;
    localStorage.setItem("dato", dato);
}); 

