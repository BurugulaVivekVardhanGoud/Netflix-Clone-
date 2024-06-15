document.addEventListener('DOMContentLoaded', () => {
     const modal = document.getElementById('modal');
     const modalTitle = document.getElementById('modal-title');
     const modalDescription = document.getElementById('modal-description');
     const closeButton = document.querySelector('.close');
 
     function showModal(title, description) {
         modalTitle.textContent = title;
         modalDescription.textContent = description;
         modal.style.display = 'flex';
     }
 
     function hideModal() {
         modal.style.display = 'none';
     }
 
     document.querySelectorAll('.movie').forEach(movie => {
         movie.addEventListener('click', () => {
             const title = movie.getAttribute('data-title');
             const description = movie.getAttribute('data-description');
             showModal(title, description);
         });
     });
 
     closeButton.addEventListener('click', hideModal);
 
     window.addEventListener('click', (event) => {
         if (event.target === modal) {
             hideModal();
         }
     });
 });
 