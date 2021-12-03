// @ts-ignore
export default async function requestAccount() {
    console.log(window);
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        console.error(error);
        alert("Login to Metamask first");
    }
}