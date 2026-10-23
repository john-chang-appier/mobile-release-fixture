export const greet = (name) => `hello, ${name?.trim() || 'world'}`;

export const greetAll = (names = []) => names.map(greet);
