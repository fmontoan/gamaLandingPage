const form = document.getElementById('form')

form.addEventListener('submit', evt => {
  evt.preventDefault()

  let nome = document.getElementById('nome').value

  let email = document.getElementById('email').value

  let clientData = { nome, email }

  let convertedData = JSON.stringify(clientData)
  localStorage.setItem('lead', convertedData)

  let content = document.getElementById('content')
  let obrigado = `<p> Obrigado  </p>`
  let boasCompras = `<p> Boas Compras  </p>`
  content.innerHTML = obrigado
  setTimeout(() => {
    content.innerHTML = boasCompras
  }, 1500)
})
