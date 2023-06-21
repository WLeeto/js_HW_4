document.addEventListener('DOMContentLoaded', function() {
    const fontSizes = document.getElementsByClassName('font-size');
  
    function changeFontSize(event) {
      event.preventDefault();
  
      const size = this.dataset.size;
      const book = document.getElementById('book');
  
      for (const fontSize of fontSizes) {
        fontSize.classList.remove('font-size_active');
      }
  
      this.classList.add('font-size_active');
  
      book.classList.remove('book_fs-small', 'book_fs-big');
      if (size === 'small') {
        book.classList.add('book_fs-small');
      } else if (size === 'big') {
        book.classList.add('book_fs-big');
      }
    }
  
    for (const fontSize of fontSizes) {
      fontSize.addEventListener('click', changeFontSize);
    }
  });