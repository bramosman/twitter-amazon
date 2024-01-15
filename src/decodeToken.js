// src/decodeToken.js
const encodedToken = "AAAAAAAAAAAAAAAAAAAAAHuErgEAAAAACo5IhDOKsnFRS5nH%2FPksrYIrfLU%3DaZmJDiZ2C4RKG5PY3vc8lojrPBfS0vKVRKuJBt3zokSNdPt3Z7";
const decodedToken = decodeURIComponent(encodedToken);

console.log(decodedToken);

export { decodedToken };
