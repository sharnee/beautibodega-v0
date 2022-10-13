sequelize model:generate --name users --attributes username:string,password:string,email:string,favorite_products:integer,favorite_brands:integer,name:string,followers:string,following:string,tags:string,role:string,full_name:string,created_at:string,gender:string,reviews:integer

sequelize model:generate --name brands --attributes brand_name:string,admin_user:integer,description:string,logo:string,products:integer,collections:string,featured_products:integer,popular_brand:boolean,reviews:integer,video_link:string,verified:boolean,founder:integer

sequelize model:generate --name products --attributes sku:integer,collection:string,price:integer,sales_price:integer,subtext:string,description:string,quantity:integer,image:string,thumbnail:string,instructions:string,ingredients:string,concern_list:string,product_type:string,reviews:integer,sold:integer

sequelize model:generate --name roles --attributes role_name:string

sequelize model:generate --name reviews --attributes nickname:string,title:string,reviews:string,images:string

sequelize model:generate --name images --attributes image:string