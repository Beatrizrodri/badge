const LinksSocialMedia = {
  github: 'Beatrizrodri',
  youtube: 'channel/UCFDRn2o3BRcyN9bp5Pt1RZA',
  facebook: 'profile.php?id=100006794402720',
  instagram: 'beatriz_rodrigueslc',
  twitter: 'Beatrizrodrilc'
}

function changeSocialMediaLinks() {
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
