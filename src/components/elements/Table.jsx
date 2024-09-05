import React from "react";

export const Table = ({ no, soal, sts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table border border-gray-400">
        <thead>
          <tr className="border border-gray-400">
            <th>No</th>
            <th>Soal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-400 ">
            <th>{no}</th>
            <td>{soal}</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}