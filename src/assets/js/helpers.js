export function getFunName() {
  const adjectives = ['adorable','pretty','clean','fancy','beautiful','nervous'];

  const nouns = ['women', 'men', 'children','leaves','knives','teeth'];

  return (`${adjectives[Math.floor(Math.random()*adjectives.length)]}-${adjectives[Math.floor(Math.random()*adjectives.length)]}-${nouns[Math.floor(Math.random()*nouns.length)]}`);
}