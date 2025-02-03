import { Novel } from './types';

export interface Novel {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  chapters: number;
  views: number;
  lastUpdated: string;
  description?: string;
}

export const novels: Record<string, Novel[]> = {
  'Romance': [
    {
      id: 1,
      title: 'Measure of Love',
      author: 'Sarah Wilson',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      rating: 4.5,
      category: 'Romance',
      chapters: 15,
      views: 32200,
      lastUpdated: '2024-03-15',
      description: 'Emma never expected to find love in her small coffee shop on the corner of Sukhumvit Road. When Kai, a charming architect, becomes a regular customer, their daily interactions slowly bloom into something more. Between steaming lattes and shared smiles, they discover that sometimes the greatest love stories aren\'t written in grand gestures, but in the quiet moments of genuine connection.'
    },
    {
      id: 2,
      title: 'Waiting for You',
      author: 'Emily Parker',
      cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954',
      rating: 4.7,
      category: 'Romance',
      chapters: 20,
      views: 22500,
      lastUpdated: '2024-03-14'
    },
    {
      id: 3,
      title: 'Under the Same Roof',
      author: 'Jennifer Adams',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      rating: 4.6,
      category: 'Romance',
      chapters: 25,
      views: 11000,
      lastUpdated: '2024-03-13'
    },
    {
      id: 4,
      title: 'Hearts Entwined',
      author: 'Rachel Brooks',
      cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
      rating: 4.8,
      category: 'Romance',
      chapters: 18,
      views: 28500,
      lastUpdated: '2024-03-12'
    },
    {
      id: 5,
      title: 'Love in Paris',
      author: 'Sophie Martin',
      cover: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      rating: 4.4,
      category: 'Romance',
      chapters: 22,
      views: 19800,
      lastUpdated: '2024-03-11'
    },
    {
      id: 6,
      title: 'The Wedding Planner',
      author: 'Amanda White',
      cover: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      rating: 4.3,
      category: 'Romance',
      chapters: 16,
      views: 15600,
      lastUpdated: '2024-03-10'
    },
    {
      id: 7,
      title: 'Summer Love',
      author: 'Jessica Brown',
      cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      rating: 4.6,
      category: 'Romance',
      chapters: 20,
      views: 21300,
      lastUpdated: '2024-03-09'
    },
    {
      id: 8,
      title: 'Coffee Shop Romance',
      author: 'Oliver James',
      cover: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
      rating: 4.5,
      category: 'Romance',
      chapters: 14,
      views: 17800,
      lastUpdated: '2024-03-08'
    },
    {
      id: 9,
      title: 'Second Chances',
      author: 'Emma Thompson',
      cover: 'https://images.unsplash.com/photo-1516589091380-5d8259168293',
      rating: 4.7,
      category: 'Romance',
      chapters: 24,
      views: 25900,
      lastUpdated: '2024-03-07'
    },
    {
      id: 10,
      title: 'Unexpected Love',
      author: 'Daniel Carter',
      cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      rating: 4.4,
      category: 'Romance',
      chapters: 19,
      views: 18400,
      lastUpdated: '2024-03-06'
    }
  ],
  'Science Fiction': [
    {
      id: 301,
      title: 'Beyond the Stars',
      author: 'Alex Morgan',
      cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      rating: 4.8,
      category: 'Science Fiction',
      chapters: 22,
      views: 45200,
      lastUpdated: '2024-03-15'
    },
    {
      id: 302,
      title: 'Neural Network',
      author: 'Dr. James Chen',
      cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      rating: 4.6,
      category: 'Science Fiction',
      chapters: 18,
      views: 38900,
      lastUpdated: '2024-03-14'
    },
    {
      id: 303,
      title: 'Time Paradox',
      author: 'Sarah Connor',
      cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      rating: 4.7,
      category: 'Science Fiction',
      chapters: 25,
      views: 42100,
      lastUpdated: '2024-03-13'
    },
    {
      id: 304,
      title: 'The Last Colony',
      author: 'Michael Reed',
      cover: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3',
      rating: 4.5,
      category: 'Science Fiction',
      chapters: 20,
      views: 35600,
      lastUpdated: '2024-03-12'
    },
    {
      id: 305,
      title: 'Quantum Dreams',
      author: 'Elena Rodriguez',
      cover: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031',
      rating: 4.9,
      category: 'Science Fiction',
      chapters: 24,
      views: 48700,
      lastUpdated: '2024-03-11'
    },
    {
      id: 306,
      title: 'Android Heart',
      author: 'David Kim',
      cover: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13',
      rating: 4.4,
      category: 'Science Fiction',
      chapters: 16,
      views: 31200,
      lastUpdated: '2024-03-10'
    },
    {
      id: 307,
      title: 'Solar Storm',
      author: 'Patricia Wells',
      cover: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3',
      rating: 4.6,
      category: 'Science Fiction',
      chapters: 21,
      views: 39800,
      lastUpdated: '2024-03-09'
    },
    {
      id: 308,
      title: 'The Mars Project',
      author: 'Robert Chang',
      cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      rating: 4.8,
      category: 'Science Fiction',
      chapters: 23,
      views: 44500,
      lastUpdated: '2024-03-08'
    },
    {
      id: 309,
      title: 'Digital Consciousness',
      author: 'Lisa Martinez',
      cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      rating: 4.7,
      category: 'Science Fiction',
      chapters: 19,
      views: 41200,
      lastUpdated: '2024-03-07'
    },
    {
      id: 310,
      title: 'Nebula Rising',
      author: 'Thomas Anderson',
      cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      rating: 4.5,
      category: 'Science Fiction',
      chapters: 17,
      views: 36900,
      lastUpdated: '2024-03-06'
    }
  ],
  'Adventure': [
    {
      id: 401,
      title: 'Lost City of Gold',
      author: 'Marcus Hunt',
      cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      rating: 4.7,
      category: 'Adventure',
      chapters: 24,
      views: 52300,
      lastUpdated: '2024-03-15'
    },
    {
      id: 402,
      title: 'Mountain Quest',
      author: 'Laura Peak',
      cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      rating: 4.6,
      category: 'Adventure',
      chapters: 20,
      views: 48900,
      lastUpdated: '2024-03-14'
    },
    {
      id: 403,
      title: 'Desert Storm',
      author: 'Ahmed Hassan',
      cover: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
      rating: 4.8,
      category: 'Adventure',
      chapters: 22,
      views: 51200,
      lastUpdated: '2024-03-13'
    },
    {
      id: 404,
      title: 'Ocean\'s Secret',
      author: 'Marina Costa',
      cover: 'https://images.unsplash.com/photo-1468581264429-2548ef9eb732',
      rating: 4.5,
      category: 'Adventure',
      chapters: 18,
      views: 45600,
      lastUpdated: '2024-03-12'
    },
    {
      id: 405,
      title: 'Jungle Expedition',
      author: 'Carlos Silva',
      cover: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
      rating: 4.9,
      category: 'Adventure',
      chapters: 26,
      views: 54800,
      lastUpdated: '2024-03-11'
    },
    {
      id: 406,
      title: 'Arctic Challenge',
      author: 'Erik Larsson',
      cover: 'https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00',
      rating: 4.4,
      category: 'Adventure',
      chapters: 16,
      views: 42300,
      lastUpdated: '2024-03-10'
    },
    {
      id: 407,
      title: 'Canyon Raiders',
      author: 'John Stone',
      cover: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      rating: 4.6,
      category: 'Adventure',
      chapters: 21,
      views: 49700,
      lastUpdated: '2024-03-09'
    },
    {
      id: 408,
      title: 'Island of Mysteries',
      author: 'Sophie Lee',
      cover: 'https://images.unsplash.com/photo-1439405326854-014607f694d7',
      rating: 4.7,
      category: 'Adventure',
      chapters: 23,
      views: 50200,
      lastUpdated: '2024-03-08'
    },
    {
      id: 409,
      title: 'Mountain Peak',
      author: 'Alex Rivers',
      cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      rating: 4.5,
      category: 'Adventure',
      chapters: 19,
      views: 47100,
      lastUpdated: '2024-03-07'
    },
    {
      id: 410,
      title: 'Cave of Wonders',
      author: 'Maria Garcia',
      cover: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
      rating: 4.8,
      category: 'Adventure',
      chapters: 25,
      views: 53400,
      lastUpdated: '2024-03-06'
    }
  ],
  'Drama': [
    {
      id: 501,
      title: 'Family Ties',
      author: 'Elizabeth Bennett',
      cover: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
      rating: 4.8,
      category: 'Drama',
      chapters: 28,
      views: 62100,
      lastUpdated: '2024-03-15'
    },
    {
      id: 502,
      title: 'The Last Goodbye',
      author: 'Richard Moore',
      cover: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe',
      rating: 4.7,
      category: 'Drama',
      chapters: 24,
      views: 58900,
      lastUpdated: '2024-03-14'
    },
    {
      id: 503,
      title: 'Silent Tears',
      author: 'Anna Chen',
      cover: 'https://images.unsplash.com/photo-1518601297183-c556b3819d27',
      rating: 4.9,
      category: 'Drama',
      chapters: 26,
      views: 64500,
      lastUpdated: '2024-03-13'
    },
    {
      id: 504,
      title: 'Broken Promises',
      author: 'Michael Ross',
      cover: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
      rating: 4.6,
      category: 'Drama',
      chapters: 22,
      views: 56700,
      lastUpdated: '2024-03-12'
    },
    {
      id: 505,
      title: 'The Other Side',
      author: 'Sarah James',
      cover: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59',
      rating: 4.8,
      category: 'Drama',
      chapters: 25,
      views: 61200,
      lastUpdated: '2024-03-11'
    },
    {
      id: 506,
      title: 'Unspoken Words',
      author: 'David Lee',
      cover: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      rating: 4.5,
      category: 'Drama',
      chapters: 20,
      views: 54300,
      lastUpdated: '2024-03-10'
    },
    {
      id: 507,
      title: 'The Choice',
      author: 'Emma Watson',
      cover: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59',
      rating: 4.7,
      category: 'Drama',
      chapters: 23,
      views: 59800,
      lastUpdated: '2024-03-09'
    },
    {
      id: 508,
      title: 'Lost and Found',
      author: 'Thomas Wright',
      cover: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe',
      rating: 4.6,
      category: 'Drama',
      chapters: 21,
      views: 57200,
      lastUpdated: '2024-03-08'
    },
    {
      id: 509,
      title: 'Second Life',
      author: 'Rachel Kim',
      cover: 'https://images.unsplash.com/photo-1518601297183-c556b3819d27',
      rating: 4.8,
      category: 'Drama',
      chapters: 27,
      views: 63400,
      lastUpdated: '2024-03-07'
    },
    {
      id: 510,
      title: 'The Bridge',
      author: 'Peter Collins',
      cover: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      rating: 4.7,
      category: 'Drama',
      chapters: 24,
      views: 60100,
      lastUpdated: '2024-03-06'
    }
  ],
  'Fantasy': [
    {
      id: 601,
      title: 'The Crystal Kingdom',
      author: 'Elena Blackwood',
      cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
      rating: 4.8,
      category: 'Fantasy',
      chapters: 25,
      views: 68400,
      lastUpdated: '2024-03-15'
    },
    {
      id: 602,
      title: 'Dragon\'s Breath',
      author: 'Marcus Storm',
      cover: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699',
      rating: 4.7,
      category: 'Fantasy',
      chapters: 30,
      views: 72100,
      lastUpdated: '2024-03-14'
    },
    {
      id: 603,
      title: 'The Enchanted Forest',
      author: 'Isabella Moon',
      cover: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
      rating: 4.9,
      category: 'Fantasy',
      chapters: 28,
      views: 65800,
      lastUpdated: '2024-03-13'
    },
    {
      id: 604,
      title: 'Wizard\'s Path',
      author: 'Thomas Spellman',
      cover: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27',
      rating: 4.6,
      category: 'Fantasy',
      chapters: 22,
      views: 59300,
      lastUpdated: '2024-03-12'
    },
    {
      id: 605,
      title: 'The Phoenix Rising',
      author: 'Aurora Flame',
      cover: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200',
      rating: 4.8,
      category: 'Fantasy',
      chapters: 26,
      views: 67200,
      lastUpdated: '2024-03-11'
    },
    {
      id: 606,
      title: 'Realm of Shadows',
      author: 'Derek Night',
      cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
      rating: 4.7,
      category: 'Fantasy',
      chapters: 24,
      views: 63400,
      lastUpdated: '2024-03-10'
    },
    {
      id: 607,
      title: 'The Unicorn\'s Tale',
      author: 'Sarah Starling',
      cover: 'https://images.unsplash.com/photo-1490253013138-13ce8db481a5',
      rating: 4.5,
      category: 'Fantasy',
      chapters: 20,
      views: 58900,
      lastUpdated: '2024-03-09'
    },
    {
      id: 608,
      title: 'Mystic Mountains',
      author: 'Robert Peak',
      cover: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      rating: 4.6,
      category: 'Fantasy',
      chapters: 23,
      views: 61200,
      lastUpdated: '2024-03-08'
    },
    {
      id: 609,
      title: 'The Fairy Queen',
      author: 'Luna Silver',
      cover: 'https://images.unsplash.com/photo-1502136969935-8d8eef54d77b',
      rating: 4.8,
      category: 'Fantasy',
      chapters: 27,
      views: 69800,
      lastUpdated: '2024-03-07'
    },
    {
      id: 610,
      title: 'The Last Sorcerer',
      author: 'Magnus Wise',
      cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
      rating: 4.7,
      category: 'Fantasy',
      chapters: 25,
      views: 64500,
      lastUpdated: '2024-03-06'
    }
  ],
  'Mystery': [
    {
      id: 701,
      title: 'The Silent Witness',
      author: 'Victoria Blake',
      cover: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
      rating: 4.8,
      category: 'Mystery',
      chapters: 22,
      views: 71200,
      lastUpdated: '2024-03-15'
    },
    {
      id: 702,
      title: 'Dark Alley',
      author: 'James Shadow',
      cover: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16',
      rating: 4.7,
      category: 'Mystery',
      chapters: 24,
      views: 68900,
      lastUpdated: '2024-03-14'
    },
    {
      id: 703,
      title: 'The Last Letter',
      author: 'Emily Frost',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      rating: 4.9,
      category: 'Mystery',
      chapters: 26,
      views: 73400,
      lastUpdated: '2024-03-13'
    },
    {
      id: 704,
      title: 'Vanishing Point',
      author: 'Michael Cross',
      cover: 'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62',
      rating: 4.6,
      category: 'Mystery',
      chapters: 20,
      views: 65700,
      lastUpdated: '2024-03-12'
    },
    {
      id: 705,
      title: 'The Locked Room',
      author: 'Sophie Keys',
      cover: 'https://images.unsplash.com/photo-1505662695181-d4b60363d2a3',
      rating: 4.8,
      category: 'Mystery',
      chapters: 23,
      views: 70100,
      lastUpdated: '2024-03-11'
    },
    {
      id: 706,
      title: 'Missing Pieces',
      author: 'Daniel Hunt',
      cover: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
      rating: 4.7,
      category: 'Mystery',
      chapters: 21,
      views: 67800,
      lastUpdated: '2024-03-10'
    },
    {
      id: 707,
      title: 'The Detective\'s Diary',
      author: 'Rachel Clue',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
      rating: 4.5,
      category: 'Mystery',
      chapters: 25,
      views: 69200,
      lastUpdated: '2024-03-09'
    },
    {
      id: 708,
      title: 'Midnight Murder',
      author: 'Alex Night',
      cover: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16',
      rating: 4.6,
      category: 'Mystery',
      chapters: 24,
      views: 66500,
      lastUpdated: '2024-03-08'
    },
    {
      id: 709,
      title: 'The Cold Case',
      author: 'Laura Winters',
      cover: 'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62',
      rating: 4.8,
      category: 'Mystery',
      chapters: 27,
      views: 72300,
      lastUpdated: '2024-03-07'
    },
    {
      id: 710,
      title: 'Hidden Secrets',
      author: 'Mark Truth',
      cover: 'https://images.unsplash.com/photo-1505662695181-d4b60363d2a3',
      rating: 4.7,
      category: 'Mystery',
      chapters: 22,
      views: 68100,
      lastUpdated: '2024-03-06'
    }
  ]
};

// Helper function to get novel by ID
export function getNovelById(id: number): Novel | undefined {
  for (const category of Object.values(novels)) {
    const novel = category.find(n => n.id === id);
    if (novel) return novel;
  }
  return undefined;
}
