let color = 'red';
    setInterval(() => {
      const textElement = document.getElementById('text');
      if (color === 'red') {
        textElement.style.color = 'yellow';
        color = 'yellow';
      } else {
        textElement.style.color = 'red';
        color = 'red';
      }
    }, 1500); // Change color every 1.5 seconds