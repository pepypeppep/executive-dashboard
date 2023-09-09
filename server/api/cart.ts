export default defineEventHandler(async (event) => {
    const body = await fetch(`https://dummyjson.com/carts/1`);
    let response = await body.json();
    return response
})