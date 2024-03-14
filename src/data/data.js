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
          title: "Queen Canvas",
          description: "A mesmerizing oil painting capturing the delicate hues of dawn's first light as it filters through a dense forest. Soft brushstrokes depict the tranquil scene, with hints of golden sunlight dancing upon the foliage and misty tendrils embracing ancient trees.",
          image: 'image1.jpeg',
        },
        {
          id: 2,
          title: "La Liberté",
          description: "This hauntingly beautiful watercolor evokes a sense of ethereal melancholy. Layers of translucent blues and purples swirl together to form a mysterious landscape shrouded in mist. In the distance, ghostly figures wander through a dreamlike realm, their presence adding to the painting's enigmatic atmosphere.",
          image: 'image_2.png',
        },
        {
          id: 3,
          title: "Van Gogh's Painting",
          description: "A vibrant acrylic painting pulsating with the energy of a bustling cityscape. Bold strokes of color depict towering skyscrapers against a backdrop of swirling clouds and neon-lit streets. Amidst the urban chaos, a lone musician plays a soulful melody, his music echoing through the vibrant night.",
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
          description:  "A vibrant acrylic painting pulsating with the energy of a bustling cityscape. Bold strokes of color depict towering skyscrapers against a backdrop of swirling clouds and neon-lit streets. Amidst the urban chaos, a lone musician plays a soulful melody, his music echoing through the vibrant night.",
          image: 'image3.jpg',
        },
        {
          id: 5,
          title: "Fifth Exhibit",
          description: "A mesmerizing oil painting capturing the delicate hues of dawn's first light as it filters through a dense forest. Soft brushstrokes depict the tranquil scene, with hints of golden sunlight dancing upon the foliage and misty tendrils embracing ancient trees.",
          image: 'van2.jpg',
        },
      ]
    }
  ]
}