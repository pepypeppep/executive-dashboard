export default defineEventHandler(async (event) => {
    const id = getQuery(event).id
    const body = await fetch(`https://api.bantulkab.go.id/api/v2/menus/${id}`);
    let response = await body.json();
    return response
})