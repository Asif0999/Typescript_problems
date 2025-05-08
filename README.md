##What are some differences between interfaces and types in TypeScript?
In type script both interface and type are used to define the shape of data .But they have some key differences . Now let's talk about the interface and type aliases . 

The basic types in Typescript include string,boolean,number,array,tuple,enum.Each has unique features and purposes,type provide a way of creating new names for exiting types.Type aliases don't define new types instead they provide an altarnative name for an exiting type.type script are divided into three major seciton there is : Any type,Built-In Type and User Defined type . 

On the other hand interface only contain the declaration of properties ,methods and events . We cannot use primitive types in interface because this types already pre-built in the system . The interface can only be used for an object type.Union type can only be defined using type. There is no equivalent to a union type in an interface. But, it is possible to create a new union type from two interfaces . Both type and interface similarly define function types, except for a subtle syntax difference of interface using : vs. => when using type.An interface can extend one or multiple interfaces. Using the extendskeyword, a new interface can inherit all the properties and methods of an existing interface while also adding new properties.

types are more flexible but interface are less flexible . interface has more capabilities but type has fewer capabilities.Type dosen't support inherntly the use of an object but interface support the use of object . inheritence support multiple merged declarations .Interface Used for implementation and extending in classes

#What is the use of the keyof keyword in TypeScript? Provide an example.
Keyof is a keyword in Typescript whcih is used to extract the key type from an object.keyof can also be used with index signatures to extract the index type.It allows for type-safe access to object properties and is particularly useful when working with generic types or when you need to manipulate object structures dynamically.

Example 1: 
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;  // "name" | "age"
 

Example 2:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Alice",
  age: 30
};

const name = getProperty(person, "name");  // type: string
const age = getProperty(person, "age");    // type: number
