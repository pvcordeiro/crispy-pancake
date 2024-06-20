function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a segunda imagem
    img.setAttribute("src", "./assets/cropped_image (1).png")
    img.setAttribute("alt", "Foto de Paulo Victor rindo atoa.")
  } else {
    // se não estiver light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/cropped_image.png")
    img.setAttribute("alt", "Foto de Paulo Victor mexendo no celular, usando óculos e camisa branca.")
  }
}
