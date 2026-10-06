export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "genesee-street-center",
    "name": "Genesee Street Center",
    "h1": "Hydro Jetting in Genesee Street Center, Baldwinsville NY",
    "title": "Hydro Jetting in Genesee Street Center, Baldwinsville | Baldwinsville Hydro Jetting Pros",
    "description": "Hydro jetting in Genesee Street Center, Baldwinsville NY: drain line questions for restored historic buildings and mixed-use properties. Call (877) 761-0283.",
    "intro": "The village's 2006 Central Business District plan covers properties on East and West Genesee Street and records the rehabilitation of historic buildings into restaurants, lodging and retail. Condition of the line matters more than the setting.",
    "heroPs": [
      "Buildings in the Genesee Street Center can develop slow drains from kitchen grease, scale or roots, and rehabilitated older buildings often combine old and new pipe. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe the current use of the building and which fixtures are affected."
    ],
    "bodyH2": "Hydro Jetting for Genesee Street Center Properties",
    "bodyPs": [
      "The village's 2006 Central Business District plan includes properties fronting East and West Genesee Street and nearby village streets. It records the rehabilitation of historic buildings into restaurant, lodging and retail uses. The plan is historical context and not a current record of any private pipe.",
      "Rehabilitated buildings often combine old structure with new interiors. A restaurant kitchen, a guest bathroom or a retail restroom may have been added to a building that was built for something else, and the drain line may have been extended, rerouted or joined to older pipe.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. For a building with a mixed plumbing history, the camera inspection decides whether it is a good fit and where the stream should stop."
    ],
    "considerations": [
      "Current use of the building and its drain load",
      "Where past renovations added or rerouted drain lines",
      "Grease handling in any kitchen on the line",
      "Where the cleanout or access point is",
      "Whether the line is shared with a neighboring building",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in Genesee Street Center",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Restaurant and food service use can load a line with grease faster than a household can.",
      "tree-root-intrusions": "Street trees and older laterals can combine at aged joints.",
      "recurring-clogs-and-slow-drains": "A line with a layered renovation history can hold residue where pipe changes.",
      "mineral-and-scale-deposits": "Scale can build in older sections that were kept during a renovation.",
      "preventative-maintenance": "Heavy daily use suits scheduled inspection and cleaning."
    },
    "appsH2": "Hydro Jetting Situations in a Restored Downtown",
    "apps": [
      {
        "h": "Kitchens added to older buildings",
        "ps": [
          "A restaurant installed in a building made for something else can strain an older line. Grease buildup is the first thing to check."
        ]
      },
      {
        "h": "Guest and retail restrooms",
        "ps": [
          "Lodging and retail add restrooms with steady daily use. A line that serves them can see debris that residential lines rarely do."
        ]
      },
      {
        "h": "Lines extended during renovation",
        "ps": [
          "Where a renovation extended or rerouted drains, the new work may join old pipe awkwardly. The camera shows whether the joints hold up."
        ]
      },
      {
        "h": "Scheduled upkeep for busy properties",
        "ps": [
          "A property with heavy daily use can benefit from a planned cleaning after an inspection."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Genesee Street Center",
    "implPs": [
      "Rehabilitated downtown buildings combine old structure and new use. The drain line often shows where those two meet.",
      "These are the points that shape the work in the Genesee Street Center."
    ],
    "impl": [
      {
        "h": "Use decides the load",
        "ps": [
          "A kitchen, a restroom and a storage room put different demands on the same line."
        ],
        "bullets": [
          "Describe how each space is used",
          "Share any known grease handling practices"
        ]
      },
      {
        "h": "Old structure, new plumbing",
        "ps": [
          "Renovations may have left a mix of materials in one run."
        ],
        "bullets": [
          "Gather renovation records if you have them",
          "Expect inspection before cleaning"
        ]
      },
      {
        "h": "Shared and neighboring lines",
        "ps": [
          "Downtown buildings sometimes share walls and drain paths."
        ],
        "bullets": [
          "Ask whether the line is shared",
          "Tell the crew about neighbors with similar symptoms"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Genesee Street Center",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Identify the use and the line",
        "d": "Note how the building is used and which spaces connect to the affected drain, then locate the cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Genesee Street Center, Baldwinsville NY",
    "mapIntro": "Baldwinsville Hydro Jetting Pros takes requests in Genesee Street Center and across Baldwinsville. The map shows the neighborhood area, not a business office.",
    "mapQuery": "E Genesee St, Baldwinsville, NY",
    "mapTitle": "Map of Genesee Street Center, Baldwinsville, NY",
    "nearbyH2": "Serving Genesee Street Center and Nearby Baldwinsville Neighborhoods",
    "nearbyP": "Baldwinsville Hydro Jetting Pros serves Genesee Street Center and the rest of Baldwinsville, including River Street. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Genesee Street Center",
    "faqs": [
      {
        "q": "Does the 2006 plan tell me anything about my pipes?",
        "a": "No. It is historical context and not a record of any private line. An inspection is the source for that."
      },
      {
        "q": "Why does a restaurant line clog more often?",
        "a": "Commercial kitchens put more grease in the line than a household does. Buildup is the usual cause, and jetting is built to remove it."
      },
      {
        "q": "Can renovation work cause drain problems?",
        "a": "It can, if new work was joined to older pipe or reroutes narrowed a run. The camera shows whether that is happening."
      },
      {
        "q": "Is hydro jetting safe for historic buildings?",
        "a": "It depends on the pipe's condition. Inspection comes first, and a weak section may need repair before cleaning."
      },
      {
        "q": "Who handles a blockage in the street?",
        "a": "A public sewer blockage is for the village. One inside the private lateral is the property owner's."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Genesee Street Center Hydro Jetting Project With Baldwinsville Hydro Jetting Pros",
    "ctaPs": [
      "A restored building tells a story in its walls, and the drain line often tells a story of its own. A clear account of the use, the symptoms and any renovations gets the inspection started well.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "river-street",
    "name": "River Street",
    "h1": "Hydro Jetting in River Street, Baldwinsville NY",
    "title": "Hydro Jetting in River Street, Baldwinsville | Baldwinsville Hydro Jetting Pros",
    "description": "Hydro jetting in River Street, Baldwinsville NY: how a riverfront setting near Mercer Park shapes drain questions and cleaning plans. Call (877) 761-0283.",
    "intro": "The village's 2006 plan describes a River Street character area near the riverfront, with mixed-use buildings and access to Mercer Park. A riverside setting does not by itself indicate groundwater entry or sewer damage.",
    "heroPs": [
      "Properties on River Street can develop slow drains from grease, scale or roots, and a riverfront location raises questions that only an inspection can answer. Hydro jetting can clear buildup from a sound line when the camera shows it is the right method. Describe the affected fixtures and when the problem shows up."
    ],
    "bodyH2": "Hydro Jetting for River Street Properties",
    "bodyPs": [
      "The village's 2006 plan identifies a River Street character area near the riverfront and discusses mixed-use buildings and access to Mercer Park. Homes, small businesses and public space sit close together here.",
      "A riverside setting invites questions. Is groundwater getting into the line? Are roots worse near the water? Is the ground soft? The setting alone answers none of them. A camera inspection of the actual lateral does.",
      "Hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. It removes an obstruction and does not repair damage, so the inspection should tell you plainly which one you are dealing with."
    ],
    "considerations": [
      "Which fixtures are slow and whether the pattern changes after heavy rain",
      "Whether the property is a home, a business or both",
      "Trees close to the path of the lateral",
      "Where the cleanout is and how easy it is to reach",
      "Any past cleanings, repairs or replaced sections",
      "Whether the problem sits in the private lateral or the public sewer"
    ],
    "svcH2": "Hydro Jetting Services in River Street",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "Mixed-use buildings with a kitchen can put grease into a line steadily.",
      "tree-root-intrusions": "Roots seek moisture, and a riverfront lot can have mature trees near the line.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing needs a cause, not another quick fix.",
      "mineral-and-scale-deposits": "Scale narrows a line slowly and can build at joints.",
      "preventative-maintenance": "A planned cleaning after an inspection can catch buildup early."
    },
    "appsH2": "Hydro Jetting Situations Near the River",
    "apps": [
      {
        "h": "Symptoms that follow the weather",
        "ps": [
          "If drains slow mainly after heavy rain, say so. It can point toward groundwater or a joint problem as well as a clog."
        ]
      },
      {
        "h": "Mixed-use buildings near the water",
        "ps": [
          "A building with both a business and a residence puts varied loads on one line. Describe each use so the inspection looks for the right cause."
        ]
      },
      {
        "h": "Roots near the riverbank",
        "ps": [
          "Mature trees near the water can reach a lateral. Jetting can clear roots from a sound pipe, and the camera shows whether the entry point needs repair."
        ]
      },
      {
        "h": "A line with a history of backups",
        "ps": [
          "A line that has backed up before is likely to do so again. Planned cleaning after an inspection beats another emergency call."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for River Street",
    "implPs": [
      "A riverfront setting carries a few extra questions. They have practical answers that start with looking at the line.",
      "These are the points that shape the work on River Street."
    ],
    "impl": [
      {
        "h": "Watch for weather patterns",
        "ps": [
          "Notes on when symptoms occur help the inspection find the real cause."
        ],
        "bullets": [
          "Record when drains slow",
          "Tell the crew about heavy rain or high water"
        ]
      },
      {
        "h": "Mixed use on one line",
        "ps": [
          "Homes and businesses sharing a line, or a building, load it differently."
        ],
        "bullets": [
          "Describe each use",
          "Ask whether the line is shared with a neighbor"
        ]
      },
      {
        "h": "Cleaning versus repair",
        "ps": [
          "Clearing a line does not fix a crack or shifted joint."
        ],
        "bullets": [
          "Ask to see the camera findings",
          "Plan for a repair assessment if one is advised"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in River Street",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Note the weather pattern",
        "d": "Record when symptoms happen, and find the cleanout so the crew can reach the line."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in River Street, Baldwinsville NY",
    "mapIntro": "Baldwinsville Hydro Jetting Pros takes requests in River Street and across Baldwinsville. The map shows the neighborhood area, not a business office.",
    "mapQuery": "River St, Baldwinsville, NY",
    "mapTitle": "Map of River Street, Baldwinsville, NY",
    "nearbyH2": "Serving River Street and Nearby Baldwinsville Neighborhoods",
    "nearbyP": "Baldwinsville Hydro Jetting Pros serves River Street and the rest of Baldwinsville, including Genesee Street Center. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in River Street",
    "faqs": [
      {
        "q": "Does a riverfront location mean my line is damaged?",
        "a": "No. The setting is context only. An inspection of your line is the only way to know its condition."
      },
      {
        "q": "Why do my drains slow after heavy rain?",
        "a": "It can point to groundwater entering the line or to a blockage that shows when flows rise. Tell the crew when it happens."
      },
      {
        "q": "Can hydro jetting remove roots near the river?",
        "a": "On a sound pipe, yes. The entry point may still need repair afterward."
      },
      {
        "q": "What does the 2006 plan say about my pipes?",
        "a": "Nothing about any private pipe. It is a planning document that describes the area's character and uses."
      },
      {
        "q": "Is jetting right for every River Street building?",
        "a": "No. The camera should show the line's condition first, and the crew should say whether the method fits."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your River Street Hydro Jetting Project With Baldwinsville Hydro Jetting Pros",
    "ctaPs": [
      "A riverfront setting makes people assume the worst about a line, and the facts are usually simpler. A clear account of the symptoms and when they happen helps the inspection find the real cause.",
      "Use the request form on this page or call (877) 761-0283 to describe what you are seeing."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
