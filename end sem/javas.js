
import React from "react";
import "./App.css";

// Header Component
function Header() {
  return (
    <h1>Student Management System</h1>
  );
}

// Student List Component
function StudentList() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 45 },
    { id: 3, name: "Kiran", marks: 72 },
    { id: 4, name: "Sita", marks: 30 },
    { id: 5, name: "Arjun", marks: 90 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.id}. {student.name} - Marks: {student.marks}
            {" - "}
            {student.marks >= 40 ? "PASS" : "FAIL"}
          </p>
        </div>
      ))}
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <h3>© 2026 Student Management System</h3>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
