interface IFooBar {
  foo: string;
  bar: string;
}

const fooBars: Array<IFooBar> = [
  {
    foo: "foo1",
    bar: 'bar1'
  },
  {
    foo: "I am foo two",
    bar: 'I am bar two'
  }
  ,
  {
    foo: "I am foo three",
    bar: 'I am bar three'
  }
]

const sortByFoo = (fooBars: Array<IFooBar>) => {
  fooBars.sort((a, b) => {
    if(a.foo > b.foo){
      return 1;
    }

    if(a.foo < b.foo){
      return -1;
    }
    return 0;
  })

}

const sortByBar = (fooBars: Array<IFooBar>) => {
  fooBars.sort((a, b) => {
    if(a.bar > b.bar){
      return 1;
    }

    if(a.bar < b.bar){
      return -1;
    }
    return 0;
  })

}

function sortByKey<T>(data: Array<T>, key: keyof T) {
  data.sort((a, b) => {
    if(a[key] > b[key]){
      return 1;
    }

    if(a[key] < b[key]){
      return -1;
    }

    return 0;
  })
}

sortByKey<IFooBar>(fooBars, "foo");
sortByKey<IFooBar>(fooBars, "bar");
