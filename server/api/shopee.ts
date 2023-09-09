export default defineEventHandler(async (event) => {
    const body = await fetch(`https://demo.bigbox.co.id/bigmarket/ajax/get-per-marketplace`);
    let response = await body.json();
    return response
})