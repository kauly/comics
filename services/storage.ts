const KEYS = {
  favHeros: "comics_fav_heros",
};

export const addHero = (id: string) => {
  const cur: Array<string> = JSON.parse(localStorage.getItem(KEYS.favHeros));
  if (!cur) return;
  localStorage.setItem(KEYS.favHeros, JSON.stringify([...cur, id]));
};

export const deleteHero = (id: string) => {
  const cur: Array<string> = JSON.parse(localStorage.getItem(KEYS.favHeros));
  const i = cur.indexOf(id);
  cur.splice(i, 1);
  localStorage.setItem(KEYS.favHeros, JSON.stringify(cur));
};

export const getFavHeros = () =>
  JSON.parse(localStorage.getItem(KEYS.favHeros)) || [];

export const setLocalFavHeros = (heros: Array<string>) =>
  localStorage.setItem(KEYS.favHeros, JSON.stringify(heros));
