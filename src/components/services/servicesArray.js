import React from 'react';

const servicesArray = {
  data: [
    {
      service: 'All-Over Color',
      category: 'coloring',
      descr:
        ' acheives gray coverage or a complete color change with one color, applied to the entire head.',
      price: 'starts at $105',
      id: 'allovercolor',
    },
    {
      service: 'All-Over Color plus Gloss/Toner',
      category: 'coloring',
      descr:
        '- add extra shine and/or a color change to the lengths of your hair after an all-over color service.',
      price: 'starts at $125',
      id: 'allOverColorPlusGlossToner',
    },
    {
      service: 'Partial Highlights',
      category: 'coloring',
      descr:
        '- whether applied by foiling or with balayage, are placed around the face for a brightening or framing effect.',
      price: 'start at $135',
      id: 'partialhighlights',
    },
    {
      service: 'All-Over Color with Partial Highlighting',
      category: 'coloring',
      descr:
        '- color with anything from a few baby-lights to a partial highlight ',
      price: '$140 - $175',
      id: 'faceFraming',
    },
    {
      service: 'Full Highlights',
      category: 'coloring',
      descr:
        ' are like partial highlights but are placed throughout the top, crown and/or back of the head.',
      price: 'start at $195',
      id: 'fullhighlights',
    },
    {
      service: 'Shampoo, Cut & Blowdry',
      category: 'cutting',
      descr: '',
      price: '$80',
      id: 'cutBlowdry',
    },
    {
      service: "Men's Short Haircut",
      category: 'cutting',
      descr: '',
      price: '$48',
      id: 'mensCut',
    },
    {
      service: 'Shampoo & Blowdry/Style',
      category: 'cutting',
      descr: '',
      price: '$52',
      id: 'styleOnly',
    },
    {
      service: 'Brazilian Blowout',
      category: 'smoothing',
      descr:
        'is a customizable retexturizing treatment that smoothes frizz and softens curl.',
      price: 'starts at $265',
      id: 'brazilianBlowout',
    },
    {
      service: 'QiQi Hair Treatment',
      category: 'smoothing',
      descr: (
        <span>
          {' '}
          is a costomizable and <em>permanent</em> hair smoothing treatment.
        </span>
      ),
      price: 'starts at $350',
      id: 'qiqi',
    },
    {
      service: 'Zerran Reform',
      category: 'smoothing',
      descr:
        'is a completely non-toxic, aldehyde- and formaldehyde-free formulation that relaxes curl. The Reform process generally requires between 3 and 5 hours to complete, depending on length and density of hair. Contact Barry for more information or to schedule (scheduling not available online).',
      price: 'starts at $290',
      id: 'zerranReform',
    },
  ],
};

export default servicesArray;
