const posts = [
  {
    title: "I Started a Blog... Now What?",
    date: "May 24, 2025",
    image: "images/post-1-thumbnail.jpg",
    link: "post-1.html"
  },
  {
    title: "My First Week Learning to Code",
    date: "May 25, 2025",
    image: "images/post-2-thumbnail.jpg",
    link: "post-2.html"
  },
  {
    title: "What PCOS Has Taught Me",
    date: "May 30, 2025",
    image: "images/post-3-thumbnail.jpg",
    link: "post-3.html"
  },
  {
    title: "Coding Meltdowns and Wins",
    date: "June 5, 2025",
    image: "images/post-4-thumbnail.jpg",
    link: "post-4.html"
  }
];

const container = document.getElementById("posts-container");

posts.forEach(post => {
  const card = document.createElement("a");
  card.href = post.link;
  card.className = "blog-card";
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <div class="card-text">
      <h3>${post.title}</h3>
      <p>${post.date}</p>
    </div>
  `;
  container.appendChild(card);
});