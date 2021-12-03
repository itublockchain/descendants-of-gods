export default function registerEvents(eth) {
  eth.on("network", (_newNetwork, oldNetwork) => {
    console.log("giriş");
    if (oldNetwork) window.location.reload();
  });

  eth.on("accountsChanged", () => {
    console.log("hesap değişti");
  });

  eth.on("disconnect", () => {
    console.log("disconnect");
    window.location.reload();
  });
}
