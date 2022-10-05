describe('eMag.ro', () => {

  it('should have the correct title', async () => {

    await browser.url('http://www.emag.ro');
    await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
  });

  it('should contains a cart button', async () => {
    const cartButton = await $('#my_cart');

    await expect(cartButton).toBeDisplayed();
  });

  it('should open eMag Genius page', async () => {
    const geniusButton = await $('[title="Genius"]');

    await geniusButton.click();
    await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

  });

  it('should have a working search', async () => {
    const searchBox = await $('#searchboxTrigger');
    const searchButton = await $('.em-search');

    await searchBox.setValue('laptop');
    await searchButton.click();
    await expect(browser).toHaveTitle('Cautare Laptop - Cumpara Acum - eMAG.ro');

  });

  it('should have a filter button called home', async () => {
    const homeButton = await $('//*[@id="main-container"]/section[1]/div/div[3]/div[2]/div[1]/div[2]/div/div/div/div/div/div[1]/button');
    const addProduct = await $('//*[@id="card_grid"]/div[1]/div/div/div[3]/a/img');
    const products = await $('//*[@id="auxiliary"]/div/div/ul[1]/li/div');
    const laptopTablestPhones = await $('/html/body/div[4]/div[1]/div/div[1]/ul/li[2]/a/span');

    await homeButton.click();
    await expect(browser).toHaveTitle('Cauți laptop? Alege din oferta eMAG.ro');
    await addProduct.click();
    await products.click();
    await laptopTablestPhones.click();


  });



});