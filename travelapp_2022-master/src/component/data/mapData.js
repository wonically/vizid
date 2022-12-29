const Images = [
  { image: require('../storage/images/post_1.jpg') },
  { image: require('../storage/images/post_2.jpg') },
  { image: require('../storage/images/post_3.jpg') },
  { image: require('../storage/images/post_4.jpg') },
];

export const markers = [
  {
    coordinate: {
      latitude: 41.91612,
      longitude: 12.46595,
    },
    title: "Castel Sant'Angelo",
    description: 'This is the best place',
    image: Images[0].image,
    rating: 4.75,
    reviews: 214,
  },

  {
    coordinate: {
      latitude: 45.4373409,
      longitude: 12.2918135,
    },
    title: 'Venice',
    description: 'This is the best place',
    image: Images[1].image,
    rating: 4.75,
    reviews: 214,
  },
  {
    coordinate: {
      latitude: 18.3962901,
      longitude: -79.7570175,
    },
    title: 'Beach Caribbean',
    description: 'This is the best place',
    image: Images[2].image,
    rating: 4.75,
    reviews: 214,
  },
  {
    coordinate: {
      latitude: 31.2243084,
      longitude: 120.9162742,
    },
    title: 'Shang Hai',
    description: 'This is the best place',
    image: Images[3].image,
    rating: 4.75,
    reviews: 214,
  },
];
