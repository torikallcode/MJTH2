// src/components/ExerciseList.jsx
import React from "react";
import ExerciseDetail from "./ExerciseDetail";

const exercises = [
  { id: 1, title: "Hello World", description: "Cetak 'Hello, World!'" },
  { id: 2, title: "Penjumlahan Dua Angka", description: "Buat fungsi untuk mengembalikan jumlah dari dua angka." },
  // Tambahkan latihan lain di sini
];

const ExerciseList = () => {
  return (
    <div className="container p-4 mx-auto">
      {exercises.map((exercise) => (
        <ExerciseDetail key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
