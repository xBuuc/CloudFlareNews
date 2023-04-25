for (let i = 1; i <= 5; i++) {
    const button = document.getElementById('s' + i);
    button.addEventListener('click', function() {
      const page = button.innerHTML;
      console.log(page);
    });
  }

  const parser = new DOMParser();
  const buttons = document.getElementsByClassName('button');
  
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', async () => {
      const page = button.innerHTML;
      console.log(page);
  
      const res = await fetch(`/functions?page=${page}`);
      const body = await res.json();
      console.log(body);
    
      const title = body.articles[index].title;
      const author = body.articles[index].author;
      const url = body.articles[index].url;
      const imageUrl = body.articles[index].urlToImage;
  
      const el = parser.parseFromString(`
        <dl>
          <dt>${title}</dt>
          <dd>${author}</dd>
          <dt>${url}</dt>
          <dd>${imageUrl}</dd>
        </dl>
      `, "text/html").body.firstChild;
  
      button.after(el);
    });
  });