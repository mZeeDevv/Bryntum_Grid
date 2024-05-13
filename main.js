import { Grid } from '@bryntum/grid';
import './style.css';

const grid = new Grid({
    appendTo : 'app',
    columns  : [
      {type : 'rownumber'},
        { field : 'First_Name', text : 'FIRST NAME', width : 200 },
        { field : 'Last_Name', text : 'SURNAME', width : 200 },
        { field : 'FOOD', text : 'FAV FOOD', width : 200, },
        { field : 'city', text : 'City', flex : 1, width : 180 },
        { type : 'rating', field : 'rating', text : 'Rating', width : 180, },
        {
          text     : 'Fav Color',
          field    : 'color',
          flex     : 1,
          editor : {
            type  : 'combo',
            items : ['red', 'green', 'white', 'gray', 'cyan', 'magenta', 'pink', 'teal']
        },
          renderer : ({  cellElement, value }) => {
             cellElement.style.fontWeight = "bolder";
              cellElement.style.color = value;
              return value;
          }
      }
    ],
    data : [
      { First_Name: 'Emily', Last_Name: 'Johnson', city: 'New York', FOOD: 'Pizza', color: 'Blue',rating: 5 },
      { First_Name: 'Michael', Last_Name: 'Smith', city: 'Chicago', FOOD: 'Burger', color: 'Green', rating: 3 },
      { First_Name: 'Sophia', Last_Name: 'Williams', city: 'San Francisco', FOOD: 'Sushi', color: 'Yellow' },
      { First_Name: 'Aiden', Last_Name: 'Brown', city: 'Seattle', FOOD: 'Tacos', color: 'Orange', rating: 2 },
      { First_Name: 'Olivia', Last_Name: 'Jones', city: 'Miami', FOOD: 'Pasta', color: 'Purple' },
      { First_Name: 'William', Last_Name: 'Garcia', city: 'Houston', FOOD: 'Steak', color: 'Pink', rating: 1 },
      { First_Name: 'Emma', Last_Name: 'Martinez', city: 'Boston', FOOD: 'Ramen', color: 'Black' },
      { First_Name: 'Liam', Last_Name: 'Rodriguez', city: 'Atlanta', FOOD: 'BBQ', color: 'White', rating: 3 },
      { First_Name: 'Isabella', Last_Name: 'Lopez', city: 'Dallas', FOOD: 'Tofu', color: 'Brown' },
      { First_Name: 'Mason', Last_Name: 'Hernandez', city: 'Denver', FOOD: 'Fish', color: 'Gray', rating: 2 },
      { First_Name: 'Ethan', Last_Name: 'Gonzalez', city: 'Phoenix', FOOD: 'Curry', color: 'Cyan', rating: 5 },
      { First_Name: 'Oliver', Last_Name: 'Wilson', city: 'Philadelphia', FOOD: 'Chicken', color: 'Magenta', rating: 4 },
      { First_Name: 'Amelia', Last_Name: 'Perez', city: 'Detroit', FOOD: 'Tiramisu', color: 'Teal', rating: 3 },
      { First_Name: 'Charlotte', Last_Name: 'Sanchez', city: 'Austin', FOOD: 'Pad Thai', color: 'Lime', rating: 1},
      { First_Name: 'James', Last_Name: 'Ramirez', city: 'Portland', FOOD: 'Ravioli', color: 'Maroon', rating: 3 },
      { First_Name: 'Benjamin', Last_Name: 'Torres', city: 'Las Vegas', FOOD: 'Gyro', color: 'Turquoise',rating: 2 },
      { First_Name: 'Elijah', Last_Name: 'Nguyen', city: 'Orlando', FOOD: 'Falafel', color: 'Lavender', rating: 3 },
      { First_Name: 'Lucas', Last_Name: 'Gomez', city: 'San Diego', FOOD: 'Soba', color: 'Indigo',rating: 2 },
      { First_Name: 'Ava', Last_Name: 'Russell', city: 'Nashville', FOOD: 'Chili', color: 'Olive', rating: 3 },
      { First_Name: 'Alexander', Last_Name: 'Murray', city: 'Minneapolis', FOOD: 'Pho', color: 'Salmon' },
      { First_Name: 'Mia', Last_Name: 'Kim', city: 'Charlotte', FOOD: 'Burrito', color: 'Coral' },
      { First_Name: 'Harper', Last_Name: 'Ng', city: 'San Antonio', FOOD: 'Noodles', color: 'Azure',rating: 1 },
      { First_Name: 'Logan', Last_Name: 'Chen', city: 'Tampa', FOOD: 'Pancakes', color: 'Violet',rating: 4 },
      { First_Name: 'Jackson', Last_Name: 'Huang', city: 'Raleigh', FOOD: 'Dumplings', color: 'Gold' },
      { First_Name: 'Evelyn', Last_Name: 'Wang', city: 'Salt Lake City', FOOD: 'Falooda', color: 'Silver', rating: 3 },
      { First_Name: 'Mateo', Last_Name: 'Singh', city: 'Kansas City', FOOD: 'Goulash', color: 'Bronze', rating: 4 },
      { First_Name: 'Victoria', Last_Name: 'Patel', city: 'Indianapolis', FOOD: 'Empanadas', color: 'Platinum',rating: 3 },
      { First_Name: 'Madison', Last_Name: 'Li', city: 'Columbus', FOOD: 'Crepes', color: 'Pearl', rating: 3 },
      { First_Name: 'Luna', Last_Name: 'Wong', city: 'St. Louis', FOOD: 'Pierogi', color: 'Ruby', rating: 3 },
      { First_Name: 'David', Last_Name: 'Choi', city: 'Milwaukee', FOOD: 'Fajitas', color: 'Emerald', rating: 3 }
    ],
    features : {
      filter    : true,
      quickFind : true,
      cellEdit : true,
      columnDragToolbar : true,
  },

});
