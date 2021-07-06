var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://127.0.0.1:27017/db_ataplangit', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Category',
    './models/Bank',
    './models/Item',
    './models/Activity',
    './models/Member',
    './models/Image',
    './models/Member',
    './models/Booking',
    './models/Users'
  ]);

  // Clear specified collections
  seeder.clearModels(['Category', 'Bank', 'Item', 'Member', 'Item', 'Image', 'Booking', 'Users'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start category
  {
    'model': 'Category',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Mounts In Java Island',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Mounts In Sumatera Island',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Mounts In Sulawesi Island',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') }
        ]
      }
    ]
  },
  // end category
  // start item
  {
    'model': 'Item',
    'documents': [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'MT Slamet',
        price: 12,
        sumBooking: 1,
        country: 'Central Java',
        city: 'Purbalingga',
        isPopular: false,
        description: 'Mount Slamet or Gunung Slamet is an active stratovolcano in the Purbalingga Regency of Central Java, Indonesia. It has a cluster of around three dozen cinder cones on the lower southeast-northeast flanks and a single cinder cone on the western flank. The volcano is composed of two overlapping edifices. Four craters are found at the summit. Historical eruptions have been recorded since the eighteenth century.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'MT Ciremai',
        price: 20,
        sumBooking: 2,
        country: 'West Java',
        city: 'Majalengka',
        isPopular: false,
        description: 'Mount Ciremai/Cereme (or Ciremay) is a dominating symmetrical stratovolcano in West Java, Indonesia. It is located to the southwest of the major town of Cirebon. Mt Ciremai is strikingly visible towards the south from the main west-east corridor (Jakarta-Surabaya) rail link along the north coast of Java. It is the highest point of West Java.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'MT Sumbing',
        price: 20,
        sumBooking: 3,
        country: 'Central Java',
        city: 'Magelang',
        isPopular: false,
        description: 'Mount Sumbing or Gunung Sumbing is an active stratovolcano in Central Java, Indonesia that is symmetrical like its neighbour, Mount Sindoro. The only report of historical eruptions is from 1730. It has created a small phreatic crater at the summit.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        title: 'MT Arjuno',
        price: 20,
        sumBooking: 4,
        country: 'East Java',
        city: 'Malang',
        isPopular: false,
        description: 'Mount Arjuno-Welirang is a stratovolcano in the province of East Java on Java, Indonesia. Mount Arjuno-Welirang lies about 50 kilometers (31 mi) south of Surabaya, and 20 kilometers (12 mi) north of Malang. It is a twin volcano, with the twins being Arjuno and Welirang. There is at least one other stratovolcano in the area, and there are around 10 pyroclastic cones nearby. They are located in a 6 km line between Arjuno and Welirang. The Arjuno-Welirang volcanic complex itself lies in the older two volcanoes, Mount Ringgit to the east and Mount Linting to the south. The summit lacks vegetation. Fumarolic areas with sulfur deposits are found in several locations on Welirang.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
        title: 'MT Dempo',
        price: 20,
        sumBooking: 5,
        country: 'South Sumatera',
        city: 'Palembang',
        isPopular: false,
        description: 'Mount Dempo is the highest stratovolcano in South Sumatra province that rises above Pasumah Plain near Pagar Alam and adjacent with Bengkulu Province. Seven craters are found around the summit. A 400-metre (1,300 ft) wide lake is found at the north-west end of the crater complex.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Podo Wae
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
        title: 'MT Singgalang',
        price: 20,
        sumBooking: 6,
        country: 'West Sumatera',
        city: 'Padang',
        isPopular: false,
        description: 'Mount Singgalang (Gunung Singgalang in Indonesian) is a volcano in West Sumatra, Indonesia, about 10 km to the southwest of the town of Bukittinggi. Its elevation is 2,877 m (9,439 ft). It is a twin volcano with Mount Tandikat, which is located to the south-south-west of Singgalang. However, only Tandikat has had historical volcanic activity. Bukittinggi and the smaller town of Padang Panjang are located towards the east of the mountain.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
        title: 'MT Toba',
        price: 20,
        sumBooking: 7,
        country: 'North Sumatera',
        city: 'Medan',
        isPopular: false,
        description: 'Mount Toba is a giant volcano, namely an active volcano in a very large category located in the province of North Sumatra and is estimated to last erupted about 74,000 years ago.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
        title: 'MT Leuser',
        price: 20,
        sumBooking: 8,
        country: 'Aceh',
        city: 'Gayo Lues',
        isPopular: false,
        description: 'Gunung Leuser National Park is a national park covering 7,927 km2 in northern Sumatra, Indonesia, straddling the border of North Sumatra and Aceh provinces, a fourth portion and three-fourths portion, respectively. The national park, settled in the Barisan mountain range, is named after Mount Leuser (3,119 m), and protects a wide range of ecosystems. An orangutan sanctuary at Bukit Lawang is located within the park. Together with Bukit Barisan Selatan and Kerinci Seblat National Parks, it forms a World Heritage Site, the Tropical Rainforest Heritage of Sumatra.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // PS Wood
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
        title: 'MT Bawakaraeng',
        price: 20,
        sumBooking: 9,
        country: 'South Sulawesi',
        city: 'Gowa',
        isPopular: false,
        description: 'Mount Bawakaraeng is located in Gowa Regency, South Sulawesi. On the slopes of this mountain there is an elevation area, Malino, a famous tourist spot in South Sulawesi. Ecologically this mountain has an important position because it is a source of water storage for Kabupaten Gowa, Makassar City, Kabupaten Bantaeng, Kabupaten Bulukumba and Kabupaten Sinjai.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // One Five
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
        title: 'MT Latimojong',
        price: 20,
        sumBooking: 11,
        country: 'South Sulawesi',
        city: 'Enrekang',
        isPopular: false,
        description: 'Latimojong (Indonesian: Gunung Latimojong), also known by its local name Rantemario, is a mountain located in the province of South Sulawesi, Sulawesi, Indonesia. At 3,478 metres (11,411 ft), it is the highest mountain on the island, although some sources state Mount Rantekombola as the highest point.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
        title: 'MT Klabat',
        price: 20,
        sumBooking: 13,
        country: 'North Sulawesi',
        city: 'North Minahasa',
        isPopular: false,
        description: 'Mount Klabat is the highest volcano on Sulawesi island, located in the east of Manado city, North Sulawesi, Indonesia. A 170 × 250 m wide, shallow crater lake is found at the summit. There are no confirmed historical eruptions of the volcano. A report of eruption taking place in 1683 is thought to have been produced by the Mount Tongkoko volcano instead.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
        title: 'MT Gendang Dewa',
        price: 20,
        sumBooking: 14,
        country: 'West Sulawesi',
        city: 'Mamasa',
        isPopular: false,
        description: 'Mount Gandang Dewata is one of the highest mountains located in the western part of Sulawesi (Quarlesi mountains) and the second highest mountain in Sulawesi after Mount Latimojong (3478 masl) located in Enrekang district. In the mountain groove of the Gandang Dewata mountains, there are people from the Rante Pongkok Hamlet, Mamasa Regency, who defend their lives from farming activities. Sociologically, Gandang Dewata has had an emotional relationship with the people of the last village of Rante Pongkok Village for a long time. With their unique local wisdom, the people of Rante Pongkok Village are trying to protect Gods very complex creation in the forest. By linking the existence of the descending Gods who sound the drums who always provide information to the community through the forest, and the forest as land to support life, the forest is ethically and morally legitimized to be protected and loved.',
        unit: 'night',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35') },
          // done
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },
      
      // Stays Home
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
        title: 'MT Semeru',
        price: 20,
        sumBooking: 14,
        country: 'East Java',
        city: 'Malang',
        isPopular: false,
        description: 'Semeru is Java’s highest peak and has been active for decades which is part of the Bromo Tengger Semeru National Park. A cloud of black volcanic ash and sand is frequently released from near the summit, sometimes once an hour, sometimes as often as every ten minutes. There have been numerous fatalities, but it is a popular and safe hike if you treat the mountain with respect and as Java’s highest peak, it is one of the finest hikes in Indonesia.',
        unit: 'night',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd37') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd38') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd39') },
          // done
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

    ]
  },
  // end item
  // start image
  {
    'model': 'Image',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/big-slamet.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/small-slamet.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/small-slamet-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/big-ciremai.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/small-ciremai.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/small-ciremai-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/big-sumbing.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
        imageUrl: 'images/small-sumbing.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/small-sumbing-2.png'
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/big-arjuno.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/small-arjuno.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/small-arjuno-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
        imageUrl: 'images/big-dempo.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
        imageUrl: 'images/small-dempo.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
        imageUrl: 'images/small-dempo-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
        imageUrl: 'images/big-singgalang.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
        imageUrl: 'images/small-singgalang.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
        imageUrl: 'images/small-singgalang-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
        imageUrl: 'images/big-toba.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
        imageUrl: 'images/small-toba.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
        imageUrl: 'images/small-toba-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
        imageUrl: 'images/big-leuser.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
        imageUrl: 'images/small-leuser.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
        imageUrl: 'images/small-leuser-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
        imageUrl: 'images/big-bawakaraeng.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
        imageUrl: 'images/small-bawakaraeng.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
        imageUrl: 'images/small-bawakaraeng-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
        imageUrl: 'images/big-latimojong.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
        imageUrl: 'images/small-latimojong.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
        imageUrl: 'images/small-latimojong-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
        imageUrl: 'images/big-klabat.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
        imageUrl: 'images/small-klabat.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
        imageUrl: 'images/small-klabat-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
        imageUrl: 'images/big-gendang.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
        imageUrl: 'images/small-gendang.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
        imageUrl: 'images/small-gendang-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd37'),
        imageUrl: 'images/big-semeru.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd38'),
        imageUrl: 'images/small-semeru.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd39'),
        imageUrl: 'images/small-semeru-2.png'
      },
    ]
  },
  // end image
  // start activity
  {
    'model': 'Activity',
    'documents': [
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
        name: 'Owabong Waterpark',
        type: 'Waterparks',
        imageUrl: 'images/pic_owabong.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
        name: 'Kutabawa Flower Garden',
        type: 'Flower Gardens',
        imageUrl: 'images/pic_kutabawa.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
        name: 'Curug Tempuran',
        type: 'Waterfalls',
        imageUrl: 'images/pic_tempuran.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
        name: 'Sanggaluri Park',
        type: 'Wildlife Areas',
        imageUrl: 'images/pic_sanggaluri.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
        name: 'Kebun Teh Cipasung',
        type: 'Natures',
        imageUrl: 'images/pic_cipasung.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
        name: 'Terasering Argapura',
        type: 'Natures',
        imageUrl: 'images/pic_teraargapura.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
        name: 'Cikadongdong River Tubing',
        type: 'River Tubing',
        imageUrl: 'images/pic_cikadongdong.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
        name: 'Bukit Mercury Sayang Kaak',
        type: 'Natures',
        imageUrl: 'images/activity-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      // done 3
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb09'),
        name: 'Bromo Tengger Semeru',
        type: 'National Parks',
        imageUrl: 'images/pic_tengger.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb10'),
        name: 'Blue Flame Ijen Crater',
        type: 'Geologic Formations',
        imageUrl: 'images/pic_ijen.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb11'),
        name: 'Coban Pelangi',
        type: 'Waterfalls',
        imageUrl: 'images/pic_cobpelangi.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb12'),
        name: 'Sempu Island',
        type: 'Nature & Wildlife Areas',
        imageUrl: 'images/pic_sempu.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
      }
    ]
  },
  // end activity

  // start booking
  {
    'model': 'Booking',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2021',
        bookingEndDate: '12-12-2021',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902234'),
          title: 'MT Semeru',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/bukti.jpeg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang'
        }
      }
    ]
  },
  // end booking

  // member
  {
    'model': 'Member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Panji',
        lastName: 'Hadjarati',
        email: 'panjihadjarati@gmail.com',
        phoneNumber: '081234567890'
      }
    ]
  },
  {
    'model': 'Bank',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        nameBank: 'Bank Mandiri',
        nomorRekening: '4321 5678',
        name: 'Atap Katulistiwa',
        imageUrl: 'images/logo bca.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        nameBank: 'Bank Central Asia',
        nomorRekening: '1234 9876',
        name: 'Atap Katulistiwa',
        imageUrl: 'images/logo mandiri.png'
      }
    ]
  },
  {
    'model': 'Users',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903340'),
        username: 'admin',
        password: 'rahasia',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903341'),
        username: 'superadmin',
        password: 'rahasia',
      },
    ]
  }
];