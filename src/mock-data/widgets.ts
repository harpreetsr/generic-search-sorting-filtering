import IWidget from "../interfaces/IWidget";

const widgets: Array<IWidget> = [
  {
    title: "I am first title",
    description: "First desription goes here",
    id: 1,
    rating: 0,
    created: new Date(+new Date() - Math.floor(15156161)),
    updated: new Date(+new Date() - Math.floor(25895615)),
    isSpecialCard: false
  },
  {
    title: "I am second title",
    description: "Second desription goes here",
    id: 2,
    rating: 5,
    created: new Date(+new Date() - Math.floor(15156161)),
    updated: new Date(+new Date() - Math.floor(25895615)),
    isSpecialCard: false
  },
  {
    title: "I am third title",
    description: "Third desription goes here",
    id: 3,
    rating: 9,
    created: new Date(+new Date() - Math.floor(15156161)),
    updated: new Date(+new Date() - Math.floor(25895615)),
    isSpecialCard: false
  },
]

export default widgets;