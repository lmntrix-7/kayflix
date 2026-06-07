const KAYFLIX_DATA = {
  site: {
    name: 'KAYFLIX',
    subtitle: '24 Years of Kay',
    birthdayAge: 24
  },

  chapters: [
    {
      number: 'Season 1',
      title: 'Little Kay',
      description: 'The beginning of the story. Tiny Kay, big personality, and the first chapter of 24 beautiful years.',
      image: 'assets/photos/baby kavya.jpeg'
    },
    {
      number: 'Season 2',
      title: 'Family & Home',
      description: 'The people, places, and love that shaped her into who she is today.',
      image: 'assets/photos/kavya w fam.jpeg'
    },
    {
      number: 'Season 3',
      title: 'School Days',
      description: 'Growing up, making memories, learning, laughing, and becoming more herself every year.',
      image: 'assets/photos/kavya at school.jpeg'
    },
    {
      number: 'Season 4',
      title: 'Adventures & Friends',
      description: 'The birthdays, trips, selfies, chaos, and unforgettable moments with the people she loves.',
      image: 'assets/photos/kavya adventures.jpeg'
    },
    {
      number: 'Season 5',
      title: 'London Chapter',
      description: 'The part of her story where I got lucky enough to be included.',
      image: 'assets/photos/kavya london.jpg'
    },
    {
      number: 'Birthday Special',
      title: '24 Years of Kay',
      description: 'A celebration of her life, her heart, her smile, and everything still waiting ahead.',
      image: 'assets/photos/kavya bday 2026.jpeg'
    }
  ],

  // IMPORTANT:
  // - You can put photos AND videos in the media array.
  // - Videos can live in assets/photos too, e.g. assets/photos/birthday-video.mp4
  // - timelineDate controls the horizontal timeline order.
  // - Use YYYY, YYYY-MM, or YYYY-MM-DD. Examples: '2002', '2018-09', '2024-06-14'.
  memories: [
    {
      id: 'little-kay',
      category: 'life',
      title: 'Episode 1 — Little Kay',
      date: 'The Beginning',
      timelineDate: '2002-06-06',
      cover: 'assets/photos/baby kavya.jpeg',
      media: [
        'assets/photos/baby kavya alone/bk0.jpeg',
        'assets/photos/baby kavya alone/bk1.jpeg',
        'assets/photos/baby kavya alone/bk2.jpeg',
        'assets/photos/baby kavya alone/bk3.jpeg',
        'assets/photos/baby kavya alone/bk4.jpeg'
      ],
      story: 'The tiny girl who started it all. Little Kay, full of sweetness, personality, and the spark that everyone who loves her knows so well.'
    },
    {
      id: 'baby-kavya-family',
      category: 'family',
      title: 'Episode 2 — Baby Kavya & Her Family',
      date: 'Loved From The Start',
      timelineDate: '2002-12',
      cover: 'assets/photos/baby kavya w fam/bka3.jpeg',
      media: [
        'assets/photos/baby kavya w fam/bka0.jpeg',
        'assets/photos/baby kavya w fam/bka1.jpeg',
        'assets/photos/baby kavya w fam/bka2.jpeg',
        'assets/photos/baby kavya w fam/bka3.jpeg',
        'assets/photos/baby kavya w fam/bka4.jpeg'
      ],
      story: 'Baby Kavya surrounded by the people who loved her first. The earliest memories, the warmest arms, and the beginning of a beautiful life story.'
    },
    {
      id: 'turning-one',
      category: 'birthday',
      title: 'Episode 3 — Turning One',
      date: 'Her First Birthday',
      timelineDate: '2003-06-06',
      cover: 'assets/photos/kavya bday 2003.jpeg',
      media: [
        'assets/photos/kavya bday 2003.jpeg'
      ],
      story: 'Kavya’s very first birthday. One whole year of smiles, cuddles, tiny celebrations, and being loved more than words could ever say.'
    },
    {
      id: 'banana-protest',
      category: 'life',
      title: 'Episode 4 — The Great Banana Protest',
      date: 'No Bananas Allowed',
      timelineDate: '2004',
      cover: 'assets/photos/kavya hates bananas.jpeg',
      media: [
        'assets/photos/kavya hates bananas.jpeg'
      ],
      story: 'One thing baby Kavya absolutely refused to tolerate: bananas. A tiny, funny, unforgettable memory from her baby days.'
    },
    {
      id: 'fancy-dress-champion',
      category: 'school',
      title: 'Episode 5 — Fancy Dress Champion',
      date: 'Tiny Star Moment',
      timelineDate: '2005',
      cover: 'assets/photos/kavya fancy dress.jpeg',
      media: [
        'assets/photos/kavya fancy dress.jpeg'
      ],
      story: 'Tiny Kavya already stealing the spotlight. A fancy dress memory full of confidence, cuteness, and main-character energy.'
    },

    {
      id: 'mermaid-at-the-beach',
      category: 'family',
      title: 'Episode 6 — The Mermaid at the Beach',
      date: 'A Beach Day Memory',
      timelineDate: '2006',
      cover: 'assets/photos/kavya beach/kb0.jpeg',
      media: [
        'assets/photos/kavya beach/kb0.jpeg',
        'assets/photos/kavya beach/kb1.jpeg',
        'assets/photos/kavya beach/kb2.jpeg',
        'assets/photos/kavya beach/kb3.jpeg'
      ],
      story: 'A little beach day turned into childhood magic when her dad made her lie in the sand and turned her into a tiny mermaid.'
    },
    {
      id: 'assam-school-days',
      category: 'school',
      title: 'Episode 7 — Assam School Days',
      date: 'School Memories',
      timelineDate: '2007',
      cover: 'assets/photos/kavya at school.jpeg',
      media: [
        'assets/photos/kavya at school.jpeg'
      ],
      story: 'Friends, classrooms, uniforms, laughter, and childhood memories from Kavya’s school days in Assam.'
    },
    {
      id: 'home-sweet-home',
      category: 'family',
      title: 'Episode 8 — Home Sweet Home',
      date: 'Family Moments',
      timelineDate: '2008',
      cover: 'assets/photos/kavya w fam/kf6.jpeg',
      media: [
        'assets/photos/kavya w fam/kf0.jpeg',
        'assets/photos/kavya w fam/kf1.jpeg',
        'assets/photos/kavya w fam/kf2.jpeg',
        'assets/photos/kavya w fam/kf3.jpeg',
        'assets/photos/kavya w fam/kf4.jpeg',
        'assets/photos/kavya w fam/kf5.jpeg',
        'assets/photos/kavya w fam/kf6.jpeg'
      ],
      story: 'Mom, Dad, Sister, and the home that shaped so much of who Kavya is. A chapter full of warmth, comfort, and love.'
    },
    {
      id: 'sisters-forever',
      category: 'family',
      title: 'Episode 9 — Sisters Forever',
      date: 'Besties For Life',
      timelineDate: '2005',
      cover: 'assets/photos/kavya w kriti/kk14.jpeg',
      media: [
        'assets/photos/kavya w kriti/kk0.jpeg',
        'assets/photos/kavya w kriti/kk1.jpeg',
        'assets/photos/kavya w kriti/kk2.jpeg',
        'assets/photos/kavya w kriti/kk3.jpeg',
        'assets/photos/kavya w kriti/kk4.jpeg',
        'assets/photos/kavya w kriti/kk5.jpeg',
        'assets/photos/kavya w kriti/kk6.jpeg',
        'assets/photos/kavya w kriti/kk7.jpeg',
        'assets/photos/kavya w kriti/kk8.jpeg',
        'assets/photos/kavya w kriti/kk9.jpeg',
        'assets/photos/kavya w kriti/kk10.jpeg',
        'assets/photos/kavya w kriti/kk11.jpeg',
        'assets/photos/kavya w kriti/kk12.jpeg',
        'assets/photos/kavya w kriti/kk13.jpeg',
        'assets/photos/kavya w kriti/kk14.jpeg'
      ],
      story: 'Kavya and her sister — besties for life. A bond built on love, chaos, laughter, protection, and growing up together.'
    },
    {
      id: 'daddys-girl',
      category: 'family',
      title: 'Episode 10 — Daddy’s Girl',
      date: 'With Her Dad',
      timelineDate: '2002',
      cover: 'assets/photos/kavya w dad/kd3.jpeg',
      media: [
        'assets/photos/kavya w dad/kd0.jpeg',
        'assets/photos/kavya w dad/kd1.jpeg',
        'assets/photos/kavya w dad/kd3.jpeg',
        'assets/photos/kavya w dad/kd4.jpeg',
        'assets/photos/kavya w dad/kd5.jpeg'
      ],
      story: 'Some of the sweetest memories between baby Kavya and her dad. The kind of love that quietly stays with you forever.'
    },
    {
      id: 'her-supermom',
      category: 'family',
      title: 'Episode 11 — Her Supermom',
      date: 'A Mother’s Love',
      timelineDate: '2002',
      cover: 'assets/photos/km/km0.jpeg',
      media: [
        'assets/photos/km/km0.jpeg',
        'assets/photos/km/km1.jpeg',
        'assets/photos/km/km2.jpeg',
        'assets/photos/km/km3.jpeg',
      ],
      story: 'Kavya’s mom with both her daughters — loving them, protecting them, supporting them, and holding everything together with so much care.'
    },
    {
      id: 'growing-up',
      category: 'life',
      title: 'Episode 12 — Growing Up',
      date: 'Ages 5 to 10',
      timelineDate: '2007',
      cover: 'assets/photos/k5/k50.jpeg',
      media: [
        'assets/photos/k5/k50.jpeg',
        'assets/photos/k5/k51.jpeg',
        'assets/photos/k5/k52.jpeg',
        'assets/photos/k5/k53.jpeg',
        'assets/photos/k5/k54.jpeg',
        'assets/photos/k5/k55.jpeg',
        'assets/photos/k5/k56.jpeg',
        'assets/photos/k5/k57.jpeg',
        'assets/photos/k5/k59.jpeg',
        'assets/photos/k5/k510.jpeg',
        'assets/photos/k5/k511.jpeg',
        'assets/photos/k5/k512.jpeg',
        'assets/photos/k5/k513.jpeg', 
      ],
      story: 'The years when childhood slowly became adventure. Little changes, big smiles, and the memories that show Kavya growing into herself.'
    },
    {
      id: 'becoming-herself',
      category: 'life',
      title: 'Episode 13 — Becoming Herself',
      date: 'Ages 10 to 15',
      timelineDate: '2012',
      cover: 'assets/photos/ktf/ktf0.jpeg',
      media: [
        'assets/photos/ktf/ktf0.jpeg',
        'assets/photos/ktf/ktf1.jpeg',
        'assets/photos/ktf/ktf2.jpeg',
        'assets/photos/ktf/ktf3.jpeg',
        'assets/photos/ktf/ktf4.jpeg'
      ],
      story: 'The years where Kavya started becoming more and more herself — her personality, her confidence, her smile, and her own little world.'
    },
    {
      id: 'graduations',
      category: 'achievement',
      title: 'Episode 14 — Cap, Gown & Big Dreams',
      date: 'Graduation Chapters',
      timelineDate: '2020',
      cover: 'assets/photos/kavya grad/kg0.jpeg',
      media: [
        'assets/photos/kavya grad/kg0.jpeg',
        'assets/photos/kavya grad/kg1.jpeg',
        'assets/photos/kavya grad/kg2.jpeg',
        'assets/photos/kavya grad/kg3.jpeg',
        'assets/photos/kavya grad/kg4.jpeg',
        'assets/photos/kavya grad/kg5.mp4'
      ],
      story: 'From her Sanskriti graduation to her graduation from Delhi University, these were the moments that celebrated years of hard work, determination, and growth. Two milestones, countless memories, and proof that Kavya can achieve anything she sets her mind to.'
    },    
    {
      id: 'birthday-girl',
      category: 'birthday',
      title: 'Episode 15 — Birthday Girl',
      date: 'Birthdays Over The Years',
      timelineDate: '2019',
      cover: 'assets/photos/kavya bdays/kb0.jpeg',
      media: [
        'assets/photos/kavya bdays/kb0.jpeg',
        'assets/photos/kavya bdays/kb1.jpeg',
        'assets/photos/kavya bdays/kb2.jpeg',
        'assets/photos/kavya bdays/kb3.jpeg',
        'assets/photos/kavya bdays/kb4.jpeg',
        'assets/photos/kavya bdays/kb5.jpeg',
        'assets/photos/kavya bdays/kb6.jpeg',
        'assets/photos/kavya bdays/kb7.jpeg',
        'assets/photos/kavya bdays/kb8.jpeg'
      ],
      story: 'A birthday montage through the years — 2019, 2021, 2022, 2023, 2024, and 2025. Every year, a little older and even more loved.'
    },
    {
      id: 'london-calling',
      category: 'adventures',
      title: 'Episode 16 — London Calling',
      date: 'A New Chapter',
      timelineDate: '2023-09',
      cover: 'assets/photos/kl0.jpeg',
      media: [
        'assets/photos/kl0.jpeg',
        'assets/photos/kl1.jpeg',
        'assets/photos/kl2.mp4'
      ],
      story: 'Kavya travelling to London and beginning a brand new chapter. A new city, new dreams, new independence, and the start of something unforgettable.'
    },
    {
      id: 'lse-years',
      category: 'adventures',
      title: 'Episode 17 — The LSE Years',
      date: 'London & LSE',
      timelineDate: '2023-10',
      cover: 'assets/photos/lse0.jpeg',
      media: [
        'assets/photos/lse0.jpeg',
        'assets/photos/lse1.jpg',
        'assets/photos/lse2.jpg',
        'assets/photos/lse3.jpg'

      ],
      story: 'Exploring London, discovering LSE, building a life in a new city, and making memories that became part of who she is.'
    },
    {
      id: 'mannat',
      category: 'adventures',
      title: 'Episode 18 — Mannat',
      date: 'For The SRK Girl',
      timelineDate: '2024-09',
      cover: 'assets/photos/mannat/mannat.jpg',
      media: [
        'assets/photos/mannat/mannat.jpg',
      ],
      story: 'Kavya at Mannat, standing outside Shah Rukh Khan’s home and seeing it for the first time. A tiny dream moment for the biggest SRK girl.'
    },
    {
      id: 'lse-graduation',
      category: 'achievement',
      title: 'Episode 19 — Graduation Day',
      date: 'Graduating From LSE',
      timelineDate: '2024-12',
      cover: 'assets/photos/kavya grad lse/klse0.jpeg',
      media: [
        'assets/photos/kavya grad lse/klse0.jpeg',
        'assets/photos/kavya grad lse/klse1.jpeg',
        'assets/photos/kavya grad lse/klse2.jpeg',
        'assets/photos/kavya grad lse/klse3.jpeg',
        'assets/photos/kavya grad lse/klse4.jpeg',
        'assets/photos/kavya grad lse/klse5.jpeg'
      ],
      story: 'Kavya graduating from LSE. The moment all the hard work, courage, late nights, and determination turned into something beautiful.'
    },
    {
      id: 'dua-lipa-concert',
      category: 'adventures',
      title: 'Episode 20 — Dance The Night Away',
      date: 'First Concert In London',
      timelineDate: '2025-06-24',
      cover: 'assets/photos/DL/kdl0.jpeg',
      media: [
        'assets/photos/DL/kdl0.jpeg',
        'assets/photos/DL/kdl1.jpg',
        'assets/photos/DL/kdl2.jpg',
        'assets/photos/DL/kdl3.jpg',
        'assets/photos/DL/kdl4.jpg',
        'assets/photos/DL/kdl5.mp4',
      ],
      story: 'Kavya’s first concert in UK — Dua Lipa live. Lights, music, excitement, and one of those nights she will always remember.'
    },

    {
      id: 'manchester-united-match',
      category: 'adventures',
      title: 'Episode 21 — Red Devils Recruit',
      date: 'First Man United Match',
      timelineDate: '2025-12-15',
      cover: 'assets/photos/manu/manu0.jpg',
      media: [
        'assets/photos/manu/manu0.jpg',
        'assets/photos/manu/manu1.jpg',
        'assets/photos/manu/manu2.jpeg',
        'assets/photos/manu/manu3.jpg',
      ],
      story: 'Kavya’s first Manchester United match. The beginning of her Red Devils era — whether she likes it or not.'
    },
    {
      id: 'bts-girl',
      category: 'adventures',
      title: 'Episode 22 — BTS Girl',
      date: 'Her BTS Era',
      timelineDate: '2020',
      cover: 'assets/photos/bts/bts0.jpeg',
      media: [
        'assets/photos/bts/bts0.jpeg',
        'assets/photos/bts/bts1.mp4'
      ],
      story: 'The music, the obsession, the excitement, and the countdown to the concert. Kavya’s BTS girl era in full form.'
    },
    {
      id: 'our-chapter',
      category: 'love',
      title: 'Episode 23 — The Chapter We Wrote Together',
      date: 'My Favourite Chapter',
      timelineDate: '2024-01',
      cover: 'assets/photos/our chp/oc7.jpg',
      media: [
        'assets/photos/our chp/oc0.jpg',
        'assets/photos/our chp/oc1.jpg',
        'assets/photos/our chp/oc2.jpg',
        'assets/photos/our chp/oc3.jpg',
        'assets/photos/our chp/oc4.jpg',
        'assets/photos/our chp/oc5.jpg',
        'assets/photos/our chp/oc6.jpg',
        'assets/photos/our chp/oc7.jpg',
        'assets/photos/our chp/oc8.jpg',
        'assets/photos/our chp/oc9.jpg',
        'assets/photos/our chp/oc10.jpeg',
        'assets/photos/our chp/oc11.jpg',
        'assets/photos/our chp/oc12.jpg',
        'assets/photos/our chp/oc13.jpg',
        'assets/photos/our chp/oc14.jpg'
      ],
      story: 'Our story. My favourite chapter in her life. Every memory with Kavya has become something I never want to forget.'
    },
    {
      id: 'happy-birthday-kay',
      category: 'birthday',
      title: 'Episode 24 — Happy Birthday Kay',
      date: 'Her 24th Birthday',
      timelineDate: '2026-06-06',
      cover: 'assets/photos/bday26/kc1.jpeg',
      media: [
        'assets/photos/bday26/kc0.jpeg',
        'assets/photos/bday26/kc1.jpeg',
        'assets/photos/bday26/kc2.jpeg',
        'assets/photos/bday26/kc3.jpeg',
        'assets/photos/bday26/kc4.jpeg',
        'assets/photos/bday26/kc5.jpeg',
        'assets/photos/bday26/kc6.jpeg',
      ],
      story: 'Twenty-four years of laughter, kindness, growth, love, adventures, and beautiful memories. Today we celebrate the incredible person Kavya is and everyone whose lives are brighter because she is in them.'
    },
    {
      id: 'still-to-come',
      category: 'future',
      title: 'Episode 25 — Still To Come',
      date: 'The Future',
      timelineDate: 'Future',
      cover: 'assets/photos/italy.jpg',
      media: [
        'assets/photos/italy.jpg',
        'assets/photos/Greece.webp',
        'assets/photos/northernlights.webp'
      ],
      story: 'The story is not finished yet. More adventures, more dreams, more birthdays, more travels, more concerts, more memories, and so many beautiful chapters still waiting to be written.'
    }
  ],

  achievements: [
    {
      icon: '👶',
      title: 'Little Kay',
      text: 'Started her journey by being the cutest baby in every room she entered.'
    },
    {
      icon: '💖',
      title: 'Heart of Gold',
      text: 'Spent 24 years making people feel loved, cared for, and lucky to know her.'
    },
    {
      icon: '👨‍👩‍👧‍👧',
      title: 'Family’s Favourite Girl',
      text: 'Daughter, sister, best friend — and somehow amazing at every role.'
    },
    {
      icon: '🎓',
      title: 'LSE Graduate',
      text: 'Proved that determination, intelligence, and hard work can take you anywhere.'
    },
    {
      icon: '🌍',
      title: 'London Girl Era',
      text: 'Moved across the world, built a life in a new city, and absolutely thrived.'
    },
    {
      icon: '🎤',
      title: 'Concert Girl',
      text: 'Collected unforgettable nights, loud songs, and memories that still make her smile.'
    },
    {
      icon: '⚽',
      title: 'Red Devil Recruit',
      text: 'Survived her first Manchester United match and may never escape being a fan now.'
    },
    {
      icon: '💜',
      title: 'Purple Streak Era',
      text: 'Because some people follow trends and some people become the trend.'
    },
    {
      icon: '🍌',
      title: 'Banana Survivor',
      text: 'Successfully avoided bananas for most of her life.'
    },
    {
      icon: '🧜‍♀️',
      title: 'Beach Mermaid',
      text: 'Became a mermaid before she learned how to be a grown-up.'
    },
    {
      icon: '🎭',
      title: 'Fancy Dress Legend',
      text: 'Started collecting iconic moments from a very young age.'
    },
    {
      icon: '✨',
      title: 'Main Character Energy',
      text: 'Has somehow managed to make every chapter of life feel like its own movie.'
    },
    {
      icon: '📸',
      title: 'Memory Maker',
      text: 'The reason so many photos exist is because life feels better when she is in it.'
    },
    {
      icon: '🥹',
      title: 'Loved By Everyone',
      text: 'A rare achievement unlocked simply by being herself.'
    },
    {
      icon: '🎂',
      title: '24th Chapter Unlocked',
      text: 'Twenty-four years of laughter, growth, adventures, and becoming the incredible person she is today.'
    },
    {
      icon: '🎬',
      title: 'My Favourite Person',
      text: 'Out of all 8 billion people on Earth, you are still my favourite.'
    }
  ],

  futureGoals: [
    'Make more memories that feel like movie scenes.',
    'Travel somewhere beautiful together (Europe trip soon?).',
    'Celebrate every birthday bigger and better.',
    'Watch an F1 Grand Prix together.',
    'Keep adding new chapters to KayFlix.',
    'Make her feel as loved as she truly is.'
  ]
};
