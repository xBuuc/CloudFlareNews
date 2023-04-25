for (let i = 1; i <= 5; i++) {
    const button = document.getElementById('s' + i);
    button.addEventListener('click', function() {
      const page = button.innerHTML;
      console.log(page);
    });
  }
  
  const parser = new DOMParser();
  const buttons = document.getElementsByClassName('button');
  
  console.log(buttons)

  Array.from(buttons).forEach(button => {
    button.addEventListener('click', async () => {
      const page = button.innerHTML;
      console.log(page);
  
      try {
        const res = await fetch(`/functions?page=${page}`, {
            headers: {
              'User-Agent': 'Napp'
            }
          });
        const body = await res.json();
        console.log(body);
  
        const articles = body.articles;
  
        const articleList = parser.parseFromString('<ul></ul>', "text/html").body.firstChild;
  
        articles.forEach(article => {
          const title = article.title;
          const author = article.author;
          const url = article.url;
          const imageUrl = article.urlToImage;
  
          const articleItem = parser.parseFromString(`
              <a href="${url}"><dl>
                <h1>${title}</h1>
                <dd>${author}</dd>
                <dt>${url}</dt>
                <dd>${imageUrl}</dd>
              </dl></a>
          `, "text/html").body.firstChild;
  
          articleList.appendChild(articleItem);
        });
  
        const existingArticleList = document.getElementById('article-list');
        existingArticleList.replaceWith(articleList);
        articleList.id = 'article-list';
  
      } catch (error) {
        console.error(error);
      }
    });
  });
  