// src/components/ExerciseDetail.jsx
import React, { useState } from "react";
import CodeEditor from "./CodeEditor"; // Pastikan Anda sudah memiliki komponen CodeEditor
import axios from "axios";

const ExerciseDetail = ({ exercise }) => {
  const [code, setCode] = useState("// Tulis kode Go Anda di sini");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  // Fungsi untuk menjalankan kode menggunakan Piston API
  const handleExecute = async () => {
    try {
      // Mengirim permintaan POST ke Piston API
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: "go",
        version: "1.16.3", // Versi Go yang ingin digunakan
        files: [
          {
            content: code, // Isi dari kode yang akan dijalankan
          },
        ],
        stdin: "", // Jika ada input dari user, bisa tambahkan disini, atau kosongkan
      });

      if (response.data.run.stderr) {
        // Jika terdapat kesalahan, tampilkan pesan kesalahan
        setError(response.data.run.stderr);
        setResult("");
      } else {
        // Jika berhasil, tampilkan output
        setResult(response.data.run.output);
        setError("");
      }
    } catch (error) {
      console.error("Error menjalankan kode:", error);
      // Menampilkan kesalahan jaringan yang lebih rinci
      setError(
        error.response
          ? `Error: ${error.response.status} - ${error.response.statusText}`
          : "Terjadi kesalahan saat menghubungkan ke API."
      );
      setResult("");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{exercise.title}</h2>
      <p>{exercise.description}</p>
      <CodeEditor code={code} onChange={(newCode) => setCode(newCode)} />
      <button
        onClick={handleExecute}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Jalankan Kode
      </button>
      {error && (
        <div className="p-2 mt-4 text-red-800 bg-red-100 rounded">
          <h3 className="font-semibold">Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
      {result && (
        <div className="p-2 mt-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Output:</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default ExerciseDetail;
