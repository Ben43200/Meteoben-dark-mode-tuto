// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('dark-mode-toggle');
//   // Vérifiez l'état du mode sombre dans le localStorage
//   if (localStorage.getItem('darkMode') === 'enabled') {
//     document.body.setAttribute('data-theme', 'dark');
//   }
//   toggleButton.addEventListener('click', () => {
//     if (document.body.getAttribute('data-theme') === 'dark') {
//       document.body.removeAttribute('data-theme');
//       localStorage.setItem('darkMode', 'disabled'); // Mettre à jour le localStorage
//     } else {
//       document.body.setAttribute('data-theme', 'dark');
//       localStorage.setItem('darkMode', 'enabled'); // Mettre à jour le localStorage
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  
  if (!metaThemeColor) {
    console.error('Meta tag with name="theme-color" not found');
    return;
  }

  // Vérifiez l'état du mode sombre dans le localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.setAttribute('data-theme', 'dark');
    metaThemeColor.setAttribute('content', '#000000'); // Couleur pour le mode sombre
  }

  toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('darkMode', 'disabled'); // Mettre à jour le localStorage
      metaThemeColor.setAttribute('content', '#ffffff'); // Couleur pour le mode clair
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'enabled'); // Mettre à jour le localStorage
      metaThemeColor.setAttribute('content', '#3a71d8'); // Couleur pour le mode sombre
    }
  });
});








// ok pour dark-mode et pour metatheme 
// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.getElementById('dark-mode-toggle');
//   const metaThemeColor = document.querySelector('meta[name="theme-color"]');
//   if (!metaThemeColor) {
//     console.error('Meta tag with name="theme-color" not found');
//     return;
//   }
//   // Fonction pour mettre à jour la couleur du thème
//   const updateThemeColor = (theme) => {
//     if (theme === 'dark') {
//       metaThemeColor.setAttribute('content', '#000000'); // Couleur pour le mode sombre
//     } else {
//       metaThemeColor.setAttribute('content', '#408a8b'); // Couleur pour le mode clair
//     }
//   };
//   // Vérifiez l'état du mode sombre dans le localStorage
//   if (localStorage.getItem('darkMode') === 'enabled') {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     updateThemeColor('dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     updateThemeColor('light');
//   }
//   if (toggleButton) {
//     toggleButton.addEventListener('click', () => {
//       if (document.documentElement.getAttribute('data-theme') === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('darkMode', 'disabled'); // Mettre à jour le localStorage
//         updateThemeColor('light');
//       } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('darkMode', 'enabled'); // Mettre à jour le localStorage
//         updateThemeColor('dark');
//       }
//     });
//   }
// });