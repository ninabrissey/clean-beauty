describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to visit the page', () => {
    cy.url().should('include', 'localhost:3000');
  });

  it('should be able to view elements displayed on the page', () => {
    cy.get('nav.nav')
      .find('img.nav-logo')
      .get('nav.nav')
      .find('a.nav-link > li')
      .eq(0)
      .contains('blush')
      .get('section.statement-img-container')
      .find('img.statement-img')
      .get('div.tag-links')
      .find('img')
      .should('have.attr', 'alt');
  });

  it('should be able to click a makeup link and visit new page with items displayed', () => {
    cy.intercept(
      'GET',
      'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush',
      [
        {
          id: 1035,
          brand: 'rejuva minerals',
          name: 'Multi Purpose Powder - Blush & Eye',
          price: '0.0',
          price_sign: '$',
          currency: 'USD',
          image_link:
            'https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg',
          product_link:
            'https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/',
          website_link: 'https://purpicks.com/',
          description:
            "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED&#x2122; and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
          rating: null,
          category: 'powder',
          product_type: 'blush',
          tag_list: ['purpicks', 'EWG Verified', 'Hypoallergenic', 'No Talc'],
          created_at: '2018-06-30T19:19:31.909Z',
          updated_at: '2018-09-02T22:52:06.855Z',
          product_api_url:
            'http://makeup-api.herokuapp.com/api/v1/products/1035.json',
          api_featured_image:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383',
          product_colors: [
            {
              hex_value: '#E1BFC0',
              colour_name: 'Pink Parfait',
            },
            {
              hex_value: '#D7A7A3',
              colour_name: 'Papaya',
            },
            {
              hex_value: '#E6C3CB',
              colour_name: 'Acai Berry',
            },
          ],
        },
        {
          id: 1026,
          brand: 'marienatie',
          name: 'Mineral Blush',
          price: '0.0',
          price_sign: '$',
          currency: 'USD',
          image_link:
            'https://www.purpicks.com/wp-content/uploads/csm/Blush_copy_1024x1024_edd99d6d-301e-4ba1-aa74-a33d21147b7c1.jpg',
          product_link:
            'https://www.purpicks.com/product/marie-natie-mineral-blush/',
          website_link: 'https://purpicks.com/',
          description:
            'Formulated to reduce the appearance of pores while creating a long-lasting natural finish.  This MarieNatie brush protects skin with SPF15.  Sericite mica is great for absorbing oil and won’t clog up pores.  Mica is a natural mineral that helps to enhance the skin tone.',
          rating: null,
          category: 'powder',
          product_type: 'blush',
          tag_list: ['purpicks', 'CertClean'],
          created_at: '2018-06-30T19:19:31.234Z',
          updated_at: '2018-09-02T22:52:06.590Z',
          product_api_url:
            'http://makeup-api.herokuapp.com/api/v1/products/1026.json',
          api_featured_image:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/026/original/open-uri20180630-4-18e9ua7?1530390377',
          product_colors: [
            {
              hex_value: '#C97D66',
              colour_name: 'Blushing Apple',
            },
            {
              hex_value: '#DF9A84',
              colour_name: 'Desert Rose',
            },
          ],
        },
        {
          id: 1017,
          brand: 'lotus cosmetics usa',
          name: 'Creme to Powder Blush',
          price: '0.0',
          price_sign: '$',
          currency: 'USD',
          image_link:
            'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png',
          product_link:
            'https://www.purpicks.com/product/lotus-cosmetics-usa-creme-powder-blush/',
          website_link: 'https://purpicks.com/',
          description:
            'A cream to powder blush made with all natural ingredients that applies like a soft cream but finishes like a silky powder. Antioxidant-rich botanicals help moisturize the skin, while natural pigments provide long-lasting buildable color for a healthy, radiant glow. Made with natural and organic ingredients.',
          rating: null,
          category: 'cream',
          product_type: 'blush',
          tag_list: ['purpicks', 'USDA Organic', 'Organic'],
          created_at: '2018-06-30T19:19:30.678Z',
          updated_at: '2018-09-02T22:52:06.437Z',
          product_api_url:
            'http://makeup-api.herokuapp.com/api/v1/products/1017.json',
          api_featured_image:
            '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
          product_colors: [
            {
              hex_value: '#C7766F',
              colour_name: 'Plum',
            },
            {
              hex_value: '#DF925C',
              colour_name: 'Apricot',
            },
            {
              hex_value: '#E89B7C',
              colour_name: 'Rose',
            },
          ],
        },
      ]
    );
    cy.visit('http://localhost:3000')
      .get('nav.nav')
      .get('a.nav-link > li')
      .eq(0)
      .click()
      .url()
      .should('include', 'categories/blush')
      .get('article#1035')
      .get('h3')
      .contains('Multi Purpose Powder - Blush & Eye');
  });

  it('should be able to click the image link at the bottom of the page and navigate to a new page ', () => {
    cy.get('div.tag-links').get('a.tag-link-organic').click();
  });
});
