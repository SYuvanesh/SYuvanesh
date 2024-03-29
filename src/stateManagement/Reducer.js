const initialState = {
    increment: 0,
    user:[],
    currentUser:'',
    selIndex:'',
    productList:[
      {
          "id": "1",
          "productName": "Blue Jacket",
          "productImage": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG",
          "category": "clothe",
          "status": "In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG",
                  "price": "30",
                  "stock": "10"
              }
          ]
  
      },
      {
          "id": "2",
          "productName":"Blue Sneaker",
          "category":"shoes",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBPrJxVGq8BksyP6u1j67mO1LxMzjUwxQFw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBPrJxVGq8BksyP6u1j67mO1LxMzjUwxQFw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBPrJxVGq8BksyP6u1j67mO1LxMzjUwxQFw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id": "3",
          "productName":"Gray Hoodies",
          "category":"clothe",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUfA2o1Y0fQWyw8tyHnfPwZf3PzLyEicNBA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUfA2o1Y0fQWyw8tyHnfPwZf3PzLyEicNBA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUfA2o1Y0fQWyw8tyHnfPwZf3PzLyEicNBA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id":"4",
          "productName":"Analog strip Watch",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrAKoRWG1HJLoGn8TzoAkvIP_HkCJTAs_TA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrAKoRWG1HJLoGn8TzoAkvIP_HkCJTAs_TA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrAKoRWG1HJLoGn8TzoAkvIP_HkCJTAs_TA&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id":"5",
          "productName":"Women Shirt",
          "category":"clothe",
          "status":"Limited stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://img.faballey.com/images/Product/TOP04947Z/1.jpg",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://img.faballey.com/images/Product/TOP04947Z/1.jpg",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://img.faballey.com/images/Product/TOP04947Z/1.jpg",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id":"6",
          "productName":"fan",
          "category":"device",
          "status":"out of stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcGgPyiWVBPw1RaD7TptDPJVcMq15eBNnYg&usqp=CAU",
                  "price": "30",
                  "stock": "0"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcGgPyiWVBPw1RaD7TptDPJVcMq15eBNnYg&usqp=CAU",
                  "price": "30",
                  "stock": "0"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcGgPyiWVBPw1RaD7TptDPJVcMq15eBNnYg&usqp=CAU",
                  "price": "30",
                  "stock": "0"
              }
          ]
      },
      {
          "id":"7",
          "productName":"Denim Jeans",
          "category":"clothe",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5MlQAG8njzCbgTRnHpzCchiRibUDnoNbw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5MlQAG8njzCbgTRnHpzCchiRibUDnoNbw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5MlQAG8njzCbgTRnHpzCchiRibUDnoNbw&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id":"8",
          "productName":"Headphone",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0qzZFMH6aO52mvAUkv0Fl7ikrQGUYx8S7w&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0qzZFMH6aO52mvAUkv0Fl7ikrQGUYx8S7w&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0qzZFMH6aO52mvAUkv0Fl7ikrQGUYx8S7w&usqp=CAU",
                  "price": "30",
                  "stock": "10"
              }
          ]
      },
      {
          "id":"9",
          "productName":"laptop",
          "category":"device",
          "status":"Limited stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2n5BgGptM3vYVRoTuY-6NE1Bvx_YEyX7hdg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2n5BgGptM3vYVRoTuY-6NE1Bvx_YEyX7hdg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2n5BgGptM3vYVRoTuY-6NE1Bvx_YEyX7hdg&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"10",
          "productName":"Raybon Google",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQewaKjSKvBOYvy8e3BcK1E1o0sZAaHeX8Gw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQewaKjSKvBOYvy8e3BcK1E1o0sZAaHeX8Gw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQewaKjSKvBOYvy8e3BcK1E1o0sZAaHeX8Gw&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"11",
          "productName":"iphone 14",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd3yse2dmLNzT1WXm3peJQY-Bgx88oyWJYw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd3yse2dmLNzT1WXm3peJQY-Bgx88oyWJYw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd3yse2dmLNzT1WXm3peJQY-Bgx88oyWJYw&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"12",
          "productName":"Refrigerator",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZZni4MlsPOQYoWogI6L1uc7G6rp1ldxm-g&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZZni4MlsPOQYoWogI6L1uc7G6rp1ldxm-g&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZZni4MlsPOQYoWogI6L1uc7G6rp1ldxm-g&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"13",
          "productName":"Cammera",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQu5YWxH-lS-qoXN5DAHWk11yLrvMtcSEw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQu5YWxH-lS-qoXN5DAHWk11yLrvMtcSEw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQu5YWxH-lS-qoXN5DAHWk11yLrvMtcSEw&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"14",
          "productName":"Cycle",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOE8CF8ZK0rN-yAfBtwjBKrpYsQcHVtpO_g&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOE8CF8ZK0rN-yAfBtwjBKrpYsQcHVtpO_g&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOE8CF8ZK0rN-yAfBtwjBKrpYsQcHVtpO_g&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"15",
          "productName":"Mens Track Pants",
          "category":"clothe",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOwNou5C7xK-QTgFU571nfxaIN-fZUufFRJo3xVC2HgldN2_ddJ3pD11y_IHMAsrQ--M&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOwNou5C7xK-QTgFU571nfxaIN-fZUufFRJo3xVC2HgldN2_ddJ3pD11y_IHMAsrQ--M&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOwNou5C7xK-QTgFU571nfxaIN-fZUufFRJo3xVC2HgldN2_ddJ3pD11y_IHMAsrQ--M&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"16",
          "productName":"Cricket Bat",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf8hy_B_09PewaRMGWXG5ET8W8ijCveJE2FF93X0xst9YzvVm_hxH-92UJL0YBJZL2TI&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf8hy_B_09PewaRMGWXG5ET8W8ijCveJE2FF93X0xst9YzvVm_hxH-92UJL0YBJZL2TI&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf8hy_B_09PewaRMGWXG5ET8W8ijCveJE2FF93X0xst9YzvVm_hxH-92UJL0YBJZL2TI&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"17",
          "productName":"Ear Buds",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1kwoFQQCESpUyn0FytqnKWCzYAU1xom88VXh61n0DPK3kPqzKTZQXNf5ljd8N-0NMe8&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1kwoFQQCESpUyn0FytqnKWCzYAU1xom88VXh61n0DPK3kPqzKTZQXNf5ljd8N-0NMe8&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1kwoFQQCESpUyn0FytqnKWCzYAU1xom88VXh61n0DPK3kPqzKTZQXNf5ljd8N-0NMe8&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"18",
          "productName":"sports shoes",
          "category":"shoes",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJE5Wor7ilo6-aFCGmmtdXm0pB0cSFXXWLg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJE5Wor7ilo6-aFCGmmtdXm0pB0cSFXXWLg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJE5Wor7ilo6-aFCGmmtdXm0pB0cSFXXWLg&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"19",
          "productName":"Balzer",
          "category":"clothe",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaeWjDQZtXazlO8NCJtyBCfqOe4IwFjeAZw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaeWjDQZtXazlO8NCJtyBCfqOe4IwFjeAZw&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaeWjDQZtXazlO8NCJtyBCfqOe4IwFjeAZw&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"20",
          "productName":"Computer",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRR44VG9m9Y8mxwkOdDqNOZWce6hLQtW-TQ&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRR44VG9m9Y8mxwkOdDqNOZWce6hLQtW-TQ&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRR44VG9m9Y8mxwkOdDqNOZWce6hLQtW-TQ&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"21",
          "productName":"Leather bag",
          "category":"bags",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGEB9AuLN3K2SG6n6Y2kijYJ2Hz2bldwcJg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGEB9AuLN3K2SG6n6Y2kijYJ2Hz2bldwcJg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGEB9AuLN3K2SG6n6Y2kijYJ2Hz2bldwcJg&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"22",
          "productName":"Mens shots",
          "category":"clothe",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lGbgf3_sWfUBZCjITSGAfCzdcPzEeKbKqg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lGbgf3_sWfUBZCjITSGAfCzdcPzEeKbKqg&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lGbgf3_sWfUBZCjITSGAfCzdcPzEeKbKqg&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"23",
          "productName":"samsung AC",
          "category":"device",
          "status":"out of stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteLnvish69U_avVaG8ak8Pb4DoxXdfbX278sEsik-Eu553BX_po42ULDRTtj5iTuvSlk&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteLnvish69U_avVaG8ak8Pb4DoxXdfbX278sEsik-Eu553BX_po42ULDRTtj5iTuvSlk&usqp=CAU",
                  "price": "30",
                  "stock": "50"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteLnvish69U_avVaG8ak8Pb4DoxXdfbX278sEsik-Eu553BX_po42ULDRTtj5iTuvSlk&usqp=CAU",
                  "price": "30",
                  "stock": "51"
              }
          ]
      },
      {
          "id":"24",
          "productName":"Men bags",
          "category":"bags",
          "status": "Limited stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSov1ziLAkvVEOMWpsoxvodAFoieAsrDNZPGw&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSov1ziLAkvVEOMWpsoxvodAFoieAsrDNZPGw&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSov1ziLAkvVEOMWpsoxvodAFoieAsrDNZPGw&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"25",
          "productName":"women sports shoes",
          "category":"shoes",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAopJuCDYZM-Djo3zTi1p68ZrXHSgqCC8XQ&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAopJuCDYZM-Djo3zTi1p68ZrXHSgqCC8XQ&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAopJuCDYZM-Djo3zTi1p68ZrXHSgqCC8XQ&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"26",
          "productName":"Water Heater",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPG2xShjUnLH59LjjykylM0rvUY2qBfKzEWQ&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPG2xShjUnLH59LjjykylM0rvUY2qBfKzEWQ&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPG2xShjUnLH59LjjykylM0rvUY2qBfKzEWQ&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"27",
          "productName":"Office shoes",
          "category":"shoes",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL6E-aOQqM8YZZruF9e068VU9ZY9Z-yXdbA&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL6E-aOQqM8YZZruF9e068VU9ZY9Z-yXdbA&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnL6E-aOQqM8YZZruF9e068VU9ZY9Z-yXdbA&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"28",
          "productName":"One plus 7",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowKMcXiXgfkndm3REnRkJ-NQbfZZ-ohzJg&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowKMcXiXgfkndm3REnRkJ-NQbfZZ-ohzJg&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowKMcXiXgfkndm3REnRkJ-NQbfZZ-ohzJg&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"29",
          "productName":"Samsung Tab",
          "category":"device",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrwvfWMVmss0mglRIV39LVu3VbpSRs9vN-w&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrwvfWMVmss0mglRIV39LVu3VbpSRs9vN-w&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrwvfWMVmss0mglRIV39LVu3VbpSRs9vN-w&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"30",
          "productName":"ladies watch",
          "category":"watches",
          "status":"In stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kel2BClmugAZXaiEhsdQDy0Tvxv3qfJPPg&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kel2BClmugAZXaiEhsdQDy0Tvxv3qfJPPg&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kel2BClmugAZXaiEhsdQDy0Tvxv3qfJPPg&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      },
      {
          "id":"31",
          "productName":"saree",
          "category":"clothe",
          "status":"Limited stock",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
          "variation": [
              {
                  "variant": "black",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQDrxzAIOJUQorkS_zn__QA50Zi6jlKc1HQ&usqp=CAU",
                  "price": "30",
                  "stock": "5"
              },
              {
                  "variant": "white",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQDrxzAIOJUQorkS_zn__QA50Zi6jlKc1HQ&usqp=CAU",
                  "price": "30",
                  "stock": "2"
              },
              {
                  "variant": "green",
                  "productImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQDrxzAIOJUQorkS_zn__QA50Zi6jlKc1HQ&usqp=CAU",
                  "price": "30",
                  "stock": "1"
              }
          ]
      }
  ]
  };

  const reduxReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        
      case "Increament":
        return {
          ...state,
          increment: action.payload,
        };
      case "User_ID":
        return {
          ...state,
          user: action.payload,
        };
        case "Curr_User":
        return {
          ...state,
          currentUser: action.payload,
        };
        case "Prod_List":
          return{
            ...state,
            productList:action.payload
          }
          case 'Sel_Index':
            return{
              ...state,
              selIndex:action.payload
            }
        
        default:
        return state;
    }
  };
  
  export default reduxReducer;