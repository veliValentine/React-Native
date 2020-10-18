import AsyncStorage from '@react-native-community/async-storage';

class ShoppingCartStorage {
  constructor(namespace = 'shoppingCart') {
    this.namespace = namespace;
  }

  async getProducts() {
    const rawProducts = await AsyncStorage.getItem(
      `${this.namespace}:products`,
    );

    return rawProducts ? JSON.parse(rawProducts) : [];
  }

  async addProduct(productId) {
    const currentProducts = await this.getProducts();
    const newProducts = [...currentProducts, productId];

    await AsyncStorage.setItem(
      `${this.namespace}:products`,
      JSON.stringify(newProducts),
    );
  }

  async clearProducts() {
    await AsyncStorage.removeItem(`${this.namespace}:products`);
  }
}
const doShopping = async () => {
  const cartA = new ShoppingCartStorage('shoppingCartA');
  const cartB = new ShoppingCartStorage('shoppingCartB');

  await cartA.addProduct('chips');
  await cartA.addProduct('soda');

  await cartB.addProduct('milk');

  const productsA = await cartA.getProducts();
  const productsB = await cartB.getProducts();

  console.log(productsA, productsB);

  await cartA.clearProducts();
  await cartB.clearProducts();
};

doShopping();
