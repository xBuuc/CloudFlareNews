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
  
      const el = parser.parseFromString(`
        <dl>
          <dt>${body.articles.article.title}</dt>
          <dd>${body.articles.article.author}</dd>
          <dt>${body.articles.article.url}</dt>
          <dd>${body.articles.article.urlToImage}}</dd>
        </dl>
      `, "text/html").body.firstChild;

      buttons.after(el);
    });
  });

