import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const LessonTable = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell>Carbs</TableCell>
            <TableCell>Protein</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protaine}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const rows = [
  { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protaine: 4.0 },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protaine: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protaine: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protaine: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protaine: 3.9 },
];

export default LessonTable;
