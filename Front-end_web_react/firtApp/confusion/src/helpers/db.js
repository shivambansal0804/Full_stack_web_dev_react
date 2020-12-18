import { db } from "../firebaseHelp";

export function readDish() {
  let abc = [];
  db.ref("dishes").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function writeChats(dish) {
  return db.ref("dishes").push({
    category: dish.category,
    description: dish.description,
    featured: dish.featured,
    id: dish.id,
    image: dish.image,
    label: dish.label,
    name: dish.name,
    price: dish.price,
  });
}
