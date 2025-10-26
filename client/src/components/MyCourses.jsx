export default function MyCourses({ courses }) {
  if (!courses.length) return <p>No courses uploaded yet.</p>;

  return (
    <div className="courses-grid">
      {courses.map(c => (
        <div key={c._id} className="course-card">
          <h4>{c.courseName}</h4>
          <p>{c.description}</p>
          <p>Price: ₹{c.price}</p>
          {c.videoLink && <a href={c.videoLink} target="_blank" rel="noreferrer">Video</a>}
        </div>
      ))}
    </div>
  );
}
