export const getCategoryId = async () => {
    document.addEventListener('DOMContentLoaded', function() {
        const categories = document.getElementById('categories');
        const lis = categories.querySelectorAll('li');
      
        lis.forEach(li => {
          li.addEventListener('click', function() {
            // Eliminar la clase 'selected' de todos los elementos li
            lis.forEach(item => item.classList.remove('selected'));
            // Agregar la clase 'selected' al elemento li actual
            this.classList.add('selected');
          });
        });
      
        // Verificar si hay un fragmento de URL y marcar la categoría correspondiente
        const hash = window.location.hash.substring(1);
        if (hash) {
          const category = document.getElementById(hash);
          if (category) {
            category.classList.add('selected');
          }
        }
      }
}
