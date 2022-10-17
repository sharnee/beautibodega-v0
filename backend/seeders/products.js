'use strict';

const { v4:uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('products', [
      {
        id: '41814b55-0985-49b5-8835-77761bce5bc1',
        name: 'Rosemary Mint Strengthening Edge Gel',
        price: 9.99,
        description: `Your edges can be delicate. Shape and smooth them how you like while infusing them with strength and important nutrients with Mielle Organics’ Rosemary Mint Strengthening Edge Gel! With biotin and natural ingredients such as coconut and babassu seed oil, this edge gel offers you the hold you need along with the nourishment your hair has been craving. You’ll love how it feels – and the great rosemary mint scent – and your hair will love you back for using an edge gel with healthy hold in mind.`,
        images: '0d83649e-ae79-4aa1-ac69-310013138705',
        thumbnail: '0d83649e-ae79-4aa1-ac69-310013138705',
        instructions: 'Apply gel to edges and smooth with fingertips or brush for desired hold.',
        ingredients: `Water (Aqua, Eau), Ceteareth-25, Glycerin, PEG-7 Glyceryl Cocoate, PEG-40 Hydrogenated Castor Oil, Propylene Glycol, Ethylhexylglycerin, Olea Europaea (Olive) Fruit Oil, Mentha Piperita (Peppermint) Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Equisetum Arvense (Horsetail Grass) Extract, *Orbignya Oleifera (Babassu) Seed Oil, *Zingiber Officinale (Ginger) Root Oil, *Cocos Nucifera (Coconut) Oil, Honey, Biotin, Lawsonia Inermis (Henna) Extract, Rosmarinus Officinalis (Rosemary) Leaves Extract, Humulus Lupulus (Hops) Extract, Urtica Dioica (Nettle) Extract, Phenoxyethanol, Anthemis Nobilis (Chamomile) Flower Extract, Symphytum Officinale (Comfrey) Leaves Extract, Benzoic Acid, Glycereth-2- Cocoate, Fragrance (Parfum)`,
        product_type: 'hair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5fd6e991-97f4-4716-a074-ffc754f8cb9a',
        name: 'Rosemary Mint scalp and hair oil',
        price: 9.99,
        description: `Our Rosemary Mint scalp and hair oil is a nutrient-rich, intensive formula meant to help you address your hair concerns. From nourishing hair follicles, smoothing split ends and help with dry scalp, this hair oil uses natural, organic ingredients and essential oils to provide the care your hair deserves. Use it on protective styles, including braids and weaves, and enjoy its fresh, invigorating scent during your next hot oil treatment.`,
        images: '1d56295e-c997-4e34-bf76-7cb1126dfacc',
        thumbnail: '1d56295e-c997-4e34-bf76-7cb1126dfacc',
        instructions: `Scalp Treatment
        Section hair into 4 parts exposing scalp. Apply a small amount of oil to scalp, massage oil in with fingers and comb through to ends of hair. Leave in and style as desired.
        
        Daily Use
        Apply a small amount to scalp and comb through to ends.
        
        Split End Care
        Apply oil to ends of hair, place a processing cap on head and leave on for 10 minutes. Rinse and proceed with shampooing.`,

        ingredients: `Rosemary: Encourages hair growth. Its antioxidant, anti-inflammatory and anti-fungal properties are known to improve scalp health and strengthen hair.
        Mint: Invigorates scalp
        Biotin: Nourishes hair follicles, improving strength, elasticity and durability of new hair growth.
        Glycine Soja (Soybean) Oil, Ricinus Communis (Castor) Seed Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Mentha Piperita (Peppermint) Oil, Eucalyptus Globolus (Eucalyptus) Leaf Oil, Menthol, Melalueca Alternifolia (Tea Tree) Leaf Oil, Cocos Nucifera (Coconut) Oil, Equisetum Arvense (Horsetail) Extract, Aloe Barbadensis Extract, Lavandula Angustifolia (Lavender) Oil, Triticum Vulgare (Wheat) Germ Oil, Carthamus Tinctorius (Safflower) Seed Oil, Oenothera Biennis (Evening Primrose) Oil, Vitis Vinifera (Grape) Seed Oil, Benzyl Nicotinate, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Oryza Sativa (Rice) Bran Oil, Tocopheryl Acetate, Biotin, Arctium Lappa (Burdock) Root Extract, Glycerin, Apium Graveolens (Celery) Seed Extract, Retinyl Palmitate, Cholecalciferol (Vitamin D), Ascorbic Acid, Ocimum, Basilicum (Basil) Oil, Pogostemon Cablin (Patchouli) Oil, Salvia Officinalis (Sage) Oil, Silica, Urtica Dioica (Nettle) Extract`,
        product_type: 'hair',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a32815c3-6739-4cfd-a8e2-a39b4cba2e03',
        name: 'Rosemary Mint Strengthening Hair Masque',
        price: 9.99,
        description: `Does your hair deserve a little extra love? Add Mielle's Rosemary Mint Strengthening Hair Masque to your routine! This nutrient-rich formula is made to offer deep moisture and healthy strength. With natural and organic ingredients such as rosemary, sesame seed oil, honey, and coconut oil, this hair masque offers the hydration and nourishment your hair has been craving. Massage into your hair after using our rosemary mint hair strengthening shampoo, let sit for 15 to 20 minutes, and then rinse.`,
        images: '496998c6-3957-43e5-883d-d1b1bd8c89c4',
        thumbnail: '496998c6-3957-43e5-883d-d1b1bd8c89c4',
        instructions: 'After shampooing with Rosemary Mint Strengthening Shampoo, smooth evenly through damp hair from roots to ends. Leave in 15–20 minutes. Rinse thoroughly.',
        ingredients: `Water (Aqua, Eau), Behentrimonium Methosulfate, Cetearyl Alcohol, Aloe Barbadensis Leaf Juice (Decolorized), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Helianthus Annuus (Sunflower) Seed Oil, Olea Europaea (Olive) Fruit Oil, Copernicia Cerifera (Carnauba) Wax, Polysorbate-20, Macadamia Integrifolia Seed Oil, Glyceryl Stearate, Butyrospermum Parkii (Shea) Butter, Tocopheryl Acetate, *Orbignya Oleifera (Babassu) Seed Oil, *Zingiber Officinale (Ginger) Root Oil, *Cocos Nucifera (Coconut) Oil, Panthenol, Phytantriol, Mentha Piperita Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Ricinus Communis (Castor) Seed Oil, Equisetum Arvense (Horsetail Grass) Extract, Lawsonia Inermis (Henna) Extract, Rosmarinus Officinalis (Rosemary) Leaves Extract, Anthemis Nobilis (Chamomile) Flower Extract, Symphytum Officinale (Comfrey Leaves) Extract, Humulus Lupulus (Hops) Extract, Urtica Dioica (Nettle) Extract, Honey, Biotin, Cetrimonium Chloride, Sesamum Indicum (Sesame) Seed Oil, Phenoxyethanol, Benzoic Acid, Ethylhexylglycerin, Glycereth-2 Cocoate`,
        product_type: 'hair',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
