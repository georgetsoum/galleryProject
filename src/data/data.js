/*
  This file contains an example of how demo data can be structured.
  This file is not necessary if data is fetched through an API.
*/

/* TODO fill up more data */
export const data = {
  exhibitions: [
    {
      id: 1,
      title: "First Exhibition",
      description: "This is the first exhibition",
      image: 'van.jpg',
      exhibits: [
        {
          id: 1,
          title: "First Exhibit",
          description: "This is the first exhibit",
          image: 'image1.jpeg',
        },
        {
          id: 2,
          title: "Second Exhibit",
          description: "This is the second exhibit",
          image: 'image_2.png',
        },
        {
          id: 3,
          title: "Van Gogh's Painting",
          description: "This is the third exhibit",
          image: 'van.jpg',
        }
      ]
    },
    {
      id: 2,
      title: "Second Exhibition",
      description: "This is the second exhibition",
      image: 'star.jpg',
      exhibits: [
        {
          id: 4,
          title: "Fourth Exhibit",
          description: "This is the fourth exhibit",
          image: 'image3.jpg',
        },
        {
          id: 5,
          title: "Fifth Exhibit",
          description: "This is the fifth exhibit",
          image: 'van2.jpg',
        },
      ]
    }
  ]
}