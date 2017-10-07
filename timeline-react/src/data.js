import moment from 'moment'

export default {

  locations: [
    'Denver, CO',
    'Coors Field',
    '2001 Blake St'
  ],

  commonTags: [
    'Lunch',
    'Hungry',
    'Nap'
  ],

  entries: [
    {
      timestamp: moment().subtract(24, 'h').valueOf(),
      mood: 'happy',
      location: 'Glenwood Springs, CO',
      tags: [
        'Hot Dog',
        'Lunch'
      ],
      description: `I took a magical trip to Glennwood Springs in record breaking time. Had some good lunch and now on my way to foobar!`
    },
    {
      timestamp: moment().subtract(28, 'h').valueOf(),
      mood: 'whatever',
      location: '2001 Blake St',
      tags: [
        'Breakfast',
        'Waffles'
      ],
      description: ``
    },
    {
      timestamp: moment().subtract(30, 'h').valueOf(),
      mood: 'tired',
      location: 'Home',
      tags: [
        'Exercise',
        'Pull Ups'
      ],
      description: `A few reps bruh`
    }
  ]

}
