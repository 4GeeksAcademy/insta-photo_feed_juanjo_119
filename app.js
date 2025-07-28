const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})



function showView(view) {
      document.getElementById('view-single').classList.add('d-none');
      document.getElementById('view-gallery').classList.add('d-none');

      if (view === 'single') {
        document.getElementById('view-single').classList.remove('d-none');
      } else if (view === 'gallery') {
        document.getElementById('view-gallery').classList.remove('d-none');
      }
    }

    // Mostrar vista individual al cargar
    showView('single');