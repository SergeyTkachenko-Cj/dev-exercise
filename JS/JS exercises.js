
async function f() {
  const git = await fetch('https://api.github.com/users/SergeyTkachenko-Cj');
  const json = await git.json();

  const img = document.createElement('img');
  img.src = json.avatar_url;
  document.body.append(img);
}

f();
