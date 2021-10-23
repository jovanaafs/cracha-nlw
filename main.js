// variaveis: let ou const
// let: pode mudar a variavel depois , const: nao pode mudar a variavel

const LinksSocialMedia = {
  github: 'jovanaafs',
  youtube: '',
  facebook: 'jovanaafs',
  instagram: 'jovanaafs',
  twitter: ''
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olivia'
  //userName.textContent = "Marcelo"

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

//arrow function
