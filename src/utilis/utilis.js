export async function getRandomNumber() {
    const res = await fetch('/get-all-rounds');

    if (res.ok) {
        return await res.text()
    } else {
        throw new Error('Request Failed');
    }
}