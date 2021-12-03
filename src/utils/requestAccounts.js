// @ts-ignore
export default async function requestAccount() {
    try {
        const res = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
        return false;
    }
}