import { User } from "./user";
export class ProductService {
  private users: User[] = [
    {
      id: 1,
      name: "Malak Ibarhim",
      connections: 500,
      imgUrl: "aaaa",
      exp: [
        {
          id: 1,
          title: "Student",
          location: "Al Asmaili'yah ,Egypt",
          company: { id: 1, name: "ITI Information Techonology (ITI)" },
          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "pala pla pla"
        }
      ],
      community: [
        {
          id: 1,
          post: { id: 1, post: "HI I'M Using LinkedIn :d" },
          comment: [{ id: 1, comments: "Welcome broo" }]
        }
      ]
    },
    {
      id: 2,
      name: "Mariam Magdy",
      connections: 600,
      imgUrl: "aaaa",
      exp: [
        {
          id: 1,
          title: "Student",
          location: "Al Asmaili'yah ,Egypt",
          company: { id: 1, name: "ITI Information Techonology (ITI)" },
          startDate: "Oct 2019",
          endDate: "sept 2020",
          description: "pala pla pla"
        }
      ],
      community: [
        {
          id: 1,
          post: { id: 1, post: "I'm searching for a jop :d" },
          comment: [{ id: 1, comments: "Gooodqs" }]
        }
      ]
    }
  ];
  //       productAdded = new EventEmitter<product>();

  getAll(): User[] {
    return this.users.slice();
  }

  getById(id: number): User {
    return this.users.find(a => a.id === id);
  }

  //   Update (userr:User){
  //       const index = this.users.findIndex(a => a.id === user.id);
  //       this.users[index] = {  id: userr.id,
  //         name: userr.name,
  //         connections: userr.connections,
  //         imgUrl: userr.imgUrl,
  //         exp: [
  //           {
  //             id: userr.exp[index].id,
  //             title: "Student",
  //             location: "Al Asmaili'yah ,Egypt",
  //             company: { id: 1, name: "ITI Information Techonology (ITI)" },
  //             startDate: "Oct 2019",
  //             endDate: "sept 2020",
  //             description: "pala pla pla"
  //           }
  //         ],
  //         community: [
  //           {
  //             id: 1,
  //             post: { id: 1, post: "HI I'M Using LinkedIn :d" },
  //             comment: [{ id: 1, comments: "Welcome broo" }]
  //           }
  //         ]};
  //   }

  //   add (product:product){
  //       const productItem = {id:product.id, data:product.data, price: product.price,
  //           discound:product.discound , imgUrl:product.imgUrl,payments:product.payments,tag:product.tag,category:product.category};
  //       this.products.push(productItem);
  //   }

  //   delete (id: number){
  //       const index = this.products.findIndex(a => a.id === id);
  //       this.products.splice(index, 1);
  //   }
}
