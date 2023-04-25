// const apiKey = '29cc4d159c8d4e638e806ec98bcc87bf'
const pageSize = 10

  export async function onRequestGet({env, request}) {

    const key = env.apiKey.replace(' ', '');

    const params = (new URL(request.url)).searchParams;

    const page = params.get('page');

    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${key}`;
    const res = await fetch(url);
    const articles = await res.json();

    return new Response(JSON.stringify(articles), { 
        headers: { 
            'content-type': 'application/json' 
        } 
    });
}