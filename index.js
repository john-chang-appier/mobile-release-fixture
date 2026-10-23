export const greet = (name) => `hello, ${name?.trim() || 'world'}`;

export const greetAll = (names = []) => names.map(greet);
export const farewell = (name) => `goodbye, ${name?.trim() || 'world'}`;
