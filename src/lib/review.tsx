export type Data = {
  name: string
  date: string
  review: string
  rating: number
  link?: string
  image: string
}

export type ReviewData = {
  snacks: Data[]
  media: Data[]
  movies: Data[]
}

export const reviewed: ReviewData = {
  snacks: [
    {
      name: 'QUAKER - Chocolate Rice Crips',
      date: '2024/03/30',
      review: 'the more you eat, the sweeter it gets.',
      rating: 3.5,
      image: 'quaker-choco-rice-crisps.png',
    },
  ],
  media: [
    {
      name: 'Node.js: The Documentary | An origin story',
      date: '2024/03/23',
      review: "I didn't know there were so many dramas behind node.js.",
      link: 'https://youtu.be/LB8KwiiUGy0?si=4Fe4CRKDmB_VJqEm',
      rating: 5,
      image: 'honeypot.jpeg',
    },
  ],
  movies: [
    {
      name: '「M3GAN」 directed by Gerald Johnstone',
      date: '2024/04/01',
      review:
        'a glimpse into potential dystopian future resulting from technological singularity.',
      rating: 4,
      image: 'm3gan.jpeg',
    },
    {
      name: "「Five Nights at Freddy's」 directed by Emma Tammi",
      date: '2024/03/30',
      review: 'Alphonse Elric brainwashed by the yellow bunny to harm others.',
      rating: 3,
      image: '5nights_at_freddys.jpg',
    },
  ],
}