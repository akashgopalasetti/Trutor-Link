export default function EnrolledStudents({ enrolled }) {
  if (!enrolled.length) return <p>No students enrolled yet.</p>;

  return (
    <div className="enrolled-grid">
      {enrolled.map((item, idx) => (
        <div key={idx} className="enrolled-card">
          <p><strong>Student:</strong> {item.studentName}</p>
          <p><strong>Course:</strong> {item.courseTitle}</p>
        </div>
      ))}
    </div>
  );
}
