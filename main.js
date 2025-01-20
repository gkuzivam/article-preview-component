document.getElementById('share-button').addEventListener('click', function() {
    var socialIcons = document.getElementById('social-icons');
    if (socialIcons.style.display === 'none' || socialIcons.style.display === '') {
      socialIcons.style.display = 'block';
    } else {
      socialIcons.style.display = 'none';
    }
  });