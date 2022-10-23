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
     await queryInterface.bulkInsert('images', [
      {
        id:'0d83649e-ae79-4aa1-ac69-310013138705',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F0d83649e-ae79-4aa1-ac69-310013138705?alt=media&token=45575e19-644a-4c6d-8ab6-74d3e719fc94',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1d56295e-c997-4e34-bf76-7cb1126dfacc',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1d56295e-c997-4e34-bf76-7cb1126dfacc?alt=media&token=080bc3b3-3fa0-44c1-b82a-e2997e2fe603',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'496998c6-3957-43e5-883d-d1b1bd8c89c4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F496998c6-3957-43e5-883d-d1b1bd8c89c4?alt=media&token=c303cc6f-d80f-4c4d-b246-6f9e17dd05a7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'9d8db994-e48f-44fd-aa51-80e91032c0b2',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F9d8db994-e48f-44fd-aa51-80e91032c0b2?alt=media&token=b4dc68a9-fb52-41f4-8822-359d8a1a057d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'7c9aa985-4c9b-475f-9209-eff99c76bc65',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F7c9aa985-4c9b-475f-9209-eff99c76bc65?alt=media&token=682589fd-88ab-4adb-b182-10d920580040',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'93584a47-ba52-4d1e-ae1b-afd4eb0425ae',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F93584a47-ba52-4d1e-ae1b-afd4eb0425ae?alt=media&token=d45d7795-d643-4c78-9616-db4ad202df2e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'7c961e61-99d4-4dfa-8a98-504d7ac2bea4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F7c961e61-99d4-4dfa-8a98-504d7ac2bea4?alt=media&token=bf7d31bb-87da-4031-b92a-819497dd7b7f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'e1e59465-d939-4eb7-8e2d-4a30a65551e0',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fe1e59465-d939-4eb7-8e2d-4a30a65551e0?alt=media&token=3eed827c-5473-4421-a9d3-c6898663c2ad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'84b405a5-7476-4f79-bc49-64cc09d0a2df',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F84b405a5-7476-4f79-bc49-64cc09d0a2df?alt=media&token=46e86f83-442e-4954-80ce-5cd8a642117d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'9be5c5d5-b934-46f0-961e-53611ac8bc40',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F9be5c5d5-b934-46f0-961e-53611ac8bc40?alt=media&token=a7dff580-68c3-42a6-b117-f78e5d56606a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1075642e-e959-46e4-baf1-757eaa0531ca',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1075642e-e959-46e4-baf1-757eaa0531ca?alt=media&token=34df7067-014b-4b79-baa6-32782a011c05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'cc1b2d95-b3c5-4dbe-ae68-560963983385',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fcc1b2d95-b3c5-4dbe-ae68-560963983385?alt=media&token=5361541b-9395-402e-94d7-fed627da886a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'3dac6d2b-70f7-413e-83d7-7ada611d7e6f',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F3dac6d2b-70f7-413e-83d7-7ada611d7e6f?alt=media&token=765a4d2b-2cf1-4511-bfca-18b6d713bbab',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1aae9ec9-b406-466e-ab6d-7d0f2b3124a2',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1aae9ec9-b406-466e-ab6d-7d0f2b3124a2?alt=media&token=bf4ae496-f28f-45ae-b5c7-41e08696909c',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'fbc0c9cb-74be-47ec-840b-83063ed71e2b',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Ffbc0c9cb-74be-47ec-840b-83063ed71e2b?alt=media&token=dbab3f39-1f00-4ab4-b482-6a779b84ba69',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'52dda05a-5343-46c1-b803-6e5cc91dac54',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F52dda05a-5343-46c1-b803-6e5cc91dac54?alt=media&token=117dd1af-1136-47d6-a9ad-72d763ab9004',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'ffdf74a1-0208-4f5c-8964-94fc920a7ee4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fffdf74a1-0208-4f5c-8964-94fc920a7ee4?alt=media&token=4216044b-fae9-4dc1-b060-0b7f1f47bc12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'4abd6d13-8e0b-43e6-a5ab-422d3f5907ce',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F4abd6d13-8e0b-43e6-a5ab-422d3f5907ce?alt=media&token=3829a09c-fa62-4bdf-a1fa-be2b0f2b6cc1',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'176d08c1-1192-4173-bff7-6409fe3749a3',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F176d08c1-1192-4173-bff7-6409fe3749a3?alt=media&token=b7af4e4f-b327-4659-9a63-87366adf60ad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'a77d69ea-9bb3-44ec-93f4-4c90c3d54006',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fa77d69ea-9bb3-44ec-93f4-4c90c3d54006?alt=media&token=8d9e9993-fe02-4a5d-a822-a7a0370360bf',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'44bb2bc8-a486-437e-b2e2-62b93ff84120',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F44bb2bc8-a486-437e-b2e2-62b93ff84120?alt=media&token=5f147026-22a8-495b-882f-2be76f00ba90',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'1d2d363c-4537-45b4-bbac-6f5bb2b2b89d',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1d2d363c-4537-45b4-bbac-6f5bb2b2b89d?alt=media&token=56e3a694-2cfc-4a78-a568-239ef411339f',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'28598683-33dd-466f-8218-a2e42bd2806f',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F28598683-33dd-466f-8218-a2e42bd2806f?alt=media&token=cef6206c-964b-464a-859c-45d947709955',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'c4489b1c-355a-414c-a9bc-37baec9b481f',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fc4489b1c-355a-414c-a9bc-37baec9b481f?alt=media&token=f8633c4d-5b32-46a8-8752-7dfe77117ea1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'74ef9b59-5aad-428b-bbb2-1e1e3dd8d827',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F74ef9b59-5aad-428b-bbb2-1e1e3dd8d827?alt=media&token=cfa71cdb-1fbb-4a86-95e6-01fedeb42d87',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'3d283641-e1ea-460a-bc28-dcc7d540edea',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F3d283641-e1ea-460a-bc28-dcc7d540edea?alt=media&token=6c8e4305-d4fd-497c-930b-ff6fc336f5a2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'cfe0b7cb-28bd-428a-8496-e95552d570d4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fcfe0b7cb-28bd-428a-8496-e95552d570d4?alt=media&token=0b11a0ee-cc5c-4d59-a872-037fae5ea573',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'e2634aac-9ac1-43cc-8aa1-e78d5b85e4ce',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fe2634aac-9ac1-43cc-8aa1-e78d5b85e4ce?alt=media&token=93c6b5d8-487d-455e-8a26-22833244818d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'9fb33244-1e7e-43e9-8d2b-e0f6efac9772',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F9fb33244-1e7e-43e9-8d2b-e0f6efac9772?alt=media&token=bd4be0b0-7063-4006-91c3-a225b4e92d22',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'5eba7e80-362c-4250-a0f2-536b4a78d4b4',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F5eba7e80-362c-4250-a0f2-536b4a78d4b4?alt=media&token=bfc8a71c-920f-41c6-bc66-541f313bf291',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'800da52f-3379-4691-b29b-61a8688d65ee',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F67bffb07-a8f3-404a-af27-3fbaf3a0cdc2?alt=media&token=6201b29f-645a-4a22-ae06-60f3920f00b9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'9f0fe341-01fb-4777-b0a6-084503c1f71e',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F9f0fe341-01fb-4777-b0a6-084503c1f71e?alt=media&token=d094e3d4-4b81-4b41-a101-bed3a94cba11',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id:'67bffb07-a8f3-404a-af27-3fbaf3a0cdc2',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F67bffb07-a8f3-404a-af27-3fbaf3a0cdc2?alt=media&token=6201b29f-645a-4a22-ae06-60f3920f00b9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'51e8fc0b-2cb2-4cdd-96e7-78fef5a6f59d',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F51e8fc0b-2cb2-4cdd-96e7-78fef5a6f59d?alt=media&token=47496627-c3a8-486a-850e-4a78156a6f84',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'baaafcfa-18c7-4430-92eb-2be01b9c612c',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fbaaafcfa-18c7-4430-92eb-2be01b9c612c?alt=media&token=1adb577d-4afc-40a9-b0ae-a8864afec77f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'31641a3c-8eb1-4a46-b863-adad35f3f786',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F31641a3c-8eb1-4a46-b863-adad35f3f786?alt=media&token=84d99b97-911c-4339-911d-5849d7ebd437',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1f87b868-efd5-47bb-b156-dfee5416f04b',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1f87b868-efd5-47bb-b156-dfee5416f04b?alt=media&token=8ef35fdf-451b-48d8-b8bb-ab84308f7319',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'d8278904-c130-43b0-82b1-ff04a617ad99',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fd8278904-c130-43b0-82b1-ff04a617ad99?alt=media&token=c7564509-d31a-4b4d-b4cd-d2e759162878',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'ea9276ba-3a48-4515-b443-47cca4ef3477',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fea9276ba-3a48-4515-b443-47cca4ef3477?alt=media&token=43299fdd-b59e-41fa-b5c1-d45c48557f44',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'31e79fe9-66b5-4e01-84ef-e38757b11883',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F31e79fe9-66b5-4e01-84ef-e38757b11883?alt=media&token=5bcf62a0-b07d-450c-b696-8ee438625622',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'4386e5dc-3c5b-464a-9e84-cfc88f2beaeb',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F4386e5dc-3c5b-464a-9e84-cfc88f2beaeb?alt=media&token=f57a3eab-d0f9-4ff8-986d-5f814b205282',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'01413176-d2be-4a64-bbe4-12b95ce4bbde',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F01413176-d2be-4a64-bbe4-12b95ce4bbde?alt=media&token=0ccdf21a-d2ee-473b-a969-3fa75f1c419b',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'1cb3d239-93c4-427a-8bbe-9c7b2b4f435c',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F1cb3d239-93c4-427a-8bbe-9c7b2b4f435c?alt=media&token=22d9dffa-3e34-430d-bcaf-7681b8cebf92',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'3db79703-b1df-4024-b4d5-5f0e2e44384b',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F3db79703-b1df-4024-b4d5-5f0e2e44384b?alt=media&token=4418b864-31de-4964-aa7c-5aee92a81c2e',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'b9c7ddb5-4a6e-44f9-af4b-b55c3666c7da',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fb9c7ddb5-4a6e-44f9-af4b-b55c3666c7da?alt=media&token=2d177d06-8179-4dd7-b701-8ede1e83f06d',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'ec72678c-dc9c-4e20-bd24-4b1e3fc7120d',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2Fec72678c-dc9c-4e20-bd24-4b1e3fc7120d?alt=media&token=9f5e0901-e967-42f0-8f0a-6a8a94a11ce2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:'27bbd80e-b589-481d-882d-fd88ef6e1ffa',
        image: 'https://firebasestorage.googleapis.com/v0/b/beauty-bodega.appspot.com/o/images%2F27bbd80e-b589-481d-882d-fd88ef6e1ffa?alt=media&token=a72fe524-87cd-4d31-a2e5-61c1d777591e',
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
