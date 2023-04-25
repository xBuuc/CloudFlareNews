for (let i = 1; i <= 5; i++) {
    const button = document.getElementById('s' + i);
    button.addEventListener('click', function() {
      const page = button.innerHTML;
      console.log(page);
    });
  }

const btn = document.getElementsByClassName('button')

btn.addEventListener('click', async() => { 
    const res = await fetch(`/functions?page=${page}`);
    const body = await res.json();
    console.log(res);
});

