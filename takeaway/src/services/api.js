import banks from "../banks.json";

function getBanks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(banks);
    }, 2000);
  });
}

export default getBanks;
