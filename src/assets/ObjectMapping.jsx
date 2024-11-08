export const ObjectMapping = () => {
  const objectOfObjects = {
    obj1: { id: 1, name: "John", age: 30, city: "New York" },
    obj2: { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    obj3: { id: 3, name: "Jim", age: 35, city: "Chicago" },
    obj4: { id: 4, name: "Jack", age: 28, city: "Houston" },
    obj5: { id: 5, name: "Jill", age: 22, city: "Phoenix" },
    obj6: { id: 6, name: "Jerry", age: 40, city: "San Antonio" },
    obj7: { id: 7, name: "Joan", age: 33, city: "San Diego" },
    obj8: { id: 8, name: "Joe", age: 29, city: "Dallas" },
    obj9: { id: 9, name: "Jason", age: 31, city: "Austin" },
    obj10: { id: 10, name: "Julie", age: 27, city: "Seattle" },
  };

  const updatedArray = Object.entries(objectOfObjects).map(([key, person]) => {
    return {
      id: key,          
      name: person.name,
      age: person.age + 1,
      city: person.city
    };
  });
  
  console.log(updatedArray);

  return <div></div>;
};
