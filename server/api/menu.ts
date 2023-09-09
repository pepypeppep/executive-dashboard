export default defineEventHandler(async (event) => {
    // const { data} = await useFetch('https://api.bantulkab.go.id/api/v2/menus');
    const body = await fetch('https://api.bantulkab.go.id/api/v2/menus');
    let response = await body.json();
    return response
})