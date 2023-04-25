// const apiKey = '29cc4d159c8d4e638e806ec98bcc87bf'
const pageSize = 10

  export async function onRequestGet({env, request}) {

    const apiKey = env.apiKey.replace(' ', '');

    const params = (new URL(request.url)).searchParams;

    const page = params.get('page');

    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    const res = await fetch(url);
    const weather = await res.json();

    return new Response(JSON.stringify(weather), { 
        headers: { 
            'content-type': 'application/json' 
        } 
    });
}