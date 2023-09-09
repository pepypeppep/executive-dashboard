export default defineEventHandler(async (event) => {
    const body = await fetch(`https://bantulkab.go.id/json_bss/get_data_chart_rusunawa_by_bulan`);
    let response = await body.json();
    return response
})