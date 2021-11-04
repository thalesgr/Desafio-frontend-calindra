export const searchData = async (name) => {
    const response = await fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${name}&source=nanook`);
    const products = await response.json();
    return products.products;
}